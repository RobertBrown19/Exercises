// Exercise: Arrays

// Working with Arrays

//array.pop(): remove item from end
//array.push("secondLast", "lastItem"): add item(s) to end
//array.shift(): remove item from start
//array.unshift("firstItem","secondItem"): add item(s) to start

const rainbowColors = [];

rainbowColors.push("orange");
rainbowColors.unshift("red");
rainbowColors.push("yellow");
rainbowColors.push("green","blue","indigo","violet");

console.log(rainbowColors.length);
console.log(rainbowColors[1]);
console.log(rainbowColors[rainbowColors.length - 1]);
console.log(rainbowColors.indexOf("blue"));

const twoColors = rainbowColors.slice(1,3);
console.log(twoColors);
console.log(rainbowColors);// slice does not alter the original array

const nums = [0, 1, 2, 2, 2, 3, 3, 4, 5];

for (let i = 0; i < nums.length; i += 1){
    for (let j = i + 1; j < nums.length; j += 1){
        while (nums[i] === nums[j]){
            nums.splice(j,1)
        }
        console.log (nums)// Splice can be used to alter the original array at the specified location by deleting or adding items
    }
}

const arrOfArrs = [["inner array first item", "inner array second item"], ["first", "second", "third"]];
console.log (arrOfArrs[0][0]);

// Not sure if this is right for print "third" using dynamic index
let indexId = arrOfArrs.findIndex(function(post, index) {
    indexIdTwo = post.findIndex(function(postTwo, indexTwo) {
        if (postTwo.toString() == "third"){
            return true;
        } ;
    });
    if (indexIdTwo != -1) {
        return true;
    };
});

console.log(arrOfArrs[indexId][indexIdTwo]);

// Top choices

const topDogs = ["Rottweiler", "Labrador", "Beagle", "German Shepherd", "Bulldog"];

for (let i = 0; i < topDogs.length; i += 1) {
    let choiceNo = i + 1;
    // first part of the if statment deals with th as it has to catch 11th 12th 13th so they dont end up 11st 12nd 13rd 
    if (choiceNo == 11 || choiceNo == 12 || choiceNo == 13 || choiceNo % 10 == 0 || choiceNo % 10 > 3) {
        console.log(`My ${choiceNo}th choice is ${topDogs[i]}`);
    } else if (choiceNo % 10 == 1){
        console.log(`My ${choiceNo}st choice is ${topDogs[i]}`);
    } else if (choiceNo % 10 == 2){
        console.log(`My ${choiceNo}nd choice is ${topDogs[i]}`);
    } else if (choiceNo % 10 == 3){
        console.log(`My ${choiceNo}rd choice is ${topDogs[i]}`);
    }
}
    