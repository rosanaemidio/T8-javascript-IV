const cepInput = document.getElementById("cep")
const logradouroInput = document.getElementById("logradouro")
const complementoInput = document.getElementById('complemento')
const bairroInput = document.getElementById('bairro')
const localidadeInput = document.getElementById('localidade')
const ufInput = document.getElementById ('uf')
//... continuem a pegar os inputs do index.html para preencher depois com o valor da api

cepInput.addEventListener("blur", ()=>{
    if(cepInput.value){
        fetch(`https://viacep.com.br/ws/${cepInput.value}/json`).then(response => {
            return response.json()
        }).then(json => {
            //Eu tenho que acessar o json e adicionar os valores deste objeto  nos inputs
            //Após isso inserir os valores nos inputs
            // ==== eU RESOLVI ASSIM:
            
            // logradouroInput.value = (json.logradouro)
            // complementoInput.value = (json.complemento)  
            // bairroInput.value = (json.bairro)
            // localidadeInput.value = (json.localidade)
            // ufInput.value.value = (json.uf)
            // ///façam aparecer os valores nos inputs
// console.log(json)
        })
    }
})

preencheInputs = objeto =>{
    logradouroInput.value = objeto.logradouro
    bairroInput.value = objeto.bairro
    localidadeInput.value = objeto.localidade
    ufInput.value = objeto.ufInput   
}
: