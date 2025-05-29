function stringLength(arr){
    const string1 = arr.map(str=>str.length)
    return string1;
}
console.log(stringLength(["sandra","shirley","cate"]))





function isEven(nums) {
    return nums%2 ===0;
    
}
let filtered = [21, 32, 45,68,89].filter(isEven)
console.log(filtered)


// function studentScore(names,scores){
//     const studentScore = students.filter(name => name.grade >75);
//         return names.filter(scores => scores >75).map(student)
// // }

// const students = [
//     {name: "dan",grade: 47},
//     {name: "ken", grade: 78},
//     {name: "grace", grade: 80},
//     {name: "gloria", grade: 89}


// ]
// console.log(studentScore(students))

function getSquaredNumbers(squaredNumbers){
    return squaredNumbers.map(nums => nums**2)
}
console.log(getSquaredNumbers([1,2,3,4,5]))

function mixedData(arr){
    x= arr.filter(item => (item > 4))
    return x
}
arr=[1,2,3,4,5,6];
console.log(mixedData(arr));

// function add (x,y){
//     return x + y;
// };
// let results = add(10,20);
// console.log(result);

// let obj = {
//     y: 5,
//     x:4
// };
// let result = add(obj.x, obj.y);
// console.log(result);

//global messsage because it is accessed outside the function

let message = "Hello world"

function sayHello(){
    console.log(message);
    message = "Goodbye!"
}
sayHello()
console.log(message);

//message is declared locally hence cannot be accesed
// function sayHello(){
//     let message = "Hello world!";
//     console.log(message);
//     message = "Goodbye world!"
// }
// sayHello()
// console.log(message);


