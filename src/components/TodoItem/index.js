// Write your code here
import './index.css'

const TodoItem = props => {
  const {simpleTodos, deleteTodo} = props
  const {id, title} = simpleTodos

  const onDeleteButton = () => {
    deleteTodo(id)
  }

  return (
    <li className="todo-list">
      <p className="title">{title}</p>
      <button type="button" className="button" onClick={onDeleteButton}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
