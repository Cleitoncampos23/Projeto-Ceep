const BotaoDeleta = () =>{

    const botaoDeletar = document.createElement('button');
    botaoDeletar.innerText = 'deletar';
    botaoDeletar.addEventListener('click', deletarTarefa);

    return botaoDeletar;
}

 const deletarTarefa = (evento) => {

    const BotaoDeleta = evento.target;

    const tarefaCompleta = BotaoDeleta.parentElement;

    tarefaCompleta.remove();

    //console.log(tarefaCompleta);

    return BotaoDeleta;
 }

 export default BotaoDeleta;