import { useState, useRef, useEffect} from "react";
import utilStyles from '../../styles/utils.module.scss';
import axios from 'axios';
import Ellipsis from '../../components/ellipsis/ellipsis';

export default function Chatbot() {

  const messageStatus = useRef(null);
  const [inputValue, setInputValue] = useState('');
  const [chatLog, setChatLog] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
  const handleSubmit = (event) => {
    event.preventDefault();
    setChatLog((prevChatLog) => [...prevChatLog, { type: 'user', message: inputValue }])
    sendMessage(inputValue);
    setInputValue('');
  }
  const sendMessage = (message) => {
    const url = '/api/chat';
    const data = {
      model: "gpt-3.5-turbo",
      max_tokens: 200,
      temperature: 0,
      top_p: 1,
      frequency_penalty: 1,
      presence_penalty: 1,
      messages: [
        {'role':'system', 'content': 'You are an senior software engineer focused on front end development with over 10 years experience. Respond as concisely as possible.'}, 
        { "role": "user", "content": message }
      ]
    };
    setIsLoading(true);
    axios.post(url, data).then((response) => {
      console.log(response);
      setChatLog((prevChatLog) => [...prevChatLog, { type: 'bot', message: response.data.choices[0].message.content }])
      setIsLoading(false);
    }).catch((error) => {
      setIsLoading(false);
      console.log(error);
    })
  }
  useEffect(() => {
    messageStatus.current?.scrollIntoView({behavior: 'smooth'});
  }, [chatLog]);
  return (
    <div className="flex-[1_1_100%] mx-auto">
      <div className={"flex flex-col bg-quidenary p-8 md:p-12 mb-16 " + utilStyles.gradientBorder}>
      <h2 className="title text-denary">Chat with FED AI</h2>
        <div id="messages" className="flex-grow min-h-[200px] h-[calc(50vh)] overflow-y-scroll mb-12 scrollbar">
          <div className="flex flex-col">
            <div className="bg-quadenary rounded-lg p-6 mb-8">Hello there, I'm your FED assistant. What can I help you with today?  😄</div>
            { chatLog.map((message, index) => ( <div key={index} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'
            }`}>
              <div id={"message-" + index} className={`${message.type === 'user' ? 'bg-tridenary' : 'bg-quadenary' } rounded-lg p-6 mb-8 whitespace-pre-wrap`}>
                {message.message}
              </div>
            </div>
          ))}
          { isLoading &&
            <div id="message-loading" key={chatLog.length} className="flex justify-start h-[20px]">
              <div className="p-6">
                <Ellipsis />
              </div>
            </div>
          }
          <div id="message-status" ref={messageStatus}></div>
          </div>
        </div>
        <div className="flex-grow">
          <form onSubmit={handleSubmit}>
            <div className="flex">
              <div className="flex-[80%] mr-4">
                <input type="text" placeholder="Start typing..." value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
              </div>
              <div className="flex-[20%]">
                <button type="submit">Send</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
