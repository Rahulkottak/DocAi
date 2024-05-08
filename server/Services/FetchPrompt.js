import openai from "./OpenAiBot.js";

export default async function fetchPrompt(prompt){
    const response = await openai.createCompletion({
        model: "gpt-3.5-turbo-instruct",
        prompt: `${prompt}`,
        temperature: 0,
        max_tokens: 3900,
        top_p: 1,
        frequency_penalty: 1,
        presence_penalty: 0,
      });

    return response;
}