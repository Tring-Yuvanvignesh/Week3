const add = (a) => {
    return function(b){
        return a+b
    }
}

const addtwothree = add(2);
console.log(addtwothree(2));


const curriedMultiply = a => b => a * b;
console.log(curriedMultiply(3)(4));