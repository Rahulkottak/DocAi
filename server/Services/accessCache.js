import Cache from "../Cache.js";
export async function getCache(prompt) {
  const lowerPrompt = prompt.toLowerCase().replace(/\s/g, ''); // making all lowercase and removing all spaces
  const cache = await Cache.findOne({ prompt:lowerPrompt });
  if (cache) {
    return cache.answer;
  }
  return null;
}

export async function saveCache(prompt,answer){
    const lowerPrompt = prompt.toLowerCase().replace(/\s/g, ''); // making all lowercase and removing all spaces
    const cache = new Cache({prompt:lowerPrompt,answer})
    await cache.save()
}