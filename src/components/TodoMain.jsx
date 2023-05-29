import { useState } from 'react'
import { TodoList } from '../page/TodoList'
import './TodoMain.css'

export const Todomain = () => {
  const [newTask, setNewTask] = useState('')
  const [list, setList] = useState([])
  const [editingId, setEditingId] = useState(null)
  const [editedTask, setEditedTask] = useState('')

  const handleChange = (event) => {
    setNewTask(event.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (newTask === '') return alert('Please enter a task')

    if (list.some((item) => item.taskName === newTask))
      return alert('Task already exists')

    const task = {
      id: list.length === 0 ? 1 : list[list.length - 1].id + 1,
      taskName: newTask,
    }
    setNewTask('')
    setList([...list, task])
  }

  const handleDelete = (taskId) => {
    const newList = list.filter((task) => {
      return task.id !== taskId
    })
    setList(newList)
  }
  const handleEdit = (taskId, taskName) => {
    setEditingId(taskId)
    setEditedTask(taskName)
  }
  const handleSave = (taskId) => {
    const updatedList = list.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          taskName: editedTask,
        }
      }
      return task
    })
    setList(updatedList)
    setEditingId(null)
    setEditedTask('')
  }
  return (
    <div className='App'>
      <div className='Title'>
        <h1>Todo list</h1>
      </div>
      <div className='input-container'>
        <form className='Add-task'>
          <input
            className='input-field'
            type='text'
            value={newTask}
            onChange={handleChange}
            placeholder='Add a new plan'
          />
          <input
            type='submit'
            onClick={handleSubmit}
            value='Add plan'
            className='main-btn'
          ></input>
        </form>
      </div>

      <div className={`list  ${list.length === 0 && 'hide'}`}>
        {list.map((task) => {
          return (
            <TodoList
              key={task.id}
              task={task}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
              handleSave={handleSave}
              setEditedTask={setEditedTask}
              editingId={editingId}
              editedTask={editedTask}
            />
          )
        })}
      </div>
    </div>
  )
}
