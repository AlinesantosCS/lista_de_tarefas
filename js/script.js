console.log('to-do')
    
/*criar uma funcão chamada criarTarefa, que deve dar uma alerta 
"tarefa criada" e essa função deve ser executada quando o usuário 
fazer um click no botão de adicionar no footer
*/


let adicionarTarefa = document.getElementById("adicionar-tarefa")
//Adicionado exibir o que for digitado no input
let inputTarefa = document.getElementById('tarefa-digitada')
//Adicionado que segura o elemento pai do input
let divTarefas = document.querySelector('#tarefas')

adicionarTarefa.onClick = criarTarefa

function finalizarTarefa(){
    let listaDeBotoes = document.querySelectorAll('.botao-tarefa')

    for(let i = 0; i < listaDeBotoes.length; i++){
        let botao = listaDeBotoes[i];

        botao.addEventListener('click', function(){

            if(window.confirm("Voce tem certeza que deseja excluir ?")){

                botao.parentElement.parentElement.remove()//removendo o card inteiro

            }

           
       

        })
    }
}
        //Excluindo Tarefa
        finalizarTarefa()
      

   //Após adicionar uma tarefa, o input deve ficar vazio. Se o  usuário tentar adicionar uma tarefa vazia, dar um alerta e não pode deixar a tarefa vazia

function criarTarefa(){
    // Caso o input tiver vazio
    if(inputTarefa.value.trim() == ""){    
                            
        return alert('Voce deve digitar uma tarefa primeiro!')
    
    }

    let tarefa = ` 
    <div class="col-md-4 mb-4 mt-4">
        <div class="card-tarefa">
            <div class="texto-tarefa">
                ${inputTarefa.value}
            </div>
            <div class="botao-tarefa">
                <img src="img/check.png" width="32" 
                alt="Botão para finalizar tarefa" 
                title="Botão para finalizar tarefa">
            </div>
        </div>
    </div>`
    
    // divTarefas.innerHTML = divTarefas.innerHTML + tarefas
    divTarefas.innerHTML += tarefa

    //alert('Tarefa criada ' + inputTarefa.value) Pegar a tarefa digitada

    //Limpando o input para a nova tarefa
    inputTarefa.value = ""

    finalizarTarefa()
}

adicionarTarefa.addEventListener('click',criarTarefa)

// Adicionado uma tecla para executar tarefa
inputTarefa.addEventListener('keypress', function(event){
    // console.log(event)
    if(event.key == 'Enter'){
        criarTarefa()
    }
})




