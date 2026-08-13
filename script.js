// Question 1

// let numbers = [14, 7, 22, 9, 31, 18, 5, 40];
// let total1 = 0;
// let total2 = 0;
// for(let i = 0; i < numbers.length; i++){

//     console.log(numbers[i]);

//     if (numbers[i] %2 === 0) {
//         console.log(numbers[i]);
//         total1 += numbers[i]
        
//     } else {
//         console.log(numbers[i]);
//         total2 += numbers[i]
//     }

    
// }

// console.log(total1);
// console.log(total2);

// Question 2

// let numbers = [23, 7, 45, 12, 89, 34, 56];
// let largestNumber = numbers[0];
// for(let i = 0; i < numbers.length; i++){
//     if (numbers[i] > largestNumber) {
//         largestNumber = numbers[i]
//     }
    
// }
// console.log(largestNumber);

// let numbers = [5, 12, 7, 20, 33, 8, 14, 41, 6];
// let even = 0;
// let odd = 0;

// for(let i = 0; i < numbers.length; i++){
//     if (numbers[i] %2 === 0) {
//         even++
//     } else {
//         odd++
//     }

//     if (numbers[i] > 10) {
//         console.log(numbers[i]);
        
//     }
// }
// console.log(even);
// console.log(odd);


// function calculateTotal([number1,number2,number3,number4]) {
//     return number1 + number2 + number3 + number4
// }
// let sum = calculateTotal([10,20,30,40]);
// console.log(sum);

// let names = ["Ali", "Ahmed", "Zubair", "Hamza", "Usman"];
// let userSearch = prompt("Please Enter Search a Name")
// let isHere = false;
// for(let i = 0; i < names.length; i++){
//     if (userSearch === names[i]) {
//         isHere = true
//     }
// }
// if (isHere === true) {
//     console.log("User Found");
    
// } else {
//     console.log("User Not Found");
// }


// function checkNumber(num) {
//     if (num > 0) {
//         return num + " Is Positive Number"
//     }

//     if (num < 0) {
//         return num + " Is Nagative Number"
//     }

//     if (num === 0) {
//         return num + " Are Zero"
//     }
// }

// console.log(checkNumber(15));
// console.log(checkNumber(-7));
// console.log(checkNumber(0));


// function countEven(numbers) {
//     if (numbers %2 === 0) {
//         return numbers
//     }
// }
// countEven([12, 5, 8, 21, 3, 16, 7, 10])

// let numbers = [-5, 10, 0, 7, -2, 18, -9, 4, 0];

// let positive = 0;
// let nagative = 0;
// let zero = 0;
// let even = 0;
// let odd = 0;

// for(let  i = 0; i < numbers.length; i++){

//     if (numbers[i] > 0) {
//         positive++
//     }

//     if (numbers[i] < 0) {
//         nagative++
//     }

//     if (numbers[i] === 0) {
//         zero++
//     }

//     if (numbers[i] %2 === 0) {
//         even++
//     }

//     if (numbers[i] %2 !== 0) {
//         odd++
//     }
// }

// console.log(positive);
// console.log(nagative);
// console.log(zero);
// console.log(even);
// console.log(odd);

// let numbers = [10, 20, 30, 40, 50];
// for(let i = numbers.length-1; i >= 0; i--){
//     console.log(numbers[i]);
    
// }

let count = 0;

function countEven(numbers) {
    for(let i = 0; i < numbers.length; i++){
        if (numbers[i] %2 === 0) {
            count++
            return
        }
    }
}

console.log(countEven([12, 5, 8, 21, 3, 16, 7, 10]));
console.log(count);







