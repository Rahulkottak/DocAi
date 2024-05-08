import express from "express";
import fetchPrompt from "../Services/FetchPrompt.js";
import { getCache, saveCache } from "../Services/accessCache.js";

const { Router } = express;

const botRouter = Router();

botRouter.post("/", async (req, res) => {
  const prompt = req.body.prompt;
  const cache = await getCache(prompt);
  if (cache) res.status(200).json({ bot: cache });
  else {
    const response = await fetchPrompt(prompt);
    await saveCache(prompt, response.data.choices[0].text);
    res.status(200).send({
      bot: response.data.choices[0].text,
    });
  }
});

export default botRouter;