// Quick Question #1
// What does the following code return?
// new Set([1,1,2,2,3,4])

    // returns [1,2,3,4]


// Quick Question #2
// What does the following code return?

// [...new Set("referee")].join("")

    //returns 'ref'


// Quick Questions #3
// What does the Map m look like after running the following code?

// let m = new Map();
// m.set([1,2,3], true);
// m.set([1,2,3], false);

    //returns 



// Quick Questions #3
// What does the Map m look like after running the following code?

// let m = new Map();
// m.set([1,2,3], true);
// m.set([1,2,3], false);

    // keys will be set to an array but we cannot get the value of the array.


function hasDuplicate(array) {
    let result = new Set()
    console.log(array);
    for (elem of array) {
        if (result.has(elem)) {
            return true
        } else {
            result.add(elem)
        }
    }
    return false
};


const vowelCount = elem => {
    const vowel = `aeiou`
    const vowelMap = new Map();
    for (let letter of elem) {
        if (vowel.includes(letter)) {
            if (vowelMap.has(letter)) {
                vowelMap.set(letter, vowelMap.get(letter)+1)
            } else {
                vowelMap.set(letter, 1)
            }
        }
    }
    return vowelMap
}

