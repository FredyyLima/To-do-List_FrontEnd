import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import Api from '../../api/api';
import './View.css'

const View = () => {
  const [tarefa, setTarefa] = useState({});
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const AbreModal = () => setOpen(true);
  const FechaModal = () => setOpen(false);

  useEffect(() => {
    getTarefaById();
  }, [])

  const { id } = useParams();
  console.log(id);

  const getTarefaById = async () => {
    const request = await Api.fetchGetById(id);
    const tarefa = await request.json();
    setTarefa(tarefa);
  }

  const handleDelete = async() => {
    const response = await Api.fetchDelete(id);
    const data = await response.json();
    if(data.message) {
      console.log('excluido', data.message);
      navigate('/');
    }else {
      alert(data.error);
    }
  }

  return (
    <div className="container">
      <div className="row my-5">
        <div className="col-12">
          <div className="card my-5" id='container'>
            <h1 className="text-center my-4"><b>Nome da tarefa: </b>{tarefa.titulo}</h1>
            <h3 className="text-center"><b>Descrição: </b>{tarefa.descricao}</h3>
            <h4 className="text-center"><b>Prioridade: </b> {tarefa.prioridade}</h4>
            <h5 className="text-center"><b>Status: </b>{tarefa.stats}</h5>
            <h5 className="text-center"><b>Prazo: </b>{tarefa.prazo}</h5>
            <h6 className="text-center"><b>Data de Criação: </b>{tarefa.dataCriacao}</h6>
            <div className="btn-group mt-3 w-100">
              <Link to={`/edit/${tarefa._id}`} className="btn" id="btn-alt">Alterar</Link>
              <button className="btn" id="btn-del" onClick={AbreModal}>Apagar</button>
            </div>
          </div>
        </div>
      </div>
      <Modal open={open} onClose={FechaModal} center showCloseIcon={false}>
        <h2 className="my-4">Deseja Realmente Apagar?</h2>
        <div className="d-flex w-50 mx-auto justify-content-around">
          <button className="btn btn-danger mr-2" onClick={FechaModal}>Não</button>
          <button className="btn btn-success" onClick={handleDelete}>Sim</button>
        </div>
      </Modal>
    </div>
  )
}

export default View
