// STRING 

// TRANSFORMA STRING E ARRAY
const slipTexto = 'Rafael'.split('f');
console.log('\n split :',slipTexto);

//REPLACE SUBSTITUI
const replaceTexto = 'Elizabethy'.replace('Eliza','');
console.log('\n replace: ',replaceTexto);

//NUMBER 

const number = 12.3434;
    
//TRANSFORMA NUMBER EM STRING
const numberString = number.toString();
console.log('\n toString numero:',  typeof numberString);

//FORMATA CASA DECIMAIS 
const numberToFixed = number.toFixed(2);
console.log('\n Formatado toFixed numero:',  numberToFixed);


//OBEJTOS 

const user ={
    nome :'Luz',
    idade : 18
}

//RECUPERAR CHAVES OBJETOS
console.log('\n Chaves do Objeto',  Object.keys(user));

//RECUPERAR VALORES OBJETOS
console.log('\n Valores do Objeto:',  Object.values(user));

//RETORNA ARRAY DO OBJETO
console.log('\n Propriedade do objeto KEYS:',  Object.keys(user));

