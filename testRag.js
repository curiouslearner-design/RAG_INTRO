import { EmbedingModel } from "./controller/User/embeding.js";

async function runTest() {
  console.log(`starting RAG test...\n`);
  try {
    const testQuery = "cmd to push on remote";
    console.log(`sending the query ${testQuery}\n`);
    const result = await EmbedingModel(testQuery);

    console.log(`\n==================================final result===========================\n`);
    console.log(result);
    
    console.log(`==============================================================================`);
    
    
    
  } catch (error) {
    console.error("Test failed with an error:\n",error);
    
  }
  
  
}

runTest();