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
} else if (bmiJhon == bmiMark) {
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


*/

///// EXERCIOIO 4

const bill = 300;
const tipPercent = (bill >= 50 && bill <= 300) ? 1.15 : 1.20;
console.log(tipPercent);

console.log(`The bill was ${bill}, the tip was ${tipPercent}, and the total value ${bill * tipPercent}`);

