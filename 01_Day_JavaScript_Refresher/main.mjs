// import countries from "./countries.mjs";
// import webTechs from "./webTechs.mjs";

// console.log(countries)
// console.log(webTechs)

// const emptyArr = [];
// const arr = [1, 'Developer', 3, undefined, 5, '🥶'];
// console.log(arr.length)

// let firstItem = arr[0]
// let midItem = arr[2]
// let lastIndex = arr.length - 1
// const lastItem = arr[lastIndex]
// console.log(firstItem, midItem, lastItem)

// const mixedDataTypes = [1, '👺', undefined, true, 'MindGeek', 6, '🪐']
// const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
// console.log('It companies:', itCompanies, '->', itCompanies.length)
// console.log('First Company', itCompanies[0])
// console.log('Second and third Comp', itCompanies[2], itCompanies[3])
// console.log('Last Comp', itCompanies[itCompanies.length - 1])

// for (let i = 0; i < itCompanies.length; i++) {
//     console.log('Company:', itCompanies[i])
// }

// // for (let i = 0; i < itCompanies.length; i++) {
// //     itCompanies[i] = itCompanies[i].toUpperCase() //Asi si funciona porque sustituimos los valores en nuestro array original.
// //     console.log(itCompanies[i])
// // }

// let itCompaniesString = itCompanies.toString()
// console.log(itCompaniesString, 'all of them are big IT Companies')

// function checkIfCompExist(array, company) {
//     array.includes(company)
//         ? console.log(`The company ${company} exists in itCompanies `)
//         : console.log('the company does not Exist');
// }
// checkIfCompExist(itCompanies, 'Google')
// checkIfCompExist(itCompanies, 'Kahoot')

// itCompaniesString.split()
// console.log(itCompaniesString)
// const companiesWithLessThanTwo0 = [];
// const companiesWithLetterA = [];

// itCompanies.forEach((company) => {
//     let count = 0
//     for (let i = 0; i < itCompanies.length; i++) {
//         if (company[i] === 'o') {
//             count++
//         }
//     }
//     if (count < 2) {
//         companiesWithLessThanTwo0.push(company)
//     }
// })

// console.log('Companies with less than two O', companiesWithLessThanTwo0)

// for (let i = 0; i < itCompanies.length; i++) {
//     itCompanies[i] = itCompanies[i].toLowerCase()
//     if (itCompanies[i].indexOf('a') != -1) {
//         companiesWithLetterA.push(itCompanies[i])
//     }
// }
// console.log('Companies with Letter A', companiesWithLetterA)

// // console.log(itCompanies.sort())
// // itCompanies.reverse()
// // console.log(itCompanies)

// // const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
// let companies_3_First_removed = itCompanies.slice(3, itCompanies.length)
// console.log('3 Companies removed from the beggining', companies_3_First_removed)

// let companies_3_Last_removed = itCompanies.slice(0, 4)
// console.log('3 Companies removed from the end', companies_3_Last_removed)

// let companies_3_Middle_removed = itCompanies.slice(2, 5)
// console.log('3 Companies removed from the middle', companies_3_Middle_removed);

// // itCompanies.shift()
// // console.log(itCompanies)

// // itCompanies.splice(2, 2)
// // console.log(itCompanies)

// // itCompanies.pop()
// // console.log(itCompanies)

// itCompanies.splice(0, itCompanies.length)
// console.log(itCompanies)

// EJERCICIOS PARTE 2
// let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
// const words = text.split(/[,\. ]+/);
// words.pop()
// console.log(words)

// const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
// shoppingCart.unshift('Meat')
// shoppingCart.push('Sugar')
// shoppingCart.splice(4, 1)
// shoppingCart[3] = 'Green Tea'
// console.log(shoppingCart)

// const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
// const backEnd = ['Node', 'Express', 'MongoDB']

// const fullStack = frontEnd.concat(backEnd)
// console.log(fullStack)
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
ages.sort((age1, age2) => age1 - age2)
console.log(ages)

const minAge = ages.find(age => age < 20)
console.log(minAge)

const maxAge = ages.find(age => age > 25)
console.log(maxAge)

const averageAge = ages.reduce((sumOfAges, age) => sumOfAges + age, 0) / ages.length
console.log(averageAge)

const rangeOfAges = maxAge - minAge;
console.log(rangeOfAges)

console.log(Math.abs(minAge - rangeOfAges))
console.log(Math.abs(maxAge - rangeOfAges))

