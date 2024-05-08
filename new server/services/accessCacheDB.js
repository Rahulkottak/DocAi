const Cache = require('../model/cacheDB');

exports.getCache = async(prompt) => {
    const lowerprompt = prompt.toLowerCase().replace(/\s+/g, '');
    const cache = await Cache.findOne({lowerprompt: lowerprompt});
    if(cache){
        return cache.answer;
    }
    return null;
}

exports.saveCache = async(prompt,answer) => {
    // const lowerprompt = prompt.toLowerCase().replace(/\s+/g, '');
    const cache = new Cache({prompt, answer})
    await cache.save();
}