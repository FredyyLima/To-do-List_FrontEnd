import React from 'react';
import { Link } from 'react-router-dom';
import './card.css'

const Card = (props) => {
  // objeto musica
  const tarefa = props.data;
  return (
    <Link to={`/view/${tarefa._id}`} className="col" id="link">
      <div className="card" id="card-box">
        <div className="card-body">
          <h5 className="card-title" id="card">{tarefa.titulo}</h5>
          <span className="badge bg-primary" id="prioridade">Prioridade: {tarefa.prioridade}</span>
        </div>
      </div>
    </Link>
  )
}

export default Card
