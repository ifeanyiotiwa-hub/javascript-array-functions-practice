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

//***SOME***
//1. Is there at least one male character?
const isThereAMaleCharacter = characters.some(item => item.gender == "male");
console.log(isThereAMaleCharacter)
//2. Is there at least one character with blue eyes?
const isEyeColorBlue = characters.some(item => item.eye_color == "blue");
console.log(isEyeColorBlue);
//3. Is there at least one character taller than 210?
const anyTallerThan210 = characters.some(item => item.height > 210)
console.log(anyTallerThan210)
//4. Is there at least one character that has mass less than 50?
const anyMassLessThan50 = characters.some(item => item.mass < 50)
console.log(anyMassLessThan50);