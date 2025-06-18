// Problem 1

var result = 50;

if (result < 0) {
    console.log("failed");
} else if (result >= 0 && result < 40) {
    console.log("tumi C grade paico");
} else if (result >= 40 && result < 60) {
    console.log("tumi B grade paico");
} else if (result >= 60 && result < 70) {
    console.log("tumi A- grade paico");
}
else if (result >= 70 && result < 80) {
    console.log("tumi A grade paico");
}
else if (result >= 80 && result <= 100) {
    console.log("tumi A+ grade paico");
} else {
    console.log("invalid");
}

// // Problem 2
let num = 10;

if (isNaN(num)) {
    console.log("Not a valid number.");
} else if (num % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}


// Problem 3
let unOrganizedArray = [10, 14, 15, 16, 17, 18, 11, 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 19, 20];
let organizedArray = unOrganizedArray.sort((a, b) => a - b);
console.log(organizedArray);

// Problem 4
let leapYear = 2024;
if ((leapYear % 4 === 0 && leapYear % 100 !== 0) || (leapYear % 400 === 0)) {
    console.log(`${leapYear} is a leap year.`);
}
else {
    console.log(`${leapYear} is not a leap year.`);
}

// Problem 5
for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i);
    }
}

// Problem 6
var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];
let largestName = friends[0];
for (let i = 1; i < friends.length; i++) {
    if (friends[i].length > largestName.length) {
        largestName = friends[i];
    }
}
console.log(largestName);

// Problem 7
var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
var uniqueNumbers = [];
for (let i = 0; i < numbers.length; i++) {
    if (!uniqueNumbers.includes(numbers[i])) {
        uniqueNumbers.push(numbers[i]);
    }
}
console.log(uniqueNumbers);

// Problem 8
// biggest number in an array
var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
var largestNumber = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largestNumber) {
        largestNumber = numbers[i];
    }
}
console.log(largestNumber);

// Problem 9
let arr = [1000, 2000, 3000];
let livingCost = 5400;

function monthlySavings(arr, livingCost) {
    if (typeof livingCost !== 'number' || !Array.isArray(arr)) {
        return "Invalid input";
    }
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 3000) {
            total += arr[i] * .8
        } else {
            total += arr[i];
        }
    }
    let saving = total - livingCost;
    if (saving < 0) {
        return "earn more";
    } else {
        return saving;
    }
}

console.log(monthlySavings(arr, livingCost));