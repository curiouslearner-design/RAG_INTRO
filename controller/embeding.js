import { ai } from "../config/Gemini";
export const EmbedingModel =  async function (Data,type="documnet"){
  try {
    
  const embedingVector=ai.models.embedContent({
    model:"gemini-embedding-2",
    contents:Data,
    config:{
      outputDimensionality:768
    }
  })
  const VECTOR=await embedingVector.embedding[0].values
  const CHUNKDATA={
    text:Data,
    vector:VECTOR
  }
  
  } catch (error) {
    console.error("error during the embedding:",error);
    throw error;
    
  }
  

}