import { OpenAI } from 'langchain/llms'
import { PromptTemplate } from 'langchain/prompts'
import { LLMChain } from 'langchain/chains'
import dotenv from 'dotenv'

dotenv.config({ path: '.env.local' })

const { OPENAI_API_KEY } = process.env

const model = new OpenAI({ openAIApiKey: OPENAI_API_KEY, temperature: 0.9 })
const template = 'What is a good name for a company that makes {product}?'
const prompt = new PromptTemplate({
  template: template,
  inputVariables: ['product'],
})
const chain = new LLMChain({ llm: model, prompt: prompt })
// 将 llmModel 与 prompt 组合进 LLMChain
// 完成上述初始化动作后，仅需调用 call 方法，传入参数
const res = await chain.call({ product: 'colorful socks' })
console.log(res)
