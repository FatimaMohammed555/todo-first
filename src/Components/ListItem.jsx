import React from 'react'

const ListItem = ({todo , id}) => {
  return (
    <li>
    <label htmlFor={id}>
      <input type="checkbox" id={id} />
     {todo.name}
    </label>
    <div>
    <button>Edit</button>
    <button>Delete</button>
    </div>
  </li>
  )
}

export default ListItem;
