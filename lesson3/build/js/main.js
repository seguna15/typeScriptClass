"use strict";
let stringArr = ['one', 'two', 'three'];
stringArr[0] = 'fifty-five';
stringArr.push('one hundred');
let randomValues = ['phone', 110, 'PSG'];
randomValues.push('Cowrie RFC');
let mixedValues = ['TypeScript', true, 12];
let emptyArr = [];
let rapperArray = [];
rapperArray.push('kanye');
//tuple
let myTuple = ['Ajennay', true, 13];
let mixedArr = ['Cypher', true, 3];
mixedArr = myTuple;
//myTuple = mixedArr;
//Objects 
let myObject;
myObject = [];
console.log(typeof myObject);
myObject = rapperArray;
myObject = {};
const student = {
    name: 'Tom',
    isActive: true
};
student.isActive = false;
let nineTeenEightyFour = {
    name: 1984,
    artistName: 'J.Cole',
    minutes: 3.11,
    streams: 1000000,
    platinum: true,
    topTen: true,
};
let mercy10 = {
    name: 'Mercy 1.0',
    artistName: 'Kanye West',
    minutes: 5.30,
    streams: 10000000,
    platinum: true,
    topTen: true,
};
let goodSong = {
    name: 'good song',
    minutes: 3.20,
    streams: 200000,
    platinum: false
};
const announceTrack = (musicTrack) => {
    return `${musicTrack.name} by ${musicTrack.artistName}`;
};
console.log(announceTrack(mercy10));
//Enums 
var Grade;
(function (Grade) {
    Grade[Grade["F"] = 0] = "F";
    Grade[Grade["E"] = 1] = "E";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
const cumulativeGrade = (grade) => {
    let total = 0;
    return total + grade;
};
console.log(cumulativeGrade(Grade.A));
const cgpaCalc = (score) => {
    if (score >= 70)
        return Grade.A;
    if (score >= 60)
        return Grade.B;
    if (score >= 50)
        return Grade.C;
    if (score >= 45)
        return Grade.D;
    if (score >= 40)
        return Grade.E;
    if (score <= 39)
        return Grade.F;
};
console.log(cgpaCalc(85));
console.log(cgpaCalc(61));
console.log(cgpaCalc(54));
console.log(cgpaCalc(48));
console.log(cgpaCalc(43));
console.log(cgpaCalc(10));
