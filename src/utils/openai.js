import OpenAI from "openai";
import { DEEPSEEK_KEY } from "./constants";

const openai = new OpenAI({
  apiKey: DEEPSEEK_KEY,
  baseURL: "https://api.deepseek.com/v1",
  dangerouslyAllowBrowser: true,
});

export default openai;
