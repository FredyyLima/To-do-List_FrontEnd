import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Api from "../../api/api";
import '../Edit/edit.css'

const Edit = () => {
  const navigate = useNavigate();
  //declarar o estado da musica
  const [tarefa, setTarefa] = useState({
    titulo: '',
    descricao: '',
    prioridade: '',
    stats: '',
    prazo: ''
  });
  
  useEffect(() => {
    getTarefaById();
  }, []);

  // buscar a musica que ja foi cadastrado no banco.
  // buscar a musica pelo o id passado via parametro da url.
  const { id } = useParams();

  //buscar a musica por id;
  const getTarefaById = async () => {
    const request = await Api.fetchGetById(id);
    const tarefa = await request.json();
    setTarefa(tarefa);
  };

  const handleFieldsChange = (evento) => {
    // copio o objeto do estado.
    const tarefaEdit = { ...tarefa };
    // musicaEdit['titulo'] = 'novo valor'
    // atualiza os campos do objeto de forma dinamica de acordo com o input que o usuario digitou
   tarefaEdit[evento.target.name] = evento.target.value;
    // atualzo estado musica
    setTarefa(tarefaEdit);
  }

  const handleSubmit = async (evento) => {
    evento.preventDefault();
    const request = await Api.fetchPut(tarefa, id);
    const data = await request.json();
    alert(data.message);
    navigate(`/view/${id}`);
  }

  const handleBack = async (evento) => {
    evento.preventDefault();
    const request = await Api.fetchPut(tarefa, id);
    const data = await request.json();
    navigate('/');
  }

  return (
    <div className="container">
      <div className="card mt-4" id="edit">
        <div className="card-title">
          <div className="row">
            <div className="col">
              <h3 className="mx-3 my-3">Edição da Tarefa</h3>
            </div>
          </div>
        </div>
        <div className="card-body" id="card-body-edit">
          <form onSubmit={handleSubmit}>
            <div className="row mb-4">
              <div className="col-4">
                <div className="form-group">
                  <label htmlFor="titulo">Nome da tarefa:</label>
                  <input
                    id="titulo"
                    className="form-control"
                    type="text"
                    placeholder="Nome da tarefa"
                    value={tarefa.titulo}
                    onChange={handleFieldsChange}
                    name="titulo"
                  />
                </div>
              </div>
              <div className="col-4">
                <div className="form-group">
                  <label htmlFor="descricao">Descrição:</label>
                  <input
                    id="descricao"
                    type="text"
                    className="form-control"
                    placeholder="Descrição"
                    onChange={handleFieldsChange}
                    value={tarefa.descricao}
                    name="descricao"
                  />
                </div>
              </div>
              <div className="col-4">
                <div className="form-group">
                  <label htmlFor="prioridade">Prioridade:</label>
                  <input
                    id="prioridade"
                    type="text"
                    className="form-control"
                    onChange={handleFieldsChange}
                    value={tarefa.prioridade}
                    placeholder="Alta, Média ou Baixa"
                    name="prioridade"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                <div className="form-group">
                  <label htmlFor="stats">Status:</label>
                  <input
                    id="stats"
                    type="text"
                    onChange={handleFieldsChange}
                    value={tarefa.stats}
                    className="form-control"
                    placeholder="Feito, Fazendo ou Fazer"
                    name="stats"
                  />
                </div>
              </div>
              <div className="col-4">
                <div className="form-group">
                  <label htmlFor="prazo">Tempo para executar a tarefa:</label>
                  <input
                    id="prazo"
                    type="time"
                    onChange={handleFieldsChange}
                    value={tarefa.prazo}
                    className="form-control"
                    min="00:00"
                    max="10:00"
                    placeholder="prazo"
                    name="prazo"
                  />
                </div>
              </div>
              <div className="col-4 d-flex align-items-end justify-content-around">
                <button type="submit" className="btn btn-edit" id="btn-edit" >
                  Enviar
                </button>
                <button type="button" className="btn btn-cancel" id="btn-cancel-edit" onClick={handleBack}>
                  Voltar
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Edit;
