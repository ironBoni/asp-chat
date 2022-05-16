import React, { useState, useEffect } from 'react'
import './Contact.css';
import { dataServer } from '../../Data/data'

const Contact = (props) => {
    var { userInfo, setChosenChat, updateLastM } = props;
    const [lastMsg, setLastMsg] = useState('');
    const [lastMsgTime, setLastMsgTime] = useState('');
    const [lastMsgType, setLastMsgType] = useState('text');
    const [fileName, setFileName] = useState('');
    var myid = props.username;

    useEffect(() => {
        updateLastMessage();
        if (updateLastM && updateLastM.current)
            updateLastM.current.push(updateLastMessage);
    });


    async function updateLastMessage() {
    //     chats.forEach(chatData => {
    //         chatData.participicants.forEach(participicant => {
    //             if (participicant === userInfo.id && chatData.participicants.includes(myid)) {
    //                 var maxDate = new Date(1970, 1, 1);
    //                 var message;

    //                 chatData.messages.forEach((msg => {
    //                     if (msg.created > maxDate) {
    //                         message = msg;
    //                         maxDate = msg.created;
    //                     }
    //                 }));

    //                 if (message == undefined)
    //                     return;

    //                 setLastMsg(message.content);
    //                 setLastMsgType(message.type);
    //                 setFileName(message.fileName);
    //                 var time =message.created.toLocaleTimeString().substring(0, 5)
    //                 if(time[time.length -1 ] ===":" ){
    //                     time=time.substring(0,time.length-1)
    //                 }
    //                 setLastMsgTime(message.created.toLocaleDateString() + " " +
    //                    time);
                    
    //                 return;
    //             }
    //         })
    //     })
    var config = {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + props.token
        }
    }
    var res = await fetch(dataServer + "api/contacts/" + userInfo.id + "/messages/last", config);
    var response = await res.json();
    setLastMsg(response.content);
    }

    return (
        <div className='contact' onClick={() => setChosenChat(userInfo)}>
            <img className='profile-image' alt='profile' src={userInfo.profileImage}></img>
            <div className='text'>
                <h6 className='contact-name'>{userInfo.name}</h6>
                <p className='contact-message'>
                    {lastMsgType === 'text' ? (lastMsg) : (fileName)}
                </p>
            </div>
            <span className='time small float-right'>{lastMsgTime}</span>
        </div>
    )
}

export default Contact;