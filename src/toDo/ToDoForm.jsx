const ToDoForm =({todo, setTodo, addTodo}) => {
    return (
        <div className="form">
             <input className="input-plan" type="text" placeholder="Write your plans for today" onChange={(e) => setTodo(e.target.value)} value={todo}></input>
             <button className='add-button' onClick={addTodo}>Add</button>
        </div>
    )
}

export  default ToDoForm