import React, { useState, useEffect } from 'react'
import './Contact.css';
import { chats } from "../../Data/data";

const Contact = (props) => {
    var { userInfo, setChosenChat, updateLastM } = props;
    const [lastMsg, setLastMsg] = useState('');
    const [lastMsgTime, setLastMsgTime] = useState('');
    const [lastMsgType, setLastMsgType] = useState('text');
    const [fileName, setFileName] = useState('');
    var myUsername = localStorage.getItem('username');

    useEffect(() => {
        updateLastMessage();
        if (updateLastM && updateLastM.current)
            updateLastM.current.push(updateLastMessage);
    });


    function updateLastMessage() {
        chats.forEach(chatData => {
            chatData.participicants.forEach(participicant => {
                if (participicant === userInfo.username && chatData.participicants.includes(myUsername)) {
                    var maxDate = new Date(1970, 1, 1);
                    var message;

                    chatData.messages.forEach((msg => {
                        if (msg.writtenIn > maxDate) {
                            message = msg;
                            maxDate = msg.writtenIn;
                        }
                    }));

                    if (message == undefined)
                        return;

                    setLastMsg(message.text);
                    setLastMsgType(message.type);
                    setFileName(message.fileName);
                    var time =message.writtenIn.toLocaleTimeString().substring(0, 5)
                    if(time[time.length -1 ] ===":" ){
                        time=time.substring(0,time.length-1)
                    }
                    setLastMsgTime(message.writtenIn.toLocaleDateString() + " " +
                       time);
                    
                    return;
                }
            })
        })

    }

    return (
        <div className='contact' onClick={() => setChosenChat(userInfo)}>
            <img className='profile-image' alt='profile' src={userInfo.profileImage}></img>
            <div className='text'>
                <h6 className='contact-name'>{userInfo.nickname}</h6>
                <p className='contact-message'>
                    {lastMsgType === 'text' ? (lastMsg) : (fileName)}
                </p>
            </div>
            <span className='time small float-right'>{lastMsgTime}</span>
        </div>
    )
}

export default Contact;