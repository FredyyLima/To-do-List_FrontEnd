import React from 'react'
import ListTarefa from '../../components/structure/ListTarefa';
import '../Home/Home.css'

const Home = () => {
  return (
    <div className="container">
      <h1 className="text-center h1">Todas as tarefas</h1>
      <ListTarefa/>
    </div>
  )
}

export default Home
