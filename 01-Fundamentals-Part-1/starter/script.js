
'use strict';
/*

#PARTE 1

let js = 'Amazing';

//console.log(30 + 10 * 30);
let country = 'Portugal';
let continente = "Europa";
let population = 10000000;
console.log(country);
console.log(continente);
console.log(population);

//varaiaveis 
let age = 23;
let nome = 'Ola'
let ver = true;
let children;
console.log(ver);
console.log(age);
console.log(typeof ver);
console.log(typeof nome);
ver = 22;
console.log(typeof children);


const birthYear = 1972;
console.log(birthYear)



//Operator aritméticos

const now = new Date().getFullYear();

const ageJonas = 30;
const ageAnna = 2023 - 1972;
const ageMigas = now - 1972;
//console.log(ageJonas + 59, ageAnna / 4, 3 ** 3)

// Operadores de atribuição
const nome = 'Miguel'
const apelido = 'Jacinto'
console.log(nome + ' ' + apelido)

let x = 4;
console.log(x);
x += 10;
console.log(x);
x++;
console.log(x);
x--;
console.log(x);


//Operadodes de comparação

console.log(ageJonas > ageAnna); // >, >, >=,
console.log(ageMigas);



//##### STRINGS

const firstName = 'Miguel';
const profession = 'Eng';
const birthYear = 1972;

const migas1 = 'Eu sou o ' + firstName + ', sou ' + profession + ' e nasci em ' + birthYear;
console.log(migas1);

const migas2 = `Olá eu 'qwe // sou o "" ${firstName}, sou ${profession} e tenho ${2022 - birthYear} anos`;
console.log(migas2);

const multiline = `iesto é 
uma 
string multi
linha`
console.log(multiline);



// IF THEN ELSES

const birthYear = 2010;
let centuryBirth;

if (birthYear <= 2000) {
    centuryBirth = 20;
} else {
    centuryBirth = 21;
}
console.log(`O século é ${centuryBirth}`);


// TYPE CONVERSION

const input = '1999';
const input2 = 22;
// Converter strings numeros
console.log(input, Number(input) + 10)
console.log(input2 * 2, String(input2))


// TYPE COERCION

// 22 +'22' = '2222'
//'22' - 2 = 20
// '5' * 5 = 25



// FALSY VALUES

// 5 Falsy Values
// 0, '', undifined, null, NaN

console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(''));
console.log(Boolean('msdfsdf'));
console.log(Boolean({}));
console.log(Boolean(undefined));



// Equality operator

const favorito = prompt('Qual é o teu numero favorito?');
console.log(favorito);
console.log(typeof favorito);

=== strick version of the operarot igual para condição
!== strick version of the operarot diferente para condição




const temLinceca = true;
const temBoaVisao = false;

console.log(temBoaVisao, temLinceca, temLinceca && temBoaVisao);


console.log(temBoaVisao, temLinceca, temLinceca || temBoaVisao);

console.log(temBoaVisao, !temBoaVisao);

const canDrive = (temLinceca && temBoaVisao);

if (canDrive) {
    console.log(`A Sara pode conduzir`)
} else {
    console.log(`Alguem deve conduzir j'"a" ${temLinceca}`)
}




//// SWITCH

const day = 'thursday';

switch (day) {
    case 'monday': // === 'monday'
        console.log(`Faz qualquer coisa na
        na`);
        console.log(`Ainda é 2a, depois vais breakar`);
        break;
    case 'tuesday':
        console.log(`Faz qualquer coisa na 3a`);
        break;
    case 'wednesday':
    case 'thursday':
        console.log(`Faz qualquer coisa na 4a ou na 5a`);
        break;
    case 'friday':
        console.log(`Faz qualquer coisa na 6a`);
        break;
    case 'saturday':
    case 'sunday':
        console.log(`Aproveita o fim de semana`);
        break;
    default:
        console.log(`Nada dentro do switch corre bem!`)
}



//// EXPRESSSIONS AND STATEMENTS

Expressions produce values
Statements produzem acções




// Ternary Operator

const age = 23;
age > 18 ? console.log(`Ja posso beber vinhito!`) : console.log(`Tenho de berber agua`);

const drink = age >= 18 ? 'Vinho' : 'Agua'
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = 'Vinho';
} else {
    drink2 = 'Agua';
}
console.log(drink2);

console.log(`Ele gosta de beber ${age >= 18 ? 'Vinho' : 'Agua'}`);


// ###### PARTE 2
'use strict';

// FUNCOES 1

function logger() {
    console.log(`Eu sou o Miguel`);
}

logger();
logger();
logger();

function printc(texto) {
    console.log(texto);
}

function fruitProcess(nuMacas, nuPeras) {
    const sumo = `Este suminho tem ${nuMacas} Macas e ${nuPeras} Peras`;
    return sumo;
}


const sumo1 = fruitProcess(2, 3);
printc(sumo1);
const sumo2 = fruitProcess(3, 1);
printc(sumo2);

*

// FUNCOES 2

'use strict';

function calcAge1(birthYear) { //Function Declaration
    return (2022 - birthYear);
}

let age1 = calcAge1(1972);
console.log(age1);

const calcAge2 = function (birthYear) { //Function Expression
    return (2022 - birthYear);
}

age1 = calcAge2(1971);
console.log(age1);



// FUNCOES 3


function printc(texto) {
    console.log(texto);
}



//ARROW Function



const calcAge3 = birthYear => (2037 - birthYear);
const age3 = calcAge3(1992);
printc(age3);

const anosAteReforma = (birthYear, firstName) => {
    const age = 2022 - birthYear;
    const reforma = 65 - age;
    return `${firstName}, reformas te daqui a ${reforma} anos`;
}
printc(anosAteReforma(1972, 'Miguel'));
printc(anosAteReforma(1952, 'Totas'));

// FUNCOES 4. FUncoes a chamar funcçoes



function cortaFruta(friut) {
    return (friut * 4);
}

function fruitProcess(nuMacas, nuPeras) {
    const gomosDeMacas = cortaFruta(nuMacas);
    const gomosDePeras = cortaFruta(nuPeras);
    const sumo = `Este suminho tem ${gomosDeMacas} gomos_Macas e ${gomosDePeras} gomos_Peras`;
    return sumo;
}

console.log(fruitProcess(5, 4));



// FUNCOEs 5 . Recap

'use strict';

const calcAge = function (birthYear) {
    return 2022 - birthYear;
}

const anosAteReforma = function (birthYear, firstName) {
    const age = calcAge(birthYear)
    const reforma = 65 - age;
    if (reforma > 0) 
        return reforma;
    } else {
        return -1;
    }
    //    return `${firstName}, reformas te daqui a ${reforma} anos`;
}

console.log(anosAteReforma(1942, 'Miguel'));




///// ARRAYS

const friends = ['Ana', 'Rui', 'Paulo', 'Silvia'];
console.log(friends);
friends.push('Tony'); //método ou função de 1 array. + 1 elemento ao fim do array e retorna o tamanho do array
console.log(friends);
console.log(friends.length);
console.log(friends[0]);
friends.unshift('Rita');
console.log(friends); // + 1 elemento ao fim do array e retporna o tamanho do array

console.log(friends.pop());   // - 1 elemento do fim do ARRAY e retorna-a 
console.log(friends);

console.log(friends.shift());   // - 1  elemento do inicio do ARRAY e retorna-a 
console.log(friends);


console.log(friends.indexOf('Paulo'));  //Retorna a posição do elemento

console.log(friends.includes('Paulo'));  //Retorna verdade ou falso, se o elemento existe no array





/////  OBJECTOS

const migas = {
    primeiroNome: 'Miguel',
    ultimoNome: 'Jacinto',
    idade: 50,
    profissão: 'Eng',
    amigos: ['Paulo', 'Ana']
};

console.log(migas);
console.log(migas.idade);
console.log(migas['primeiroNome']);

// const varIn = prompt('O que é que queres saber do migas');

// if (migas[varIn]) {
//     console.log(migas[varIn]);
// } else {
//     console.log('Esquece');
// }

// Acrescentar propriedades a 1 objecto

migas.location = 'Gondas';
migas['email'] = 'mjctjacinto@rt.pt';
console.log(migas['amigos'][0]);

console.log(`O ${migas.primeiroNome} tem ${migas['amigos'].length} amigos e o melhor amigo é o ${migas['amigos'][0]}`);





const migas = {
    primeiroNome: 'Miguel',
    ultimoNome: 'Jacinto',
    dataNascimento: 1972,
    profissão: 'Eng',
    amigos: ['Paulo', 'Ana'],
    temCarta: true,
    // calcIdade: function (ano) {
    //     return (new Date().getFullYear() - ano); //METHOD
    // }
    // calcIdade: function () {
    //     return (new Date().getFullYear() - this.dataNascimento);
    // }

    calcIdade: function () {
        this.idade = (new Date().getFullYear() - this.dataNascimento);
        return this.idade;
    },

    summary: function () {
        return `${this.primeiroNome} tem ${this.calcIdade()} anos, é ${this.profissão} e ${this.temCarta ? 'tem' : 'naõ tem'} carta`;
    },
    sumario2: function () {
        return (this.temCarta ? 'tem' : 'naõ tem')
    }
}
// console.log(migas['dataNascimento']);
// console.log(migas.calcIdade(1972));
// console.log(migas['calcIdade'](migas.dataNascimento));
// console.log(migas.calcIdade(migas.dataNascimento));

//console.log(migas[calcIdade(migas.dataNascimento)]);

//migas.calcIdade();
console.log(migas.summary());
console.log(migas.sumario2());



/// LOOPS

// FOR

for (let rep = 1; rep <= 10; rep++) {
    console.log(`Levanta peso numero ${rep}`);
}



const tipes = [];

const migasArray = [
    'Miguel',
    'Jacinto',
    new Date().getFullYear() - 1972,
    ['Ana', 'Rui', 'Tina'],
    true
];

for (let i = 0; i < migasArray.length; i++) {
    console.log(migasArray[i], typeof (migasArray[i]));
    tipes.push(typeof (migasArray[i]));
}
console.log(tipes);

const anos = [];
const aniversarios = [1991, 2007, 1969, 2020];

for (let i = 0; i < aniversarios.length; i++) {
    anos[i] = new Date().getFullYear() - aniversarios[i];
    console.log(anos[i]);
}




// Continue ou Break
console.log('APENAS STRINGS');
for (let i = 0; i < migasArray.length; i++) {
    if (typeof (migasArray[i]) !== 'string') continue;
    console.log(migasArray[i], 'é uma ' + typeof (migasArray[i]));
}

// Continue ou Break
console.log('APENAS Não strings');
for (let i = 0; i < migasArray.length; i++) {
    if (typeof (migasArray[i]) === 'boolean') break;
    console.log(migasArray[i], 'é um/a ' + typeof (migasArray[i]));
}




// LOOPs reversos e Loops de Loops


const migasArray = [
    'Miguel',
    'Jacinto',
    new Date().getFullYear() - 1972,
    ['Ana', 'Rui', 'Tina']
];

for (let i = migasArray.length - 1; i >= 0; i--) {
    console.log(migasArray[i]);
}


for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(`${i},${j}  => ${i * j}`)
    }
}




// WHILE LOOP - Quando não sabemos quantas vezes vamos iterar.


// for (let i = 1; i <= 10; i++) {
//     console.log(`Repeticao via FOR do exercio numero ${i}`);
// }

let rep = 1;
while (rep <= 10) {
    console.log(`Repeticao via WHILE do exercio numero ${rep}`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
    dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);
}

*/