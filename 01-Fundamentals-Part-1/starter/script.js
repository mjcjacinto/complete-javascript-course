

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

*/

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

