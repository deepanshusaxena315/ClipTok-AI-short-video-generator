// configs/AiModel.js
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY, // ✅ Make sure this env var is correctly set
});

export default ai;
