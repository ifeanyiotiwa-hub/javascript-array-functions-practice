// function sumNumbers(numbers){
//     if (numbers.length == 0) return 0;

//     function add(numbers, i){
//         if(i === numbers.length-1){
//             return numbers[i];
//         }
//         return numbers[i] + add(numbers, i+1);
//     }
//     return add(numbers, 0);
// }

function sumNumbers(numbers){
    return (numbers.length === 0) ? 0 : numbers[0] + sumNumbers(numbers.slice(1));
}
console.log(sumNumbers([1, 2, 3, 4, 5]));