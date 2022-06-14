import { useRef, useState } from 'react';
import './main.scss'

function Main({ todo, settodo, bos, setbos }) {
    const [activ, setactiv] = useState([]);
    const [och, setOch] = useState([]);
    
    let acti = [];
    let none = [];
    window.localStorage.setItem('bosganda', JSON.stringify(todo))


    let divText = useRef('')
    let delet = (evt) =>{
        let News = todo.filter((key)=>{
           if (key.id !== (evt.target.id - 0)) {
               return key 
           } 
      })
       settodo(News)
      {window.localStorage.setItem('data', JSON.stringify(todo))}
       setbos(News)
      {window.localStorage.setItem('data', JSON.stringify(bos))}
    }

    let edit = (evt) =>{
        evt.preventDefault()
        let prom = prompt('edit Todo')
            if (prom <= 1) return 
            todo.forEach((edit) => {
            if (edit.id == (evt.target.id - 0)) {
                let div = evt.target.parentNode.previousSibling.textContent = prom;  
                edit.text = div        
            }
        });
        settodo(todo)
        {window.localStorage.setItem('data', JSON.stringify(todo))}
        setbos(todo)
        {window.localStorage.setItem('data', JSON.stringify(bos))}
    }

    let check = (evt, id) =>{
        let topIndex = todo.findIndex(todo => todo.id === id)
        todo[topIndex].isDone = evt.target.checked
        settodo([...todo])
        window.localStorage.setItem('data', JSON.stringify(todo))
        setbos([...todo])
        window.localStorage.setItem('data', JSON.stringify(bos))


        none = todo.filter((to)=>{ 
            if (to.isDone !== false) {
                return to
            }
        })
        setOch(none)
        window.localStorage.setItem('och', JSON.stringify(och))

        acti = todo.filter((to)=>{ 
            if (to.isDone !== true) {
                return to
            }
        })
        setactiv(acti)
        window.localStorage.setItem('activ', JSON.stringify(acti))
    }
    
    
    let ochiq = () =>{
        none = todo.filter((to)=>{ 
            if (to.isDone !== false) {
                return to
            }
        })
        if (none.length >= 1) {
            setOch(none)
            window.localStorage.setItem('och', JSON.stringify(och))
    
    
            setbos(och);
            {window.localStorage.setItem('bosganda', JSON.stringify(bos))}
        }
    }

    let active = () =>{
        acti = todo.filter((to)=>{ 
            if (to.isDone !== true) {
                return to
            }
        })

        if (activ.length >= 1) {
            setactiv(acti)
            window.localStorage.setItem('activ', JSON.stringify(activ))
    
            setbos(activ);
            {window.localStorage.setItem('bosganda', JSON.stringify(bos))}
        }
    }

    let hamm = () =>{
        setbos(JSON.parse(window.localStorage.getItem('data')))
    }
    

    return (
        <ul className="List">
            {bos.map((todo) =>(
                <li key={todo.id} id={todo.id} className={todo.isDone ? 'Item chiz' : 'Item'}>
                    <input type="checkbox" onChange={(evt) => check(evt,todo.id)} className="check" defaultChecked={todo.isDone} />
                    <div ref={divText} className="text_P">{todo.text}</div>
                    <div className="button">
                      <button className="edit" id={todo.id} disabled={todo.isDone} onClick={edit} >Edit</button>
                      <button className="del" id={todo.id} onClick={delet} >Delete</button>
                    </div>
                </li>
            ))}
            <li className="todd">
                <div className='toddo'><span>{todo.length}</span> ta ToDo</div>
                <button className="activ" onClick={active}>Active</button>
                <button className="none" onClick={ochiq}>O'chiq</button>
                <button className="clear" onClick={hamm}>Hammasi</button>
            </li>
        </ul>
    )
}

export default Main




