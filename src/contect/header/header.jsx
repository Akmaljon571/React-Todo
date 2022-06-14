import { useRef } from 'react'
import './header.scss'

function Header({ settodo, setbos }) {
    const  userInput = useRef(null)
    
    const todo = (evt) => {
        evt.preventDefault();
        if (userInput.current.value == '') return
        const newTodo = {
            id: new Date().getTime(),
            text: userInput.current.value,
            isDone: false,
        }

        settodo((prev) => [newTodo, ...prev])
        setbos((prev) => [newTodo, ...prev])
        userInput.current.value = ''
      
    }


    return (
        <form onSubmit={todo} className="form">
            <input ref={userInput} type="text" className="Kirit" placeholder="type there...." />
            <button className="bos">Add todo</button>
        </form>
    )
}

export default Header