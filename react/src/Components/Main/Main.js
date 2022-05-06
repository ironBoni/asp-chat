import React, { useState } from 'react'
import Chat from '../Chat/Chat';
import SignInPage from '../SignInPage/SignInPage';


export default function Main() {

    const [isShowSignIn, setIsShowSignIn] = useState(true);
    return (
        <div>
        {isShowSignIn ?
            (<SignInPage setIsShowSignIn = {setIsShowSignIn}/>)
            : (<Chat setIsShowSignIn = {setIsShowSignIn}/>)}
        </div>
    )
}
