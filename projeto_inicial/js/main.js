
import botaoConclui from './Componente/concluirTarefa.js';
import BotaoDeleta from './Componente/deletaTarefa.js';
    
    const criarTarefa = function(event){

    event.preventDefault();

    const lista = document.querySelector('[data-list]');

    const input =  document.querySelector('[data-form-input]');

    const valor = input.value;

    const tarefa = document.createElement('li');

    tarefa.classList.add('task');

    const conteudo = `<p class="content">${valor}</p>`

    tarefa.innerHTML = conteudo;
    tarefa.appendChild(botaoConclui());
    tarefa.appendChild(BotaoDeleta());
    lista.appendChild(tarefa);
    
    input.value = " " 

    //console.log(valor);    

}

const novaTarefa =  document.querySelector('[data-form-button]');


novaTarefa.addEventListener("click", criarTarefa);




       
       

   
