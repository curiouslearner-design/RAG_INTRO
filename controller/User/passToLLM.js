import {ai} from "../../config/Gemini.js"

export async function passToLLM(matches,query){
  
  // Building context
  const context = (matches||[]).map((m)=>m.metadata?.text || "").filter(Boolean).join('\n\n')

  const prompt =`context:${context || "not relevent context found"}\n\n Question:\n${query}`;
  
  

  const response= await ai.models.generateContent({
    model:"gemini-2.5-flash",
    contents:prompt,
    config:{
      systemInstruction:"You are a helpful Git tutor. Do not answer questions outside of Git. If asked about other topics, reply: 'I have expertise only in the Git domain and nothing else.'"
      
    }
  });

  console.log("llm answer:",response.text);
  return response.text;
  
}