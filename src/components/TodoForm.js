import React, { useEffect, useRef, useState } from 'react'

function TodoForm(props) {
    const [input, setInput] = useState("");


    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus()
    })

    const handleChange =(e) =>{
        setInput(e.target.value)
    }

    const stopRefresh = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() *  10000),
            text: input
        })
        
    };
  return (
    <div>
        <form className='todo-form' onSubmit={stopRefresh}>
           <input 
            placeholder='Add activities'
            type="text"
            value={input} 
            name="text"
            className='todo-input'
            onChange={handleChange}
            ref={inputRef}/>
           <button className='todo-button'>Add</button> 
        </form>
    </div>
  )
}

export default TodoForm