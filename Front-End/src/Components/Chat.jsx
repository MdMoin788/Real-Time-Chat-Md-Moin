import React, { useEffect, useState } from 'react'
import { user } from "./Join";
import socketIo from "socket.io-client";
// import "./Chat.css";
// import sendLogo from "../../images/send.png";
import Message from "./Message";
import ReactScrollToBottom from "react-scroll-to-bottom";
// import closeIcon from "../../images/closeIcon.png";
let socket;
const ENDPOINT = "http://localhost:5000/";
const Chat = () => {
    const [id, setid] = useState("");
    const [messages, setMessages] = useState([])
    console.log('messages', messages);
    const [status, SetStatus] = useState(null)
    const send = () => {
        const message = document.getElementById('chatInput').value;
        socket.emit('message', { message, id, user });
        document.getElementById('chatInput').value = "";
    }
    socket = socketIo(ENDPOINT, { transports: ['websocket'] });
    socket.on('userJoined', (data) => {
        console.log('data', data);
        SetStatus("Online")
        setMessages([...messages, data]);
        console.log('data.user, data.message', data.user, data.message);
    })
    useEffect(() => {
        socket.emit('joined', { user })
        socket.on('connect', () => {
            setid(socket.id);
        })
        socket.on('welcome', (data) => {
            if (messages.length == 1) {
                setMessages([...messages, data])
            }
            console.log('data.user, data.message', data.user, data.message);
        })
        socket.on('leave', (data) => {
            SetStatus(null)
            setMessages([...messages, data]);
            console.log(data.user, data.message)
        })
    }, ["toggle"])
    useEffect(() => {
        socket.on('sendMessage', (data) => {
            setMessages([...messages, data]);
            console.log('data.user, data.message, data.id', data.user, data.message, data.id);
        })
        return () => {
            socket.off();
        }
    }, [messages])
    return (
        <div className="chatPage">
            <div className="chatContainer">
                <div className="header">
                    <h2>WE CHAT</h2>
                </div>
                <ReactScrollToBottom className="chatBox">
                    <h3>{status}</h3>
                    {messages.map((item, i) => <Message user={item.id === id ? '' : item.user} message={item.message} i={i} classs={item.id === id ? 'right' : 'left'} />)}
                </ReactScrollToBottom>
                <div className="inputBox">
                    <input onKeyPress={(event) => event.key === 'Enter' ? send() : null} type="text" id="chatInput" />
                    <button onClick={send} className="sendBtn"><img src={"sendLogo"} alt="Send" /></button>
                </div>
            </div>
        </div>
    )
}
export default Chat
