import { TodoItem } from "./TodoItem"

export const TodoList = ({todos = []}) => {
  return (
    
    <ul className="list-group">

        {
            todos.map(todo => (
                //todoItem para mostrar items en el listado
                <TodoItem key={todo.id} todo={todo} />
            ))
        }

</ul>
    
  )
}
