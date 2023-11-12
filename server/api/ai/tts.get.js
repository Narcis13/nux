import fs from "fs";
import path from "path";
import OpenAI from "openai";
const config = useRuntimeConfig();
const openai = new OpenAI({
  apiKey: config.openai_key,
})

const speechFile = path.resolve("./speech.mp3");

async function main() {
  const mp3 = await openai.audio.speech.create({
    model: "tts-1",
    voice: "onyx",
    input: `Fii-mea a luat primul ei proiect de design interior.Prietena ei își reamenajează camera și a apelat la ea. Plata este o ieșire la film.
    Sunt mândră tare că îmi calcă pe urme, dar mai ales că aplică ce învață la școală pentru patrumiicincisuteșaizecișișapte de lei.`,
  });
 // console.log(speechFile);
  const buffer = Buffer.from(await mp3.arrayBuffer());
  await fs.promises.writeFile(speechFile, buffer);
}


export default defineEventHandler(async (event) =>{

  main();


  return {text:process.cwd()}
})