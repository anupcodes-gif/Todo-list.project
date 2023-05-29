import './TodoList.css'
import propTypes from 'prop-types'
export const TodoList = ({
  task,
  setEditedTask,
  handleSave,
  handleEdit,
  handleDelete,
  handleToggleComplete,
  editingId,
  editedTask,
}) => {
  return (
    <div className='list-item' key={task.id}>
      {editingId === task.id ? (
        <>
          <input
            className='input-field'
            type='text'
            value={editedTask}
            onChange={(e) => setEditedTask(e.target.value)}
          />
          <button className='main-btn' onClick={() => handleSave(task.id)}>
            Save
          </button>
        </>
      ) : (
        <>
          <div className='task-item-text'>
            <h2>{task.taskName}</h2>
          </div>
          <div className='list-item-btn'>
            <button
              className='main-btn edit-btn'
              onClick={() => handleEdit(task.id, task.taskName)}
            >
              Edit
            </button>
            <button
              className='main-btn delete-btn'
              onClick={() => handleDelete(task.id)}
            >
              Remove
            </button>
            <input
              type='checkbox'
              checked={task.complete}
              onChange={() => handleToggleComplete(task.id)}
            />
          </div>
        </>
      )}
    </div>
  )
}
TodoList.propTypes = [
  {
    task: propTypes.string.isRequired,
    setEditedTask: propTypes.string.isRequired,
    handleSave: propTypes.string.isRequired,
    handleEdit: propTypes.string.isRequired,
    handleDelete: propTypes.string.isRequired,
    handleToggleComplete: propTypes.string.isRequired,
    editingId: propTypes.string.isRequired,
    editedTask: propTypes.string.isRequired,
  },
]
