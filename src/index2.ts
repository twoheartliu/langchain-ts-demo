import { PromptTemplate } from 'langchain/prompts'

const template = 'What is a good name for a company that makes {product}?'
// 初始化一个 PromptTemplate 实例
const prompt = new PromptTemplate({
  template: template,
  inputVariables: ['product'], // 指定模板中的变量
})
// 调用 format 方法，传入参数
const res = await prompt.format({ product: 'colorful socks' })
console.log(res)
// Output: What is a good name for a company that makes colorful socks?
