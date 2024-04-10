import React from 'react';
import style from './TodoCard.module.css'
function TodoCard({ title, description, onDelete }) {
  return (
    <div className={style.card}>
      <h3>{title}</h3>
      <p>{description}</p>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}

export default TodoCard;