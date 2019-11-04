const nomesNoRole =['Adriana',
'Adrielly',
'Aline',
'Ana',
'Angelica',
'Ba',
'Babs',
'Carolzinha',
'Carolzona',
'Cecilia',
'Daiana',
'Emanuelle',
'Jackeline',
'Jennifer',
'Josiane',
'Lia',
'Marcela',
'Monique',
'Roiz Garcia',
'Priscilla Soares Alves',
'Raissa',
'Raquel',
'Romênia',
'Rosana',
'Simara',
'Simone',
'Talita',
'Telma',
'Thaís',
'Valdeniza']


let form = document.getElementById("form-do-role");
let nomeInput = document.getElementById('nome')

const validacao = (nome) =>{
    if(nome.trim() === '') throw 'o campo está vazio'
}
const checaPresenca = nome =>{
    let estaNaLista = nomesNoRole.find((presente) => {
        
    })
}
form.addEventListener('submit', function(event){
    event.preventDefault();
    let valorInput = nomeInput.value;

    try{

    }catch(erro){

    }
    


 });