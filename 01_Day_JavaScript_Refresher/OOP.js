const dog = {
    name: 'Ares',
    legs: 4,
    color: 'dark',
    age: 25,
    bark() {
        console.log('Woof! Woof!')
    }
}
console.log(dog)

const dogValues = Object.values(dog)


dog.breed = 'Bichon Bolognese'
dog.getDogInfo = function () {
    console.log(dogValues)
}
console.log(dog)

//1. Find the person who has many skills in the users object.

const users = {
    Alex: {
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 20,
        isLoggedIn: false,
        points: 30
    },
    Asab: {
        email: 'asab@asab.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 50
    },
    Brook: {
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 30,
        isLoggedIn: true,
        points: 50
    },
    Daniel: {
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    John: {
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50
    },
    Thomas: {
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    Paul: {
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 20,
        isLoggedIn: false,
        points: 40
    }
}

const usersCopy = Object.assign({}, users)
const values = Object.values(users)

const mostSkilledUser = values.reduce((prevUser, currentUser) => {
    return prevUser.skills.length > currentUser.skills.length
        ? prevUser
        : currentUser
})

let count = 0

const loggedUsers = values.forEach(user => {
    if (user.isLoggedIn === true) {
        count++
    }
})

console.log('Number of Logged Users', count)
