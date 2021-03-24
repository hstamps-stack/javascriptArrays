//  ====== Coding Challenge: Javascript Arrays 3.24.21 ======
// 1. Create a function that creates a new array with a given value
// a. The function should take two parameters: the size of the array and the item to pass in
// b. const someArrayFunc = (arraySize, valueToPass) => {'Code for function'}
// c. expected result someArrayFunction(3, 'apples') = ['apples', 'apples', 'apples']
// 2. Reverse: Write a function that reverses the order of the items in the array
// a. [1,2,3] = [3,2,1]
// 3. Create a function that removes all unnecessary elements from an array
// a. use this array: let dirtyArray = [1, 'apple', false, null, 'bananas', 45, '', 'alkali', undefined];
// b. remove the falsy values so that the function returns: [1, 'apple', 'bananas', 45, 'alkali'];
// 4. Create a function that returns a duplicate free array
// a. let duplicateArray = [1, 4, 9, 4, 100, 4, 30, 1]
// b. the function should return [1, 4, 9, 100, 30]

// 1 
const createArray = (arrSize, value) =>{
    const arr = [];
    for (let i = 0; i < arrSize; i++){
        arr.push(value);
    };

    //console.log(arr);
};

createArray(3,"apple");

//2 

const reverseOrder = (arr) =>{
    const reversedArr  = [...arr];
    reversedArr.reverse()
    //console.log(reversedArr);
}

reverseOrder([1,2,3]);


//3



const removeFalsyElements = () =>{
    let dirtyArray = [1, 'apple', false, null, 'bananas', 45, '', 'alkali', undefined];

    const cleanArr = [];

    dirtyArray.forEach(val =>{
     val? cleanArr.push(val): null;

    });

    //console.log(cleanArr);
};

removeFalsyElements();


//4

const removeDuplicateElement = () =>{
    let duplicateArray = [1, 4, 9, 4, 100, 4, 30, 1];
     return duplicateArray.filter((num,index)=>{
         return duplicateArray.indexOf(num) === index;
    })

};

const nonDuplicateArr = removeDuplicateElement();

//console.log(nonDuplicateArr);





