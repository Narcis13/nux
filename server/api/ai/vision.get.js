import OpenAI from "openai"


//env("openai_key")
const config = useRuntimeConfig();
const openai = new OpenAI({
  apiKey: config.openai_key,
})
///Users/narcisbrindusescu/cod/nux/public/b87612a4acca577f6b9a68700_bon.jpg
export default defineEventHandler(async (event) =>{
  
    const response = await openai.chat.completions.create({
        model: "gpt-4-vision-preview",
        messages: [
            {
                role:"system",
                content:"You are an excellent accountant and look at receipts and invoices to aknowledge what the client bought."
            },
          {
            role: "user",
            content: [
              { type: "text", text: "Make a comma separated text with vendor name, date, total amount spent, payment method (cash or card) and nothing else!" },
              {
                type: "image_url",
                image_url:
                  "https://eleventen.live/sigle/factura1.png",
              },
            ],
          },
        ],
        max_tokens:300
      });
     // console.log(response.choices[0]);

    return {raspuns:response.choices[0].message.content}
  })