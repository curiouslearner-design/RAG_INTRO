<<<<<<< HEAD

=======
// import 
>>>>>>> 6f3e859462d383f37c9d05f76e178b9f1876affb

import { PC,pineconeIndex} from "../../config/PineCone.js"
import crypto from "crypto"


export const pinecone = async function (obj) {
  if(!obj || !obj.vector ||!Array.isArray(obj.vector) || obj.vector.length===0){
    throw new error("Invalid or missing vector objects passed to pinecone function")
    
  }
try {
  const recordId=crypto.randomUUID();

  await pineconeIndex.upsert({
   records:[{ id:recordId,
    values:obj.vector,
    metadata:{
    text:obj.text
   } }]
  })
<<<<<<< HEAD
  
=======
>>>>>>> 6f3e859462d383f37c9d05f76e178b9f1876affb
  console.log(`successfully stored chunk (${recordId}) in pinecone!`);  
} catch (error) {
  console.error("Issue with the Storing :",error);
  throw error;
}
  
}