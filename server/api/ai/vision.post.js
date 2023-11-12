import OpenAI from "openai"

import fs from 'fs';

const config = useRuntimeConfig();
const openai = new OpenAI({
  apiKey: config.openai_key,
})

export default defineEventHandler(async (event) =>{
  const body = await readBody(event);
 //let withPrefix=''
 let raspuns=''
 
 // fs.readFile(`./public/${body.url}`, async (err, data) => {
   // if (err) throw err;
   function convertImage() {
    const data =  fs.readFileSync(process.cwd()+`/public/${body.url}`);
    let base64Image = Buffer.from(data, 'binary').toString('base64');
   let withPrefix = 'data:image/png;base64,' + base64Image;
   return withPrefix
  }

  const base64data=   convertImage();

  //  console.log(base64Image);

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
            image_url:base64data
             // "https://eleventen.live/sigle/factura1.png",
          },
        ],
      },
    ],
    max_tokens:300
  });




//});

return {raspuns:response.choices[0].message.content}
  })