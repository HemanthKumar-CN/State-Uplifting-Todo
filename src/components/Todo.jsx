import React from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'

const Todo = () => {
    const [data,setData]=React.useState([]);
    const [showAll,setShowAll]=React.useState(true);

    const handleAdd = (title)=> {
        const payload={
            title,
            status:false,

        }

        setData([...data, payload])
    }

    const handleDelete =(id)=> {
        setData(data.filter(item=> item.title !=id ))
    }

    const handleToggle = (id) => {
        
        const updatedTodo=data.map(item => 
  item.title===id ? {...item, status:!item.status}: item.status);
        
        setData(updatedTodo)
    }



  return (
    <div>Todo
        <TodoInput onClick={handleAdd}/>
        {data.filter(item=> showAll ? true :!item.status  ).map(item => {
            return (
                <TodoList handleDelete={handleDelete} handleToggle={handleToggle} {...item}/>
            )
        })}

        <button onClick={()=>setShowAll(!showAll)}>{showAll ? "Show Only Unfinished Tasks": "Show all tasks"}</button>
    </div>
  )
}

export default Todo