import { useTodo } from "../hooks/useTodo";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";



export const TodoApp = () => {

    const {todos, handleDeleteTodo, handleNewTodo, handleToggleTodo, todosCounter, pendingTodosCount} = useTodo();
    

  return (

    <>
        <h1>TodoApp: {todosCounter}, <small>Pendientes: {pendingTodosCount}</small> </h1>
        <hr />

        <div className="row">
            <div className="col-7">
                
                <TodoList 
                    todos={todos} 
                    onDeleteTodo={handleDeleteTodo}
                    onToggleTodo={handleToggleTodo}
                />

            </div>

            <div className="col-5">
                <h4>Agregar TODO</h4>
                <hr />
                {/**TodoAdd onNewTodo(todo)*/}
                {/* {id: newDate..., description: '', done: false} */}
                <TodoAdd onNewTodo={handleNewTodo}/>
                {/*Fin TodoAdd*/}
            </div>


        </div>
        
    </>

  )
}
