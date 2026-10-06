import { createOpenAI } from '@ai-sdk/openai';
import { streamText } from 'ai';

// Grok API uses standard OpenAI SDK structure
const grok = createOpenAI({
  apiKey: process.env.GROK_API_KEY || '',
  baseURL: 'https://api.x.ai/v1',
});

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const result = streamText({
      model: grok('grok-beta'), // Using grok-beta or grok-2 depending on what's available
      system: `You are an expert high school career counselor for a platform called 'Career Path'. 
Your goal is to help teenagers figure out their ideal high school streams (Science PCM/PCB, Commerce, Humanities) and long-term career goals based on their interests, hobbies, and aversions.
Be highly encouraging, use a friendly yet professional tone. Keep responses relatively concise and highly actionable.
Recommend specific streams, fields, exams, and skills. Reference realistic roadmaps.`,
      messages,
    });

    return result.toDataStreamResponse();
  } catch (error) {
    console.error('Chat API Error:', error);
    return new Response('Error processing AI response', { status: 500 });
  }
}
