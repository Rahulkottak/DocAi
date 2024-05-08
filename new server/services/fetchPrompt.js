const OpenAI = require('openai');
require("dotenv").config();

const openai = new OpenAI({apiKey: process.env.API_KEY});

// exports.fetchPrompt = async(prompt) => {
//     const response = await openai.Completion.create({
//         model: "gpt-3.5-turbo-instruct",
//         prompt: `${prompt}`,
//         temperature: 0,
//         max_tokens: 3900,
//         top_p: 1,
//         frequency_penalty: 1,
//         presence_penalty: 0,
//     })
//     return response;
// }

exports.fetchPrompt = async (prompt) => {
    try {
        const response = await openai.completions.create({
            model: "gpt-3.5-turbo-instruct",
            prompt: prompt,
            temperature: 0,
            max_tokens: 3900,
            top_p: 1,
            frequency_penalty: 1,
            presence_penalty: 0,
        });
        return response;
    } catch (error) {
        console.error(error);
        throw error;
    }
};