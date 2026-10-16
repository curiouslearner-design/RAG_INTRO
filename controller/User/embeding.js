import { ai } from "../../config/Gemini.js";
import { QueryPineCone } from "./QueryPineCone.js";
import { passToLLM } from "./passToLLM.js";
export const EmbedingModel =  async function (query){
  try {
  const queryembedingVector=await ai.models.embedContent({
    model:"gemini-embedding-2",
    contents:query,
    config:{
      outputDimensionality:768
    }
  })

  const queryVECTOR=queryembedingVector.embeddings[0].values;
  const match = await QueryPineCone(queryVECTOR);
  return await passToLLM(match,query)

 
  } catch (error) {
    console.error("error during the embedding:",error);
    throw error;
  }
}