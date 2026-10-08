import { ai } from "../../config/Gemini.js";
import { pinecone} from "./pinecode.js";
export const EmbedingModel =  async function (Data,type="documnet"){
  try {
    if(!Data || !Data===String || Data.trim()==""){
      console.warn("Empty or Invalid Data");
      
      return;
    }
  const embedingVector=await ai.models.embedContent({
    model:"gemini-embedding-2",
    contents:Data,
    config:{
      outputDimensionality:768
    }
  })
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