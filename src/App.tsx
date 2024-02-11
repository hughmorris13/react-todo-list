import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'
import { Header } from './components/Header'
import { Input } from './components/Input'
import { Todo, TodoProps } from './components/Todo'
import { ArrowCircleUp, ArrowCircleDown } from '@phosphor-icons/react'
import styles from './App.module.css'

export type TodoList = Array<TodoProps>

export function App() {
  const [todos, setTodos] = useState<TodoList>([
    // {
    //   id: 1,
    //   content: 'Terminar o primeiro exercício da formação de react do ignite',
    //   isDone: false,
    // }
  ])
  const [value, setValue] = useState<string>('')
  const [sort, setSort] = useState<boolean>(false)

  function hanleInputInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Campo obrigatório e não pode estar vazio')
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('')
    setValue(event.target.value)
  }

  function handleFormSubmit(event: FormEvent) {
    event.preventDefault()
    setTodos([
      ...todos,
      {
        id: todos.length + 1,
        content: value,
        isDone: false,
      }
    ])
    setValue('')
  }

  function handleTodoFinish(id: number) {
    const todosList = todos
    const index = todos.findIndex(item => item.id === id)
    const isDone = todosList[index].isDone
    todosList[index].isDone = !isDone
    setTodos([...todosList])
  }

  function handleTodoDelete(id: number) {
    const todosWithoutCurrent = todos.filter(todo => todo.id !== id)
    setTodos(todosWithoutCurrent)
  }

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <main className={styles.content}>
          <Input 
            onFormSubmit={handleFormSubmit}
            buttonDisabled={!(value.length > 0)}
            onInvalid={hanleInputInvalid}
            onChange={handleInputChange}
            value={value}
            required
          />
          <Todo 
            toDos={todos.sort((a, b) => {
              if (sort) {
                return b.id - a.id
              }

              return a.id - b.id
            })}
            onFinish={handleTodoFinish}
            onDelete={handleTodoDelete}
          />
        </main>
      </div>
      {todos.length > 1 && (
        <button 
          className={styles.sortButton} 
          onClick={() => setSort(!sort)}
        >
          {sort ? <ArrowCircleUp /> : <ArrowCircleDown />}
        </button>
      )}
    </div>
  )
}