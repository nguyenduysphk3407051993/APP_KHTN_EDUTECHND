import React, { useState, useRef, useEffect } from 'react';
import { sendMessageToAI } from '../services/aiService';
import { ChatMessage, AIConfig, AIProvider } from '../types';

// Define available models for each provider
const MODEL_OPTIONS: Record<AIProvider, string[]> = {
  'GEMINI': ['gemini-3-flash-preview', 'gemini-3-pro-preview', 'gemini-2.5-pro'],
  'OPENAI': ['gpt-4o', 'gpt-4o-mini', 'gpt-4.1-mini'],
  'OPENROUTER': ['openai/gpt-4o-mini', 'moonshotai/kimi-k2.5', 'google/gemini-3-flash-preview', 'anthropic/claude-3.5-sonnet']
};

interface ChatWidgetProps {
  initialContext?: string;
}

const DEFAULT_CONFIG: AIConfig = {
  provider: (import.meta.env.VITE_AI_PROVIDER as AIProvider) || 'GEMINI',
  apiKey: import.meta.env.VITE_GEMINI_API_KEY || '',
  model: ''
};

export const ChatWidget: React.FC<ChatWidgetProps> = ({ initialContext }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSettings, setShowSettings] = useState(false); // Toggle Settings View

  // Load config from localStorage or use defaults
  const [config, setConfig] = useState<AIConfig>(() => {
    const saved = localStorage.getItem('khtn_ai_config');
    return saved ? JSON.parse(saved) : DEFAULT_CONFIG;
  });

  // Local state for settings form
  const [tempConfig, setTempConfig] = useState<AIConfig>(config);
  const [isCustomModel, setIsCustomModel] = useState(false);

  // Update tempConfig model when provider changes if not custom
  useEffect(() => {
    if (!isCustomModel) {
      const defaultModel = MODEL_OPTIONS[tempConfig.provider]?.[0] || '';
      setTempConfig(prev => ({ ...prev, model: defaultModel }));
    }
  }, [tempConfig.provider]);

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: 'Xin chào! Mình là trợ lý AI KHTN. Bạn cần giúp gì về bài học hôm nay không?'
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen, showSettings]);

  const saveSettings = () => {
    setConfig(tempConfig);
    localStorage.setItem('khtn_ai_config', JSON.stringify(tempConfig));
    setShowSettings(false);
    // Optional: Add a system message or toast
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: input
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const stream = await sendMessageToAI(input, config);

      const botMsgId = (Date.now() + 1).toString();
      setMessages(prev => [...prev, { id: botMsgId, role: 'model', text: '' }]);

      let fullText = '';
      for await (const chunk of stream) {
        fullText += chunk;
        setMessages(prev => prev.map(m =>
          m.id === botMsgId ? { ...m, text: fullText } : m
        ));
      }

    } catch (error) {
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        role: 'model',
        text: `Lỗi: ${(error as Error).message}. Vui lòng kiểm tra lại Cài đặt.`,
        isError: true
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  // Basic Markdown formatter (bold and lists)
  const formatText = (text: string) => {
    const lines = text.split('\n');
    return lines.map((line, idx) => {
      let content = line;

      // Bold parsing (simple)
      const parts = content.split(/(\*\*.*?\*\*)/g);
      const formattedLine = parts.map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={i} className="font-bold text-slate-900">{part.slice(2, -2)}</strong>;
        }
        return part;
      });

      if (line.trim().startsWith('- ')) {
        return <li key={idx} className="ml-4 list-disc">{formattedLine.slice(1)}</li>;
      }
      if (line.trim().startsWith('* ')) {
        return <li key={idx} className="ml-4 list-disc">{formattedLine.slice(1)}</li>;
      }

      return <p key={idx} className="min-h-[1em]">{formattedLine}</p>;
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-[90vw] md:w-[400px] h-[550px] max-h-[80vh] bg-white rounded-2xl shadow-2xl flex flex-col border border-slate-200 overflow-hidden animate-fade-in-up transition-all duration-300">

          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-3 sm:p-4 flex justify-between items-center text-white shrink-0">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                {showSettings ? '⚙️' : '🤖'}
              </div>
              <div className="truncate max-w-[150px] sm:max-w-none">
                <h3 className="font-bold text-sm truncate">{showSettings ? 'Cài đặt AI' : 'Trợ lý KHTN'}</h3>
                <p className="text-xs text-blue-100 truncate">
                  {showSettings ? 'Cấu hình kết nối' : `Sử dụng: ${config.provider}`}
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              {/* Settings Toggle */}
              <button
                onClick={() => {
                  setTempConfig(config); // Reset temp to current on open
                  setShowSettings(!showSettings);
                }}
                className={`p-2 rounded-lg hover:bg-white/20 transition-colors ${showSettings ? 'bg-white/20' : ''}`}
                title="Cài đặt"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
              </button>

              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors p-1"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
            </div>
          </div>

          {/* CONTENT AREA */}
          {showSettings ? (
            // SETTINGS VIEW
            <div className="flex-1 overflow-y-auto p-6 bg-slate-50">
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Nhà cung cấp AI</label>
                  <select
                    value={tempConfig.provider}
                    onChange={(e) => setTempConfig({ ...tempConfig, provider: e.target.value as AIProvider })}
                    className="w-full p-2 border border-slate-300 rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  >
                    <option value="GEMINI">Google Gemini</option>
                    <option value="OPENAI">OpenAI (ChatGPT)</option>
                    <option value="OPENROUTER">OpenRouter</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">API Key</label>
                  <input
                    type="password"
                    value={tempConfig.apiKey}
                    onChange={(e) => setTempConfig({ ...tempConfig, apiKey: e.target.value })}
                    placeholder="Nhập khóa API..."
                    className="w-full p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                  <p className="text-xs text-slate-500 mt-1">Khóa của bạn được lưu an toàn trên trình duyệt này.</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Model</label>
                  {!isCustomModel ? (
                    <div className="flex gap-2">
                      <select
                        value={tempConfig.model}
                        onChange={(e) => {
                          if (e.target.value === 'custom') {
                            setIsCustomModel(true);
                            setTempConfig({ ...tempConfig, model: '' });
                          } else {
                            setTempConfig({ ...tempConfig, model: e.target.value });
                          }
                        }}
                        className="flex-1 p-2 border border-slate-300 rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      >
                        {MODEL_OPTIONS[tempConfig.provider]?.map(model => (
                          <option key={model} value={model}>{model}</option>
                        ))}
                        <option value="custom">Khác (Nhập tay)...</option>
                      </select>
                    </div>
                  ) : (
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={tempConfig.model}
                        onChange={(e) => setTempConfig({ ...tempConfig, model: e.target.value })}
                        placeholder="Nhập mã model..."
                        className="flex-1 p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      />
                      <button
                        onClick={() => setIsCustomModel(false)}
                        className="px-3 py-2 text-sm text-slate-600 hover:text-slate-800 bg-slate-100 rounded-lg hover:bg-slate-200"
                        title="Quay lại danh sách"
                      >
                        ✕
                      </button>
                    </div>
                  )}
                </div>

                <div className="pt-4 flex gap-3">
                  <button
                    onClick={() => setShowSettings(false)}
                    className="flex-1 py-2 border border-slate-300 rounded-lg text-slate-700 hover:bg-slate-100 font-medium"
                  >
                    Hủy
                  </button>
                  <button
                    onClick={saveSettings}
                    className="flex-1 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium shadow-sm"
                  >
                    Lưu cấu hình
                  </button>
                </div>
              </div>
            </div>
          ) : (
            // CHAT MESSAGES VIEW
            <>
              <div className="flex-1 overflow-y-auto p-4 bg-slate-50 space-y-4">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${msg.role === 'user'
                        ? 'bg-blue-600 text-white rounded-br-none'
                        : 'bg-white text-slate-700 border border-slate-200 shadow-sm rounded-bl-none'
                        } ${msg.isError ? 'bg-red-50 text-red-600 border-red-200' : ''}`}
                    >
                      <div className="markdown-body">
                        {msg.role === 'user' ? msg.text : formatText(msg.text)}
                      </div>
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-white border border-slate-200 rounded-2xl rounded-bl-none px-4 py-3 shadow-sm flex items-center gap-1">
                      <span className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></span>
                      <span className="w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-75"></span>
                      <span className="w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-150"></span>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <div className="p-4 bg-white border-t border-slate-100">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyPress}
                    placeholder={`Hỏi AI (${config.provider})...`}
                    className="flex-1 px-4 py-2 bg-slate-100 border-none rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    disabled={isLoading}
                  />
                  <button
                    onClick={handleSend}
                    disabled={isLoading || !input.trim()}
                    className="w-10 h-10 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${isOpen ? 'scale-0' : 'scale-100'} transition-transform duration-300 w-14 h-14 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full shadow-lg hover:shadow-blue-500/40 flex items-center justify-center text-white focus:outline-none`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
      </button>
    </div>
  );
};
