// const dog = {
//     name: 'Ares',
//     legs: 4,
//     color: 'dark',
//     age: 25,
//     bark() {
//         console.log('Woof! Woof!')
//     }
// }
// console.log(dog)

// const dogValues = Object.values(dog)


// dog.breed = 'Bichon Bolognese'
// dog.getDogInfo = function () {
//     console.log(dogValues)
// }
// console.log(dog)

// //1. Find the person who has many skills in the users object.

// const users = {
//     Alex: {
//         email: 'alex@alex.com',
//         skills: ['HTML', 'CSS', 'JavaScript'],
//         age: 20,
//         isLoggedIn: false,
//         points: 30
//     },
//     Asab: {
//         email: 'asab@asab.com',
//         skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
//         age: 25,
//         isLoggedIn: false,
//         points: 50
//     },
//     Brook: {
//         email: 'daniel@daniel.com',
//         skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
//         age: 30,
//         isLoggedIn: true,
//         points: 50
//     },
//     Daniel: {
//         email: 'daniel@alex.com',
//         skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
//         age: 20,
//         isLoggedIn: false,
//         points: 40
//     },
//     John: {
//         email: 'john@john.com',
//         skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
//         age: 20,
//         isLoggedIn: true,
//         points: 50
//     },
//     Thomas: {
//         email: 'thomas@thomas.com',
//         skills: ['HTML', 'CSS', 'JavaScript', 'React'],
//         age: 20,
//         isLoggedIn: false,
//         points: 40
//     },
//     Paul: {
//         email: 'paul@paul.com',
//         skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
//         age: 20,

//         isLoggedIn: false,
//         points: 40
//     }
// }

// const values = Object.values(users)

// const mostSkilledUser = values.reduce((prevUser, currentUser) => {
//     return prevUser.skills.length > currentUser.skills.length
//         ? prevUser
//         : currentUser
// })

// let loggedUsers = 0
// let usersOver50Points = 0

// values.forEach(user => {
//     if (user.isLoggedIn === true) {
//         loggedUsers++
//     }
//     if (user.points >= 50) {
//         usersOver50Points++
//     }
// })

// console.log('Number of Logged Users', loggedUsers)
// console.log('Number of users with greater than 50 points', usersOver50Points)

// for (const user in users) {
//     const skills = users[user].skills
//     if (skills.includes('MongoDB') &&
//         skills.includes('Express') &&
//         skills.includes('React') &&
//         skills.includes('Node')
//     ) {
//         console.log(user)
//     }
// }

// const usersCopy = Object.assign({}, users)

// usersCopy.Alberto = {
//     email: 'alb@alb.com',
//     skills: ['HTML', 'CSS', 'JavaScript'],
//     age: 24,
//     isLoggedIn: false,
//     points: 30
// }
// console.log(usersCopy)

// const personAccount = {
//     firstName: 'Ares',
//     secondName: 'Guzman',
//     incomes: {
//         job: 900,
//         bets: 300,
//         passiveIcomes: 500
//     },
//     expenses: {
//         grocceries: 200,
//         meetings: 300,
//         whims: 250
//     },
//     totalIncome() {

//     },
//     totalExpenses() {

//     },
//     accountInfo() {

//     },
//     addIncome() {

//     },
//     addExpense() {

//     },
//     addAccountBalance() {

//     }
// }

const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt: '08/01/2020 9:00 AM',
        isLoggedIn: false,
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt: '08/01/2020 9:30 AM',
        isLoggedIn: true,
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt: '08/01/2020 9:45 AM',
        isLoggedIn: true,
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt: '08/01/2020 9:50 AM',
        isLoggedIn: false,
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt: '08/01/2020 10:00 AM',
        isLoggedIn: false,
    },
]

const products = [
    {
        _id: 'eedfcf',
        name: 'mobile phone',
        description: 'Huawei Honor',
        price: 200,
        ratings: [
            { userId: 'fg12cy', rate: 5 },
            { userId: 'zwf8md', rate: 4.5 },
        ],
        likes: [],
    },
    {
        _id: 'aegfal',
        name: 'Laptop',
        description: 'MacPro: System Darwin',
        price: 2500,
        ratings: [],
        likes: ['fg12cy'],
    },
    {
        _id: 'hedfcg',
        name: 'TV',
        description: 'Smart TV:Procaster',
        price: 400,
        ratings: [{ userId: 'fg12cy', rate: 5 }],
        likes: ['fg12cy'],
    },
]

// a. Create a function called signUp which allows user to add to the collection. 
// If user exists, inform the user that he has already an account.  

