import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { ChatMessage } from "../types";

// Initialize Gemini API
// Using process.env.API_KEY as strictly required by the instructions.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are an AI Design Assistant for "Ventaoo", a high-end interior designer.
Your goal is to represent Ventaoo's aesthetic: minimalist, warm, natural, and sophisticated.
You are chatting with a potential client or a fan on the personal portfolio website.

Guidelines:
1. Tone: Professional, artistic, welcoming, yet concise. Avoid overly corporate jargon.
2. If asked about prices, suggest scheduling a consultation as every project is unique.
3. If asked about style, describe it as "Wabi-sabi meets modern luxury" emphasizing natural light and organic textures.
4. Keep responses relatively short (under 100 words) unless asked for detailed advice.
5. You can offer general interior design tips.
`;

export const sendMessageToGemini = async (
  history: ChatMessage[], 
  newMessage: string
): Promise<string> => {
  try {
    // We are using gemini-2.5-flash for fast, efficient text chat
    const modelId = 'gemini-2.5-flash';
    
    // Construct the conversation history including the system instruction context
    // Ideally, we would use ai.chats.create() for stateful history, but for a simple 
    // stateless service wrapper, we can just send the prompt with context or use the chat helper.
    
    const chat = ai.chats.create({
      model: modelId,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: history.map(msg => ({
        role: msg.role,
        parts: [{ text: msg.text }]
      }))
    });

    const result: GenerateContentResponse = await chat.sendMessage({ 
      message: newMessage 
    });

    return result.text || "I apologize, I'm reflecting on that design concept. Could you rephrase?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("Unable to reach the design studio at the moment.");
  }
};