const { createOpenAI } = require('@ai-sdk/openai');
const { generateText } = require('ai');
require('dotenv').config({ path: '.env.local' });

const groq = createOpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: 'https://api.groq.com/openai/v1',
});

async function main() {
  try {
    const result = await generateText({
      model: groq('openai/gpt-oss-120b'),
      prompt: 'Hello! Please reply with exactly one word: Success',
    });
    console.log("Response:", result.text);
  } catch (err) {
    console.error("Error:", err);
  }
}

main();
