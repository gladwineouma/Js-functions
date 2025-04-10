function stringLength(names){
    return name.map(array => array.length);
}

let arrayOfNames = ["sandra","shirley","cate"];
console.log(stringLength(arrayOfNames)) ;




function isEven(nums) {
    return nums%2 ==0;
    
}
let filtered = [21, 32, 45,68,89].filter(isEven)
console.log(filtered)


function studentScore(students){
    const studentScore = students.filter(name => name.grade >75);
}

const students = [
    {name: "dan",grade: 47},
    {name: "ken", grade: 78},
    {name: "grace", grade: 80},
    {name: "gloria", grade: 89}


]
console.log(studentScore(students))



