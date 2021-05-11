const characters = [
    {
        name: 'Luke Skywalker',
        height: 172,
        mass: 77,
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: 202,
        mass: 136,
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: 150,
        mass: 49,
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: 188,
        mass: 84,
        eye_color: 'blue',
        gender: 'male',
    },
];


//***FILTER***
//1. Get characters with mass greater than 100
const greaterThan100 = item => item.mass > 100;
const charactersWithMassGreaterThan100 = characters.filter(greaterThan100);
//console.log(charactersWithMassGreaterThan100);

//2. Get characters with height less than 200
const heightLessThan200 = item => item.height < 200;
const characterWithHeightLessThan200 = characters.filter(heightLessThan200);
console.log(characterWithHeightLessThan200);
//3. Get all male characters
//4. Get all female characters