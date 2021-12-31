import React from 'react'


const List = ({text, todos, setTodos, val}) => {

  const deleteBtn = () => {
    setTodos(todos.filter(el => el.id !== val.id));
  }

    return (
        <>
          <div className="List">
            <li>{text}</li>
            <button onClick={deleteBtn} className="cross"><i className='fas fa-trash'></i></button>
          </div>
        </>
    )
}

export default List
