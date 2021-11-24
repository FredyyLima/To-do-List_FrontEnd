import React from 'react'
import Api from '../../api/api';
import { useNavigate } from 'react-router-dom';
import '../Cadastro/cadastro.css'

const Cadastro = () => {
  const navigate = useNavigate();
  
  const handleSubmit = async (evento) => {
    evento.preventDefault();
    console.log(evento.target);
    const titulo = evento.target.titulo.value;
    const descricao = evento.target.descricao.value;
    const prioridade = evento.target.prioridade.value;
    const stats = evento.target.stats.value;
    const prazo = evento.target.prazo.value;

    const musica = {
      titulo,
      descricao,
      prioridade,
      stats,
      prazo
    }

    const request = await Api.fetchPost(musica);
    if(request.status === 500) {
      alert('ERRO NO SERVIDOR')
    }
    const result = await request.json();
    if(result.error) {
      console.log(result.error);
    }else {
      alert(result.message);
      navigate('/');
    }
  }

  const handleBack = async (evento) => {
    evento.preventDefault();
    const request = await Api.fetchPut();
    navigate('/');
  }

  return (
    <div className="container" >
      <div className="card mt-4" id="cad">
        <div className="card-title">
          <div className="row">
            <div className="col">
              <h3 className="mx-3 my-3">Cadastro de Tarefas</h3>
            </div>
          </div>
        </div>
        <div className="card-body" id="card-body-cad">
          <form onSubmit={handleSubmit}>
            <div className="row mb-4">
              <div className="col-4">
                <div className="form-group">
                  <label htmlFor="titulo">Nome da tarefa:</label>
                  <input id="titulo" className="form-control" type="text" placeholder="Nome da tarefa" name="titulo"/>
                </div>
              </div>
              <div className="col-4">
                <div className="form-group">
                  <label htmlFor="descricao">Descrição:</label>
                  <input id="descricao" type="text" className="form-control" placeholder="Descrição" name="descricao"/>
                </div>
              </div>
              <div className="col-4">
                <div className="form-group">
                  <label htmlFor="prioridade">Prioridade:</label>
                  <input id="prioridade" type="text" className="form-control" placeholder="Alta, Média ou Baixa" name="prioridade"/>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                <div className="form-group">
                  <label htmlFor="stats">Status:</label>
                  <input id="stats" type="text" className="form-control" placeholder="Fazer, Fazendo ou Feito" name="stats"/>
                </div>
              </div>
              <div className="col-4">
                <div className="form-group">
                  <label htmlFor="prazo">Tempo para executar a tarefa:</label>
                  <input id="prazo" type="time" className="form-control" min="00:00" max="10:00" placeholder="Prazo" name="prazo"/>
                </div>
              </div>
              <div className="col-4 d-flex align-items-end justify-content-around">
                <button type="submit" className="btn btn-cad">Cadastrar</button>
                <button type="button" className="btn btn-back" onClick={handleBack}>Voltar</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Cadastro
