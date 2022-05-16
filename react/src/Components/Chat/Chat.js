import React, { useState, useRef } from 'react'
import './Chat.css';
import { users } from '../../Data/data';
import ChatList from '../ChatList/ChatList'
import Conversation from '../Conversation/Conversation'
import Welcome from '../Welcome/Welcome';

const Chat = (props) => {
    const [render, setRender] = useState(false);
    const updateLastArray = useRef(Array(users.length).fill(null));

    const [chosenChat, setChosenChat] = useState();
    return (
        <div className="container-fluid">
            <div className='row no-gutters rounded-lg shadow main'>
                <ChatList setChosenChat={setChosenChat} updateLastProp = {updateLastArray} 
                setIsShowSignIn = {props.setIsShowSignIn} username= {props.username} token = {props.token}
                setToken = {props.setToken}/>
                {chosenChat ?
                    <Conversation chosenChat={chosenChat} updateLastProp = {updateLastArray}
                    setIsShowSignIn = {props.setIsShowSignIn} username= {props.username} token = {props.token} setRender={setRender} render={render}/>
                    : <Welcome />}
            </div>
        </div>
    )
}

export default Chat;