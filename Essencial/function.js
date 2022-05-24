// FUNÇOES

// ARROW FUNCTION PEGA THIS DO ESCOPO

(()=>{

    this.name = 'Rafael';
    
    const getNameArrowFunction = () => this.name;

    function getNome(){
        return this.name;
    }

    const user ={
         nome : 'Nome do Obejto em Execução',
         getNameArrowFunction,
         getNome
    }

    console.log(user.getNameArrowFunction());
    console.log(user.getNome());

})();

// ARRAY 

const  users = ['Luz','Amanda','Cintia'];

const sexo ={
    HOMEM : Symbol('M'),
    MUIE : Symbol('W')
}
console.log('\nArray Tradicional ', users);
console.log('\n Sexo: ',sexo);


const alunos = [
    {aluno:'Luz' ,   nota : 12},
    {aluno:'Luiz' ,  nota : 10},
    {aluno:'Raissa',  nota : 8},
    {aluno:'Amanda' , nota : 6}

];
// Validar se e um array
console.log('Isso e um array ', Array.isArray(alunos));

//Interar Array Foreach
alunos.forEach((aluno,index,proxAluno)=>{
    console.log('Aluno Corente: ${aluno.aluno} index{index}',proxAluno);
})

//INTERAÇÃO DE ELEMENTOS

// Buscar Elementos 1º Elemento retorna value
const arr = [0,2,3,4,6,7];

console.log('1º Item maior que 5', arr.find(value=> value > 5));

// Buscar Elementos 1º Elemento retorna index
console.log('1º Item maior que 5', arr.findIndex(value=> value > 5));


// Transforma Array Multinivel em  Array Simples
const frutas = ["amora", ["laranja", ["melancia"], "acerola"]];

console.log(frutas.flat(2));

// Removendo Itens do Array
const frutas = ["melancia", "laranja", "acerola"];

console.log('Remove Item do Array POP: ', frutas.pop());
console.log('Remove Item do Array SPLICE: ', frutas.splice(2,1));
