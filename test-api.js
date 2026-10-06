const { createOpenAI } = require('@ai-sdk/openai');
const { generateText } = require('ai');

const grok = createOpenAI({
  apiKey: process.env.GROK_API_KEY,
  baseURL: 'https://api.x.ai/v1',
});

async function main() {
  try {
    const result = await generateText({
      model: grok('grok-beta'),
      prompt: 'Hello',
    });
    console.log("Success:", result.text);
  } catch (err) {
    console.error("Error:", err);
  }
}

main();
