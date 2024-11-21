import { GoogleGenerativeAI } from "@google/generative-ai";
const API_KEY="AIzaSyAon7CfKs0sGnLZ72XEegL9mHvZpX9ZnaA";
const genAI = new GoogleGenerativeAI(API_KEY);
export async function sendMsgToGemini(message){
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const prompt = message;
    
    const result = await model.generateContent(prompt);
    return result.response.text();
}
