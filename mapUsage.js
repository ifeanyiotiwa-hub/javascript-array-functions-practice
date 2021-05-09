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

//***MAP***
//1. Get array of all names
    let getNames = characters.map((elem) => elem.name);
    console.log(getNames);


//2. Get array of all heights

    let getHeight = characters.map(currentHeight => currentHeight.height);
    console.log(getHeight);
//3. Get array of objects with just name and height properties
    const nameAndHeight  = currentValue => {
        let obj = {};
        obj['name'] = currentValue.name;
        obj['height'] = currentValue.height
        return obj;
        }
    let getNameHeightObj = characters.map(nameAndHeight);

    console.log(getNameHeightObj);
//4. Get array of all first names
    const returnFirstName = str => {
        let each = str.split(" ")
        return each[0]
} 
    let firstName = getNames.map(returnFirstName);

    console.log(firstName);