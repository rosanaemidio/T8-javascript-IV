//Fazer o fetch pra ver se carregamos o array de cartas
const cardSection = document.getElementById('cards-section')
const placeholderCard = {
    nome: "Carta não carregada",
    tipo: "Arcano Maior",
    descricao:"Sem descrição"
    imagem:"http://via.placeholder.com/250X500"
    link: "https://www.astrolink.com.br/"
}


renderizaCarta = carta =>{
    const novaCarta = new Card(carta).render()
    cardSection.innerHTML = novaCarta
}

fetch('tarot.json') .then(response=>{ 
    return response.json()
}).then(json => {
    console.log(json)
    renderizaCarta(selecionaCartaAleatoria(json))
})

//Fazer função para tirar uma nova carta aleatória

selecionaCartaAleatoria = cartas =>{
    let cartaAleatoria = Math.floor( Math.random()* cartas.length)
    return cartas[cartaAleatoria]

}

//Transformar fetch num assync await
async function carregaCartas(){
    try{
        const response = await fetch('tarot.json')
        const json = await response.json()
        renderizaCarta(selecionaCartaAleatoria(json))
    }catch{
        
    }
}
carregaCartas()

novaCarta = () =>{
    carregaCartas()
}