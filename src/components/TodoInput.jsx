import React from 'react'

const TodoInput = ({onClick}) => {
    const [title, setTitle]=React.useState("");
    
  return (
    <div>
        <input type="text" placeholder='add Something' value={title} onChange={e => setTitle(e.target.value)}/>

        <button onClick={()=> onClick(title)}>Add</button>
    </div>
  )
}

export default TodoInput