
import { useState, useEffect } from 'react';


const ChatGPT = () => {
    const [generatedText, setGeneratedText] = useState('');

    const concept = "human resource;"
    const callAiApi = async() => {
      const raw = await window.fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers:{"Authorization": "Bearer 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", "content-type":"application/json"},
        body: JSON.stringify({model:"gpt-3.5-turbo", messages:[{role:"user", content:`please give me term name in english language and with arabic term name and hebrew term name , and with his short definition in english and his short definition in Arabic and short definition in Hebrew and with his long definition in english Arabic and Hebrew of category ${concept} , and a web link of term `}]})
      });
      const response = await raw.json();
      console.log(response);
    }
    
    useEffect(() => {
      //callAiApi();
    }, [])
    
    return(
        <div>
        <p>{generatedText}</p>
        </div>
        )
}

export default ChatGPT;
