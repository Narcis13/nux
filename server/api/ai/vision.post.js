import OpenAI from "openai"


const config = useRuntimeConfig();
const openai = new OpenAI({
  apiKey: config.openai_key,
})

export default defineEventHandler(async (event) =>{
  const body = await readBody(event);

   const response = await openai.chat.completions.create({
        model: "gpt-4-vision-preview",
        messages: [
            {
                role:"system",
                content:body.system
            },
          {
            role: "user",
            content: [
              { type: "text", text: body.user },
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
   

   return {raspuns:response.choices[0].message.content}
  })