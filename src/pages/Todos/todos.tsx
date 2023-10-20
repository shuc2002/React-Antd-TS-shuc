import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { List, Input, Button, Checkbox, Card, Radio } from "antd"
import { addTodo, toggleTodo, deleteTodo } from "../../store/modules/todos"
import { Todo } from "../../types/types"

const TodoApp: React.FC = () => {
  const dispatch = useDispatch()
  const todos = useSelector((state: { todos: Todo[] }) => state.todos)
  const [input, setInput] = useState("")
  const [filter, setFilter] = useState("all")

  const filteredTodos = todos.filter((todo) => {
    switch (filter) {
      case "completed":
        return todo.completed
      case "active":
        return !todo.completed
      default:
        return true
    }
  })

  return (
    <div>
      <Card title='Todo App' style={{ width: "100%" }}>
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder='Add a todo'
          addonAfter={
            <Button
              onClick={() => {
                dispatch(addTodo(input))
                setInput("")
              }}
            >
              Add
            </Button>
          }
        />
        <div style={{ margin: "16px 0" }}>
          <Radio.Group
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <Radio.Button value='all'>全部</Radio.Button>
            <Radio.Button value='active'>未完成</Radio.Button>
            <Radio.Button value='completed'>已完成</Radio.Button>
          </Radio.Group>
        </div>
        <List
          dataSource={filteredTodos}
          renderItem={(todo) => (
            <List.Item>
              <Checkbox
                checked={todo.completed}
                onChange={() => dispatch(toggleTodo(todo.id))}
              >
                {todo.text}
              </Checkbox>
              <Button onClick={() => dispatch(deleteTodo(todo.id))}>
                Delete
              </Button>
            </List.Item>
          )}
        />
        <div>
          <strong>Total Todos:</strong> {todos.length} <br />
          <strong>Active:</strong> {todos.filter((t) => !t.completed).length}{" "}
          <br />
          <strong>Completed:</strong> {todos.filter((t) => t.completed).length}
        </div>
      </Card>
    </div>
  )
}

export default TodoApp
