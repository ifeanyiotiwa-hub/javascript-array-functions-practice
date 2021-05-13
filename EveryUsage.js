const characters = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    },
];

//***EVERY***
//1. Does every character have blue eyes?
const haveBlueEyes = characters.every(item => item.eye_color === 'blue')
console.log(haveBlueEyes)
//2. Does every character have mass more than 40?
const haveMassMoreThan40 = characters.every(item => item.mass > 40)
console.log(haveMassMoreThan40);
//3. Is every character shorter than 200?
const shorterThan200 = characters.every(item => item.height < 200)
console.log(shorterThan200)
//4. Is every character male?
const isCharacterMale = characters.every(item => item.gender == "male")
console.log(isCharacterMale)