//Fazer a chamada usando fetch para pegar uma imagem
//colocar a imagem criando tag img no body
//


// fetch('rainbow.jpg').then(response =>{
//     console.log(response)
//     return response.blob() //Esse blob  é um formato de arquivo,deixa o objeto de uma forma mais leve 
// }).then(blob =>{
//     console.log(blob);
//     document.getElementById("rainbow").src =
//     URL.createObjectURL(blob)
    
// })

//async await

async function pegarArcoIro(){
    const response = await fetch('rainbow.jpg')
    const blob = await response.blob()
    console.log(response);
    console.log(blob);
    document.getElementById("rainbow").src =
    URL.createObjectURL(blob) 
    
}

pegarArcoIro().then(() => console.log("YAY, carrregou!"))
.catch(()=> "Droga! não carregou :(")