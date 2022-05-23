import React from 'react'

const TodoList = ({title,status,handleToggle,handleDelete}) => {
  
    return (
    <div>{title}
    <button onClick={()=>handleToggle(title)}>{status ? "TRUE" : "FALSE"}

    </button>
    <button onClick={()=>handleDelete(title)}>Delete</button>
    </div>
    
  )
}

export default TodoList