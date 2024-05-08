const express = require('express');
const  {getCache,saveCache} = require('../services/accessCacheDB');
const {fetchPrompt} = require('../services/fetchPrompt');

const router = express.Router();

router.post('/', async(req,res) => {
    const prompt = req.body.prompt;
    const cache = await getCache(prompt);
    if(cache) res.status(200).json({bot: cache});
    else {
        const response = await fetchPrompt(prompt);
        // console.log(response.choices[0].text);
        const x = response.choices[0].text;
        await saveCache(prompt, x);
        res.status(200).json({
            bot: response.choices[0].text,
        });
    }
});

module.exports = router;