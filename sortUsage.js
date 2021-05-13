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


//***SORT***
//1. Sort by mass
const mass = (a, b) => a.mass - b.mass;
const sortByMass = characters.sort(mass);
console.log(sortByMass);
//2. Sort by height
const height = (a, b) => a.height - b.height;
const sortByHeight = characters.sort(height);
console.log(sortByHeight);

//3. Sort by name
const nameSort = characters.sort((a, b) => {
if(a.name > b.name) return 1;
return -1;
})
console.log(nameSort)
//4. Sort by gender
const sortByGender = characters.sort(a => {
    if(a.gender=== "female") return -1;
    return 1;
})
console.log(sortByGender);