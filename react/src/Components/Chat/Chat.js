import React, { useState, useRef } from 'react'
import './Chat.css';
import { users } from '../../Data/data';
import ChatList from '../ChatList/ChatList'
import Conversation from '../Conversation/Conversation'
import Welcome from '../Welcome/Welcome';
import { Nav, Navbar, Container } from "react-bootstrap"

const Chat = (props) => {
    const [render, setRender] = useState(false);
    const updateLastArray = useRef(Array(users.length).fill(null));
    const [chosenChat, setChosenChat] = useState();
    function handleClick() {
        props.setIsShowSignIn(true);
        props.setIsSubmittedUser(false);
    } 


    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand className="nav" onClick={handleClick}>Logout</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link className="nav" href="#chat">Chat</Nav.Link>
                        <Nav.Link className="nav" href="#Ratings">Ratings</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            <div className="container-fluid">
                <div className='row no-gutters rounded-lg shadow main'>
                    <ChatList setChosenChat={setChosenChat} updateLastProp={updateLastArray}
                        setIsShowSignIn={props.setIsShowSignIn} username={props.username} token={props.token}
                        setToken={props.setToken} />
                    {chosenChat ?
                        <Conversation chosenChat={chosenChat} updateLastProp={updateLastArray}
                            setIsShowSignIn={props.setIsShowSignIn} username={props.username} token={props.token} setRender={setRender} render={render} />
                        : <Welcome />}
                </div>
            </div>
        </>
    )
}

export default Chat;