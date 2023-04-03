import { OpenAI } from 'langchain'
import { initializeAgentExecutor } from 'langchain/agents'
import { SerpAPI, Calculator } from 'langchain/tools'
import dotenv from 'dotenv'

dotenv.config({ path: '.env.local' })

const { OPENAI_API_KEY } = process.env

const model = new OpenAI({ openAIApiKey: OPENAI_API_KEY, temperature: 0 })
// 执行特定任务，比如搜索引擎查询，计算器计算等
// const tools = [new SerpAPI(), new Calculator()]
const tools = [new Calculator()]

const executor = await initializeAgentExecutor(
  tools,
  model,
  'zero-shot-react-description'
)
console.log('Loaded agent.')

// const input =
//   "Who is Olivia Wilde's boyfriend?" +
//   ' What is his current age raised to the 0.23 power?'
const input = ' What is 100 / 2 ?'
console.log(`Executing with input "${input}"...`)

const result = await executor.call({ input })

console.log(`Got output ${result.output}`)

// 1. 指定模型名称
// 2  debugger 模式, 打印出执行过程
