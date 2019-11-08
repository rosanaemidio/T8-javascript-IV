let frutas = ["banana", "morango", "bacurí", "laranja"];
let button = document.querySelector('#botao')
let input = document.querySelector('#input')


button.addEventListener("click", function( ){
    let valorInput = input.value;
    let listaFrutas = frutas.find((fruta) => fruta === valorInput);
    
    
    if(listaFrutas){
        console.log(listaFrutas)
    }else {
        alert(`Não achou o ${valorInput}`)
    }
    


//=== Resolução da Professora ===

// let btn = document.getElementById('btn')
// let input = document.getElementById('input')
// let frutasMaiusculas = frutas.map(fruta => fruta.toUpperCase())


// btn.addEventListener('click', function(){
    // let arrAchou = frutas.filter(fruta => fruta === input.value)
    // console.log(arrAchou)
    // if(arrAchou.length > 0){
    //     alert(`ACHOU O ${input.value}`)
    // }else{
    //     alert(`Não achou o ${input.value}`)
    // }

    // if(frutas.find(fruta => fruta === input.value)){
    //     alert(`ACHOU O ${input.value}`)
    // }else{
    //     alert(`Não achou o ${input.value}`)
    // }
//     console.log(typeof input.value)
// console.log(frutasMaiusculas)

//     if( frutasMaiusculas.indexOf(input.value.toUpperCase()) > -1){
//             alert(`ACHOU O ${input.value}`)
//         }else{
//             alert(`Não achou o ${input.value}`)
//         }
// })
