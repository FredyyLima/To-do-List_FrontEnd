import React from 'react';
import { Link } from 'react-router-dom';
import '../Header/Header.css'

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light w-100" >
      <div className="container" id="navbar">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link className="navbar-brand" to="/" id='txt-menu'>
          Minhas Tarefas Diárias
        </Link>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/cadastro" id='txt-menu'>
                Cadastro de tarefas
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header