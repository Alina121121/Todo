const ToDoList = ({todos, DeleteTodo}) => {
    return (
        <>
        {todos?.length > 0 ? (
            <div className="todos">              
     <ol> 
      { todos.map((todo, index) => (
        <div className='todo'>
 <li key={index}>{todo}</li>
 <button className='delete-button'>
  <img className='delete-logo' src='https://img.icons8.com/fluent-systems-regular/512/FFFFFF/filled-trash.png'
  onClick={() => {DeleteTodo(todo)}}></img>
 </button>
        </div>
      ))}
     </ol>
     </div>
     ) : (
     <div className='empty'>
     </div>
     )}
        </>
    )
}
export default ToDoList