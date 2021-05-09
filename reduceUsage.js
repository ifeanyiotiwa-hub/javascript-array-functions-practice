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

//***REDUCE***
//1. Get total mass of all characters

    let totalMass = characters.reduce((accumulator,currentValue) => {
        return accumulator + currentValue.mass;
    },0);

    console.log(totalMass)
//2. Get total height of all characters
    let totalHeight = characters.reduce((accumulator,currentValue) => {
        return accumulator + currentValue.height;
    }, 0);
    console.log(totalHeight);
//3. Get total number of characters by eye color


//4. Get total number of characters in all the character names