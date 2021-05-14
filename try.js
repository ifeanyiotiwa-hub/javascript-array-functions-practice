var a = ['aa', 'bb', 'cc', 'aa', 'bb', 'cc','bb', 'cc']
const itemCount = item => {
    let ob = {};
    if (!ob[item]){
        ob[item]=1
    }
    else {
        ob[item]++;
    }
    return ob;
}

console.log(a.reduce((acc, item) => {
    if (!acc[item]){
        acc[item]=1
    }
    else {
        acc[item]++;
    }
    return acc;
}, {}))