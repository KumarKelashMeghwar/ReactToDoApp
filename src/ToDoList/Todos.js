import React from 'react'
import List from './List'

const Todos = ({todos, setTodos}) => {
    return (
        <>
           <div className="list">
               <ul>
               {
                   todos.map(val => {
                      return <List val={val} setTodos={setTodos} todos={todos} text={val.text} key={val.id}/>
                   })
               }
               </ul>
           </div>
        </>
    )
}

export default Todos;
