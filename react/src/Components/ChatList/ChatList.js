import React, { useState, useEffect } from 'react'
import './ChatList.css';
import Contact from '../Contact/Contact'
import { users, chats } from '../../Data/data'
import { Modal } from 'react-bootstrap';

const ChatList = (props) => {
    var username = localStorage.getItem('username');
    var myContacts = [];
    // goes over the chat and find the contacts he talked with.
    chats.forEach(chat => {
        if (chat.participicants.includes(username)) {
            let contactUser = chat.participicants.filter(p => p !== username)[0];
            let contactData = users.filter((user) => user.username === contactUser)[0];
            myContacts.push(contactData)
        }
    })

    const [usersList, setUsersList] = useState(users);
    const [contactsLst, setContactsLst] = useState(myContacts);
    const [userImage, setUserImage] = useState('');
    const [nickName, setNickname] = useState('');
    const [showImageModal, setShowImageModal] = useState(false);
    const [errorAddUser, setErrorAddUser] = useState('')
    const [showAddModal, setShowAddModal] = useState(false);

    function createContacts() {
        return contactsLst.map((user, key) => {
            if (user.username != localStorage.getItem('username')) {
                return (<Contact userInfo={user} setChosenChat={props.setChosenChat} key={key}
                    updateLastM={props.updateLastProp} />)
            }
        })
    }

    useEffect(() => {
        var username = localStorage.getItem('username');
        if (!username)
            username = 'noam';
        var userData = users.filter((user) => user.username === username)[0];

        setUserImage(userData.profileImage);
        setNickname(userData.nickname);
    })

    useEffect(() => {
        var textBox = document.getElementById('contact-user');

        if (textBox)
            textBox.focus();
    }, [showAddModal])


    const getUserInfoByUsername = (otherUsername) =>
        users.filter((user) => user.username === otherUsername)[0];


    const addUserAsFriend = (e) => {
        var textBox = document.getElementById('contact-user');
        if (!textBox)
            return;
        var usernameToAdd = textBox.value.trimEnd();
        var myUsername = localStorage.getItem('username');
        // then check if username is already in the contacts list
        // setErrorAddUser('Username is already your contact.') and return.
        if(usernameToAdd === myUsername) {
            setErrorAddUser('You cannot add yourself to the chat list.');
            return;
        }

        for (const user of myContacts) {
            if (user.username === usernameToAdd) {
                setErrorAddUser('Username is already in your contacts list.')
                return;
            }
        }

        // first check if username exists, if not - update errorAddUser
        // setErrorAddUser('Username doesn't exist.') and return.
        if (users.filter(user => user.username === usernameToAdd).length === 0) {
            setErrorAddUser('Username does not exist.')
            return;
        }

        chats.push({
            chatId: Math.floor(1000 * Math.random() + 200),
            participicants: [usernameToAdd, username],
            messages: []
        });
        var newContacts = [...contactsLst];
        newContacts.push(getUserInfoByUsername(usernameToAdd));
        setContactsLst(newContacts);
        setErrorAddUser('');
        setShowAddModal(false);
    };

    const addUserPressedEnter = (e) => {
        if (e.key === "Enter") {
            addUserAsFriend(e);
        }
    }

    return (
        <div className='col-3 border-right '>
            <div className='chatList-container'>
                <div className='settings-tray'>
                    <button className='click-button' onClick={() => setShowImageModal(true)}>
                        <img className='user-image' alt='user' src={userImage}></img></button>
                    <span className='nickname'>{nickName}</span>
                    <span className="settings-tray--right float-right">
                        <i className="bi bi-person-plus">
                            <button className='click-button' onClick={() => setShowAddModal(true)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    className="bi bi-person-plus" viewBox="0 0 16 16">
                                    <path
                                        d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"></path>
                                    <path fillRule="evenodd"
                                        d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"></path>
                                </svg>
                            </button>
                            <Modal show={showAddModal} centered onHide={() => {
                                setShowAddModal(false);
                                setErrorAddUser('');
                            }}>
                                <Modal.Header closeButton className='header'>
                                    Please enter username to add:
                                </Modal.Header>
                                <Modal.Body>{
                                    <div>
                                        <input type="text" placeholder='Enter a username' autoComplete="off"
                                            className="form-control" id="contact-user" onKeyDown={addUserPressedEnter} />
                                        <div className='error-add-user' id='errorAddingUser'>{errorAddUser}</div>
                                    </div>
                                }</Modal.Body>
                                <Modal.Footer>
                                    <button className='btn btn-primary' onClick={addUserAsFriend}>Add Contact</button>
                                </Modal.Footer>
                            </Modal>
                        </i>
                    </span>
                    <Modal show={showImageModal} centered onHide={() => setShowImageModal(false)}>
                        <Modal.Header closeButton className='header'>
                            {nickName}
                        </Modal.Header>
                        <Modal.Body><img src={userImage} className='big-image'></img></Modal.Body>
                    </Modal>
                </div>
                <div className="search-box">
                    <div className='search-container'>
                        <i>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                className="bi bi-search" viewBox="0 0 16 16">
                                <path
                                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
                            </svg>
                        </i>
                        <input type="text" placeholder="Search here" autoComplete="off"></input>
                    </div>
                </div>

                <div className='left-bar'>
                    {createContacts()}
                </div>
            </div>
        </div>
    )
}

export default ChatList;