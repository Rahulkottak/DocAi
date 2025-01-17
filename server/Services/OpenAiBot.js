import * as dotenv from "dotenv"
import { Configuration , OpenAIApi } from "openai"

dotenv.config();
const configuration = new Configuration({
    apiKey:process.env.APIKEY
})
const openai = new OpenAIApi(configuration)

export default openai