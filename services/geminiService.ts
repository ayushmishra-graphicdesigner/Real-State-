import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';

// Initialize the client only if the key is available to avoid runtime crashes on init
let ai: GoogleGenAI | null = null;
if (apiKey) {
  ai = new GoogleGenAI({ apiKey });
}

export const sendMessageToGemini = async (
  message: string,
  history: { role: string; parts: { text: string }[] }[]
): Promise<string> => {
  if (!ai) {
    return "I'm sorry, my AI brain is currently disconnected (API Key missing). Please contact the office directly.";
  }

  try {
    const model = ai.models;
    
    // System instruction to guide the persona
    const systemInstruction = `
      You are an expert real estate assistant for "Real Estate of Florida". 
      Your tone is professional, helpful, and inviting.
      You help users finding information about Florida real estate, including Miami, Orlando, and Tampa.
      You can answer questions about buying processes, investment opportunities, and general area guides.
      Keep answers concise and focus on generating leads or scheduling consultations.
      If asked about specific live listings, explain that you can guide them to the properties page or they can call an agent.
    `;

    // We use generateContent for a single turn or manage history manually if needed, 
    // but here we will simulate a chat by passing context if we were using the chat API more formally.
    // For simplicity in this brochure site context, we'll use a chat session model.
    
    // Construct the chat history for the API
    // The SDK expects 'user' or 'model' roles.
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction,
        temperature: 0.7,
      },
      history: history.map(h => ({
        role: h.role,
        parts: h.parts
      }))
    });

    const result = await chat.sendMessage({ message });
    return result.text || "I didn't catch that. Could you rephrase?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to the server right now. Please try again later.";
  }
};
