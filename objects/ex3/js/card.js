class Card{
    constructor(receita){
        this.receita = receita
    }
    render(){
        const cards = `
        <div class = "card">
        <h2>${this.receita.titulo}</h2>
        <img class = "imagem" src="${this.receita.imagem}"/>
        <p class="ingredientes">${this.receita.ingredientes}</p>
        </div>  
        `
    // document.querySelector('.cards').insertAdjacentHTML("beforeend", cards)
    }
}
