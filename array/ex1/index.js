let frutas = ["banana", "morango", "bacurí", "laranja"];
let button = document.querySelector('#botao')
let input = document.querySelector('#input')


button.addEventListener("click", function( ){
    let valorInput = input.value;
    let listaFrutas = frutas.find((fruta) => fruta === valorInput);
    
    
    if(listaFrutas){
        console.log(listaFrutas)
    }else {
        alert("Esse item não está na lista!")
    }
    



})