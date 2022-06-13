
import React, { useState } from 'react';
import "./chat.css"
export default function Chat() {

    const [message, setState] = useState(''); //состояние для инпута
    const [messages, setMessages] = useState([]); //состояние сообщений чата
    console.log(messages)
    const result = messages.map((item, index) => {
        return <div className={!index ? 'message last' : 'message'} key={index}>{item}</div>
    })

    const handleChange = (event) => {
        const target = event.target.value.toLowerCase()
        let changeTarget = target.replace(/viagra|xxx/g, "***");
        setState(changeTarget)
    }
    const Send = () => {
        setMessages([message, ...messages]);
        setState("");
    }
    return (
        <div className="chat">
            <div className='chat-messages'>
                {result}
            </div>
            <div className="chat-input">
                <input type="text" className="chat-form__input" placeholder="Введите сообщение" value={message} onChange={handleChange} />
                <button className="submit" onClick={Send}>Отправить</button>
            </div>
        </div >
    )
}