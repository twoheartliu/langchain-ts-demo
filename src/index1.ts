import { OpenAI } from 'langchain'
import dotenv from 'dotenv'
// 读取环境变量
dotenv.config({ path: '.env.local' })
// 从环境变量中获取 OpenAI API 密钥
const { OPENAI_API_KEY } = process.env
// 创建 OpenAI 模型实例
const model = new OpenAI({ openAIApiKey: OPENAI_API_KEY, temperature: 0.9 })

try {
  // 调用 OpenAI API，传入问题作为参数
  const res = await model.call(
    'What would be a good company name a company that makes colorful socks?'
  )
  console.log(res)
} catch (error) {
  console.error(error)
}
