import OpenAI from "openai"
import fs from 'fs';
import path from 'path';

const config = useRuntimeConfig();
const openai = new OpenAI({
  apiKey: config.openai_key,
})

function getFileNamesInFolder(folderPath) {
  // Read the contents of the folder
  const files = fs.readdirSync(folderPath);

  // Filter out only the files (not directories)
  const fileNames = files.filter(file => {
    const filePath = path.join(folderPath, file);
    return fs.statSync(filePath).isFile();
  });

  return fileNames;
}

// Example usage


export default defineEventHandler(async (event) =>{

  const body = await readBody(event);

  const response = await openai.images.generate({
    model: "dall-e-3",
    prompt: body.system,
    n: 1,
    size: "1024x1024",
  });
 // image_url = response.data.data[0].url;

      return {image:response.data}
    })