import { useState, useRef } from 'react';
import { Header, Main } from './contect'
import './App.scss';

function App() {
  
   const [todo, settodo] = useState(JSON.parse(window.localStorage.getItem('data')) || []);
   const [bos, setbos] = useState(JSON.parse(window.localStorage.getItem('data')));
  
    return (
      <>
        <Header settodo = {settodo} setbos = {setbos}/>
        <Main todo = {todo} settodo={settodo} bos = {bos}  setbos = {setbos}/>
        {window.localStorage.setItem('data', JSON.stringify(todo))}
      </>
    )
}

export default App;
