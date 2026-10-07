import { createOpenAI } from '@ai-sdk/openai';
import { streamText } from 'ai';

// Groq uses a fully OpenAI-compatible API structure!
const groq = createOpenAI({
  apiKey: process.env.GROQ_API_KEY || '',
  baseURL: 'https://api.groq.com/openai/v1',
});

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const result = await streamText({
      model: groq('openai/gpt-oss-120b'), // Using Groq's fast open-source 120b model
      system: `You are an expert high school career counselor for a platform called 'Career Path'. 
Your goal is to help teenagers figure out their ideal high school streams and long-term career goals.
CRITICAL INSTRUCTION: Keep your responses extremely short, punchy, and concise. Do not write long paragraphs. 
Use bullet points wherever possible. Maximum response length should be 3-4 short sentences or bullet points.
If the user asks a broad question, give a quick, bite-sized overview rather than an exhaustive list.
Tone: Friendly, encouraging, but highly direct and concise.`,
      messages,
    });

    return result.toDataStreamResponse();
  } catch (error) {
    console.error('Chat API Error:', error);
    return new Response('Error processing AI response', { status: 500 });
  }
}
