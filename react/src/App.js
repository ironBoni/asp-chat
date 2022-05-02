import './App.css';
import Chat from './Components/Chat/Chat';

import { Route, BrowserRouter, Routes } from 'react-router-dom';
import SignInPage from './Components/SignInPage/SignInPage';



function App() {
  return (<BrowserRouter>
    <Routes>
      <Route path="/" element={<SignInPage/>} />
      <Route path="/chat" element={<Chat />} />
    </Routes>
  </BrowserRouter>);
}

export default App;
