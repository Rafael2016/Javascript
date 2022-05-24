/**
 * Classe Publico 
 */
class Pessoa {

    nome
    idade 

    constructor(nome,idade){
        this.nome = nome
        this.idade = idade

    }

    apresentar(){
        return `O meu nome é ${this.nome} tenho ${this.idade}`
    }
}

 
const pessoa = new Pessoa("Rafael", 31)

console.log(pessoa.apresentar())
console.log(JSON.stringify(pessoa))
console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))


/**
 * Classe Privato get e set
 */
class PessoaPrivado {

    #nome
    #idade 

    constructor(nome,idade){
        this.#nome = nome
        this.#idade = idade

    }

    /**
     * @GET E SET  
     */
    get nome(){
        return this.#nome
    }
    get idade(){
        return this.#idade
    }

    set nome(nome){
        this.#nome;
    }
    set idade(idade){
        this.#idade;
    }

    apresentar(){
        return `O meu nome é ${this.#nome} tenho ${this.#idade}`
    }
}

const pessoaPrivate = new PessoaPrivado("Carol", 25)

console.log(pessoaPrivate.apresentar())
console.log(pessoaPrivate.stringify(pessoa))
