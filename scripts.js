const apiUrl = 'http://localhost:3001/tarefas';
// pego o elemento lista para poder ser manipulado no js
const lista = document.getElementById('lista');

// buscar os elementos no html
let tituloEl = document.getElementById('titulo');
let descricaoEl = document.getElementById('descricao');
let prioridadeEl = document.getElementById('prioridade');
let statsEl = document.getElementById('stats');
let prazoEl = document.getElementById('prazo');


// [GET] /musicas = retornar e listar a lista de musicas na tela.
const getTarefas = async() => {
  // vou usar a API fech do javascript para disparar uma req do tipo GET para o backend.
  // faz uma requisicao do tipo GET para o backend
  const response = await fetch(apiUrl);
  // musicas = lista de musicas
  const tarefas = await response.json();
  // iterar a lista de musicas onde para cada musica eu preciso exibir alguma coisa no front
  tarefas.map((tarefa) => {
    lista.insertAdjacentHTML('beforeEnd', `
      <div class="col">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">${tarefa.titulo}</h5>
            <p class="card-title">${tarefa.descricao}</p>
            <p class="card-text">${tarefa.prioridade}</p>
            <p class="card-text">${tarefa.stats}</p>
            <p class="card-text">${tarefa.prazo}</p>
            <div class="btn-group">
              <button class="btn btn-outline-primary">Alterar</button>
              <button class="btn btn-outline-danger">Remover</button>
            </div>
          </div>
        </div>
      </div>
    `)
  })
}

// [POST] - cadastrar uma nova musica
const submitForm = async(evento) => {
  evento.preventDefault();

  const tarefa = {
    titulo: tituloEl.value,
    descricao: descricaoEl.value,
    prioridade: prioridadeEl.value,
    stats: statsEl.value,
    prazo: parseFloat(prazoEl.value),
  }

  // construir como vai ser a minha requisicao.
  const request = new Request(`${apiUrl}/add`, {
    method: 'POST',
    body: JSON.stringify(musica),
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  })

  const response = await fetch(request);
  const result = await response.json();
  alert(result.message);

  tituloEl.value = '';
  descricaoEl.value = '';
  prioridadeEl.value = '';
  statsEl.value = '';
  prazoEl.value = '';
  lista.innerHTML = '';

  getTarefas();

}

getTarefas();