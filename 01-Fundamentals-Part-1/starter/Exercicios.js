'use strict';
/*
### Exercico 1
const massJhon = 78;
const hightJhon = 1.69;

const massMark = 92;
const hightMark = 1.95;

//BMI = mass / height ** 2
console.log(massJhon, hightJhon, massMark, hightMark);

const bmiJhon = massJhon / (hightJhon ** 2);
const bmiMark = massMark / (hightMark ** 2);

console.log(bmiJhon, bmiMark);

const markHigherBMI = (bmiJhon > bmiMark)
console.log(markHigherBMI)


const massJhon = 95;
const hightJhon = 1.88;

const massMark = 85;
const hightMark = 1.76;

//BMI = mass / height ** 2
//console.log(massJhon, hightJhon, massMark, hightMark);

const bmiJhon = massJhon / (hightJhon ** 2);
const bmiMark = massMark / (hightMark ** 2);


//const bmiJhon = 12
//const bmiMark = 15

console.log(bmiJhon, bmiMark)

if (bmiJhon > bmiMark) {
    console.log(`O bmi do Jhon (${bmiJhon}) é maior que o do Mark (${bmiMark})`)
} else if (bmiJhon === bmiMark) {
    console.log(`O bmi do Jhon (${bmiJhon}) é igual ao do Mark (${bmiMark})`)
} else {
    console.log(`O bmi do Jhon (${bmiJhon}) é menor do que o do Mark (${bmiMark})`)
}


//Coding Challenge #3

// const averageDolphins = (96 + 108 + 89) / 3;
// const averageKoalas = (88 + 91 + 110) / 3;

// console.log(averageDolphins, averageKoalas);

// if (averageDolphins > averageKoalas) {
//     console.log(`Os Dlfins ganharam, ${averageDolphins} é maior que ${averageKoalas}`);
// } else if (averageDolphins === averageKoalas) {
//     console.log(`Os Dolfins e os Koalas empataram, ${averageDolphins} é igual a ${averageKoalas}`)
// } else console.log(`Os Dolfins perderam`);


const averageDolphins = (97 + 112 + 101) / 3;
const averageKoalas = (88 + 91 + 110) / 3;

console.log(averageDolphins, averageKoalas);

if (averageDolphins > averageKoalas) {
    console.log(`Os Dlfins ganharam, ${averageDolphins} é maior que ${averageKoalas}`);
} else if (averageDolphins === averageKoalas) {
    console.log(`Os Dolfins e os Koalas empataram, ${averageDolphins} é igual a ${averageKoalas}`)
} else console.log(`Os Dolfins perderam`);



///// EXERCIOIO 4

const bill = 300;
const tipPercent = (bill >= 50 && bill <= 300) ? 1.15 : 1.20;
console.log(tipPercent);

console.log(`The bill was ${bill}, the tip was ${tipPercent}, and the total value ${bill * tipPercent}`);



///// EXERCIOIO 5

const calcAverage = (val1, val2, val3) => (val1 + val2 + val3) / 3;

function checkWinner(avgDolhins, avgKoalas) {
    if (avgDolhins >= 2 * avgKoalas) {
        return `Os Dolfins ganharam ${avgDolhins}, ${avgKoalas} aos Koalas`;
    } else if (avgKoalas >= 2 * avgDolhins) {
        return `Os oalas ganharam ${avgKoalas}, ${avgDolhins} aos Dolfin`;
    } else {
        return `Ninguem Ganhou`
    }
}

let dolf = calcAverage(44, 23, 71);
console.log(dolf);
let koal = calcAverage(65, 54, 49);
console.log(koal);
console.log(checkWinner(dolf, koal));

dolf = calcAverage(85, 54, 41);
console.log(dolf);
koal = calcAverage(23, 34, 27);
console.log(koal);
console.log(checkWinner(dolf, koal));



///// EXERCIOIO 6

// const bill = 300;
// const tipPercent = (bill >= 50 && bill <= 300) ? 1.15 : 1.20;
// console.log(tipPercent);


// function tipPercent(bill) {
//     return ((bill >= 50 && bill <= 300) ? 1.15 : 1.20);
// }

const tipPercent = function (bill) {
    return ((bill >= 50 && bill <= 300) ? 1.15 : 1.20);
}

const bill = [125, 555, 44];
console.log(tipPercent(bill[0]), tipPercent(bill[1]), tipPercent(bill[2]));
console.log(tipPercent(bill[0]) * bill[0], tipPercent(bill[1]) * bill[1], tipPercent(bill[2]) * bill[2]);



///// EXERCIOIO 7 Objectos

//For each of them, create an object with properties for their full name, mass, and height(Mark Miller and John Smith)

const mark = {
    nomeCompleto: 'Mark Miller',
    peso: 78,
    altura: 1.69,
    calcBmi: function () {
        this.bmi = this.peso / (this.altura ** 2);
        return this.bmi;
    }
}

const jhon = {
    nomeCompleto: 'John Smith',
    peso: 92,
    altura: 1.95,
    calcBmi: function () {
        this.bmi = this.peso / (this.altura ** 2);
        return this.bmi;
    }
}
mark.calcBmi() > jhon.calcBmi() ?  console.log(`${mark.nomeCompleto} ${mark.calcBmi()} é maior do que o  ${jhon.nomeCompleto}`) : console.log('Outra cena')
    
*/

///// EXERCIOIO 8 Loops

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86,52];
const tips = [];
const total = [];

function tipPercent(bill) {
     return ((bill >= 50 && bill <= 300) ? 1.15 : 1.20);
}

for (let i=0;i< bills.length;i++){
    //console.log(bills[i],tipPercent(bills[i]), tipPercent(bills[i]) * bills[i]);
    total.push(tipPercent(bills[i]) * bills[i]);
   //console.log(total[i]);
}

const arr = [2,3,7];

function avge(arr1){
    let soma = 0;
    for (let i = 0;i < arr1.length; i++){
        soma += arr1[i];
    }
    console.log(soma,arr1.length);
    return soma/arr1.length;
}
console.log(avge(total));
