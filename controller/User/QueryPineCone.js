import { pineconeIndex } from "../../config/PineCone.js";
export async function QueryPineCone(vector) {
  try {
    const searchResult = await pineconeIndex.query({
    topK:5,
    vector,
    includeMetadata:true
  })
  const matchData = searchResult.matches||[];
  return matchData;

  } catch (error) {
    console.error("Error quering Pinecone:",error);
    throw error;
    
  }
 
}
