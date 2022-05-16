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

    async function updateLastMessage() {
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
    
    useEffect(() => {
        updateLastMessage();
        if (updateLastM && updateLastM.current)
            updateLastM.current.push(updateLastMessage);
    }, []);

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