import React from 'react'


const Form = ({setUserInput,userInput, todos, setTodos}) => {

    const inputHandler = (event) => {
        setUserInput(event.target.value);
    }

    const btnClickHandler = () => {
        if(userInput !== ""){
            setTodos([...todos, {text: userInput, id: Math.floor(Math.random()*1000)}        ]);
        }
        else{
            alert("Please enter any text then press the button. Thank you!")
        }
        setUserInput("");
    }

    return (
        <>
          <h3 className="heading">Todos App</h3>
          <div className="main">
            <input value={userInput} onChange={inputHandler} type="text" placeholder='Enter items' name='input' className="input" />  
            <button onClick={btnClickHandler} className="plus">+</button>
          </div>
        </>
    )
}

export default Form;