import { ai } from "../../config/Gemini.js";
import { pinecone} from "./pinecode.js";
<<<<<<< HEAD


export const EmbedingModel =  async function (Data,type="documnet"){
  try {

    if(!Data || !Data===String || Data.trim()==""){
      console.warn("Empty or Invalid Data");
=======
export const EmbedingModel =  async function (Data,type="documnet"){
  try {
    if(!Data || !Data===String || Data.trim()==""){
      console.warn("Empty or Invalid Data");
      
>>>>>>> 6f3e859462d383f37c9d05f76e178b9f1876affb
      return;
    }
  const embedingVector=await ai.models.embedContent({
    model:"gemini-embedding-2",
    contents:Data,
    config:{
      outputDimensionality:768
    }
  })
<<<<<<< HEAD

=======
>>>>>>> 6f3e859462d383f37c9d05f76e178b9f1876affb
  const VECTOR=embedingVector.embeddings[0].values
  const CHUNKDATA={
    text:Data,
    vector:VECTOR
  }
  console.log("vector:",CHUNKDATA.vector,"Text:",CHUNKDATA.text)
  await pinecone(CHUNKDATA);
  
  } catch (error) {
    console.error("error during the embedding:",error);
    throw error;
    
  }
  

}