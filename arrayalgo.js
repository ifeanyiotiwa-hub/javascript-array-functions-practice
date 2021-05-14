// Create a function which returns the number of true values there are in an array.
//EXAMPLES
//countTrue([true, false, false, true, false]) ➞ 2
//countTrue([false, false, false, false]) ➞ 0
//countTrue([]) ➞ 0

/*
Notes
1. Return 0 if given an empty array.
2. All array items are of the type bool (true or false).
 */

function countTrue(arr) {
	let store = {};
	const itemCount = item => {
		if(!store[item]){
			store[item] = 1
		}else{
			store[item]++
		}
	}
	arr.map(itemCount)
	
	if (!store['true']){
		return 0
	}
	console.log(store)
    return store['true'];
	 
}


console.log(countTrue([true, false, false, true, false]));
console.log(countTrue([false, false, false, false]));
console.log(countTrue([]));
console.log(countTrue([false, false, true, true, false, false, false, true, true, true, true, false, true, true, false]))