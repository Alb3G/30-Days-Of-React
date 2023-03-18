const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
]

function checkAndAddCountry(array, country) {
    array.includes(country)
        ? console.log(country.toUpperCase())
        : array.push(country)
}

checkAndAddCountry(countries, 'Ethiopia')
checkAndAddCountry(countries, 'Spain'); console.log(countries)
checkAndAddCountry(countries, 'Ireland')


export default countries