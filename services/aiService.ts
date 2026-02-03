import { GoogleGenAI } from "@google/genai";
import { SYSTEM_INSTRUCTION } from '../constants';
import { AIConfig } from '../types';

export const sendMessageToAI = async (
    message: string,
    config: AIConfig
): Promise<AsyncGenerator<string, void, unknown>> => {
    if (!config.apiKey) {
        throw new Error("Vui lòng nhập API Key trong phần Cài đặt.");
    }

    // 1. GEMINI PROVIDER
    if (config.provider === 'GEMINI') {
        try {
            const genAI = new GoogleGenAI({ apiKey: config.apiKey });
            const model = config.model || 'gemini-3-flash-preview'; // Default model

            const chatSession = genAI.chats.create({
                model: model,
                config: {
                    systemInstruction: SYSTEM_INSTRUCTION,
                    temperature: 0.7,
                },
            });

            const result = await chatSession.sendMessageStream({ message });

            async function* streamGemini() {
                for await (const chunk of result) {
                    // @ts-ignore - The types for the new genai SDK might vary slightly, treating as any for safety
                    const text = chunk.text || "";
                    if (text) yield text;
                }
            }
            return streamGemini();
        } catch (error) {
            console.error("Gemini Error:", error);
            throw new Error(`Lỗi kết nối Gemini: ${(error as Error).message}`);
        }
    }

    // 2. OPENAI & OPENROUTER PROVIDERS
    if (config.provider === 'OPENAI' || config.provider === 'OPENROUTER') {
        const baseURL = config.provider === 'OPENROUTER'
            ? 'https://openrouter.ai/api/v1/chat/completions'
            : 'https://api.openai.com/v1/chat/completions';

        const defaultModel = config.provider === 'OPENROUTER' ? 'google/gemini-3-flash-preview' : 'gpt-4.1-mini';
        const model = config.model || defaultModel;

        const headers: Record<string, string> = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${config.apiKey}`,
        };

        if (config.provider === 'OPENROUTER') {
            headers['HTTP-Referer'] = window.location.origin; // Optional for OpenRouter
            headers['X-Title'] = 'KHTN Master App';
        }

        try {
            const response = await fetch(baseURL, {
                method: 'POST',
                headers,
                body: JSON.stringify({
                    model: model,
                    messages: [
                        { role: 'system', content: SYSTEM_INSTRUCTION },
                        { role: 'user', content: message }
                    ],
                    stream: true,
                }),
            });

            if (!response.ok) {
                const errText = await response.text();
                throw new Error(`API Error (${response.status}): ${errText}`);
            }

            if (!response.body) throw new Error("No response body");

            const reader = response.body.getReader();
            const decoder = new TextDecoder();

            async function* streamOpenAI() {
                let buffer = '';
                while (true) {
                    const { done, value } = await reader.read();
                    if (done) break;

                    const chunk = decoder.decode(value, { stream: true });
                    buffer += chunk;

                    const lines = buffer.split('\n');
                    buffer = lines.pop() || ''; // Keep the last incomplete line in buffer

                    for (const line of lines) {
                        const trimmed = line.trim();
                        if (!trimmed || trimmed === 'data: [DONE]') continue;

                        if (trimmed.startsWith('data: ')) {
                            try {
                                const data = JSON.parse(trimmed.slice(6));
                                const content = data.choices[0]?.delta?.content || '';
                                if (content) yield content;
                            } catch (e) {
                                console.warn("Error parsing stream chunk", e);
                            }
                        }
                    }
                }
            }

            return streamOpenAI();

        } catch (error) {
            console.error("OpenAI/OpenRouter Error:", error);
            throw new Error(`Lỗi kết nối: ${(error as Error).message}`);
        }
    }

    throw new Error("Nhà cung cấp AI không hợp lệ.");
};
