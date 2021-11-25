// Exercise: Loops

// Log every number from 0 to 10
//Start:0 End > 10 Step: 1
for (let i = 0; i <= 10; i += 1) {
    console.log(i);
}

console.clear()

// Log every number from 4 to -16
//Start: 4 End: < -16 Step: -1

for (let i = 4; i >= -16; i -= 1) {
    console.log(i);
}

console.clear()

// Log every fourth number from 8 to 41
// Start: 8 End: > 41 Step: 4

for (let i = 8; i <= 41; i += 4) {
    console.log(i)
}

console.clear()

// The Clasic Fizzbuzz Program
// Loop from 0 to 100
// if the number is devisible by 3, log number and "Fizz"
// if the number is devisible by 5, log number and "buzz"
// if the number is devisible by 3 AND 5, log number and "Fizz"

// Start: 0 End: > 100 Step: 1

for (let i = 0; i <= 100; i += 1) {
    if (i % 3 === 0 && i % 5 === 0){
        console.log(`${i} Fizzbuzz`);
    } else if ((i % 3) === 0) {
        console.log(`${i} Fizz`);
    } else if ((i % 5) === 0) {
        console.log(`${i} buzz`);
    }
}