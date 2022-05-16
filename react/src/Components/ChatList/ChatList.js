import React, { useState, useEffect } from 'react'
import './ChatList.css';
import Contact from '../Contact/Contact'
import { users, chats, myServer, dataServer } from '../../Data/data'
import { Modal } from 'react-bootstrap';

function ChatList(props) {
    var id = props.username;
    var myContacts = [];
    var token = props.token;
    //var token = props.token;
    var setContactsAlready = false;
    // goes over the chat and find the contacts he talked with.
    // GET from the server the list of contact

    const [usersList, setUsersList] = useState(users);
    const [contactsLst, setContactsLst] = useState(myContacts);
    const [userImage, setUserImage] = useState('');
    const [name, setname] = useState('');
    const [showImageModal, setShowImageModal] = useState(false);
    const [errorAddUser, setErrorAddUser] = useState('')
    const [showAddModal, setShowAddModal] = useState(false);

    useEffect(() => {
        fetch(dataServer + "api/Login/" + id).then(res => res.json()).then(tok => {
            token = tok.token;
            props.setToken(tok.token);
            var config = {
                method: 'GET',
                headers: {
                    'Accept': '*/*',
                    'Accept-Encoding': 'gzip, deflate, br',
                    'Connection': 'keep-alive',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                }
            }
            fetch(dataServer + "api/contacts/", config).then(res => res.json())
                .then(data => {
                    myContacts = data;
                    setContactsLst(myContacts);
                    setContactsAlready = true;
                });
        })
    }, [])
    useEffect(() => {
        var id = props.username;
        if (!id)
            id = 'noam';
        var userData = users.filter((user) => user.id === id)[0];


        setUserImage(userData.profileImage);
        setname(userData.name);

    })

    useEffect(() => {
    }, [showAddModal])


    const getUserInfoByid = (otherid) =>
        users.filter((user) => user.id === otherid)[0];


    async function addUserAsFriend() {
        var textBox = document.getElementById('contact-user');
        if (!textBox)
            return;
        var idToAdd = textBox.value.trimEnd();
        var myid = props.username;
        var nick = "";
        var user = getUserInfoByid(idToAdd);
        if (!user) nick = idToAdd;
        else nick = user.name;
        // GET to get the server of the idToAdd 
        var config = {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }

        var res = await fetch(dataServer + "api/contacts/server/" + idToAdd, config);
        var response = await res.json();
        var profileImage = response.profileImage;
        if (res.status === 404) {
            setErrorAddUser("id doesn't exist.");
            return;
        }

        if (idToAdd === myid) {
            setErrorAddUser("You cannot add yourself to the chat list.");
            return;
        }

        // POST request to add contact to server
        var data = { "id": idToAdd, "name": response.name, "server": response.server };
        var config = {
            method: 'POST',
            headers: {
                'accept': '*/*',
                'content-type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify(data)
        }
        var res = await fetch(dataServer + "api/Contacts/", config);

        if (res.status === 400) {
            setErrorAddUser("This user is already in your contacts list.");
            return;
        }

        // End of POST
        chats.push({
            chatId: Math.floor(1000 * Math.random() + 200),
            participicants: [idToAdd, id],
            messages: []
        });
        var newContacts = [...contactsLst];
        newContacts.push({
            name: response.name, profileImage: profileImage, id: idToAdd,
            server: response.server, last: ''
        });
        setContactsLst(newContacts);
        setErrorAddUser('');
        setShowAddModal(false);

        // Send Invitation to him
        // POST request - from (id), to (idToAdd), server (of me)
        data = { "from": id, "to": idToAdd, "server": response.server };
        config = {
            method: 'POST',
            headers: {
                'accept': '*/*',
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        }
        //if((response.server).indexOf(dataServer) < 0 &&
        //    dataServer.indexOf(response.server) < 0)
        fetch(dataServer + "api/invitations/", config);
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
                    <span className='name'>{name}</span>
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
                                    Please enter id to add:
                                </Modal.Header>
                                <Modal.Body>{
                                    <div>
                                        <input type="text" placeholder='Enter a id'
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
                            {name}
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
                    {contactsLst.map((user, key) => {
                        if (user.id != props.username) {
                            return (<Contact userInfo={user} setChosenChat={props.setChosenChat} key={key}
                                updateLastM={props.updateLastProp} username={props.username} />)
                        }
                    })}
                </div>
            </div>
        </div>
    )
}

export default ChatList;