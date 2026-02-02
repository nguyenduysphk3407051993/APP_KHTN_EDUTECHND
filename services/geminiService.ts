import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { SYSTEM_INSTRUCTION } from '../constants';
import { ChatMessage } from '../types';

let chatSession: Chat | null = null;
let genAI: GoogleGenAI | null = null;

const getGenAI = () => {
  if (!genAI) {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      console.error("API Key is missing!");
      throw new Error("API Key is missing");
    }
    genAI = new GoogleGenAI({ apiKey });
  }
  return genAI;
};

export const initializeChat = () => {
  try {
    const ai = getGenAI();
    chatSession = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
  } catch (error) {
    console.error("Failed to initialize chat session", error);
  }
};

export const sendMessageToGemini = async (
  message: string
): Promise<AsyncGenerator<string, void, unknown>> => {
  if (!chatSession) {
    initializeChat();
  }

  if (!chatSession) {
    // Fallback if init fails
    throw new Error("Chat session could not be initialized.");
  }

  try {
    const result = await chatSession.sendMessageStream({ message });
    
    // Create a generator to yield chunks of text
    async function* streamGenerator() {
      for await (const chunk of result) {
        const c = chunk as GenerateContentResponse;
        if (c.text) {
          yield c.text;
        }
      }
    }
    
    return streamGenerator();

  } catch (error) {
    console.error("Error sending message to Gemini:", error);
    // Try to re-init session on error just in case
    chatSession = null;
    throw error;
  }
};
