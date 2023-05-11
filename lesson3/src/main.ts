let stringArr: string[] = ['one', 'two', 'three'];

stringArr[0] = 'fifty-five';
stringArr.push('one hundred')

let randomValues: (string | number)[] = ['phone', 110, 'PSG'];

randomValues.push('Cowrie RFC');

let mixedValues: (string | boolean | number)[] =  ['TypeScript', true, 12];

let emptyArr = [];

let rapperArray:string[] = [];

rapperArray.push('kanye');

//tuple

let myTuple: [string, boolean, number] = ['Ajennay', true, 13];

let mixedArr = ['Cypher', true, 3];

mixedArr = myTuple;

//myTuple = mixedArr;


//Objects 

let myObject: object;
myObject = [];
console.log(typeof myObject);

myObject = rapperArray;
myObject = {};

const student = {
    name: 'Tom',
    isActive: true
}

student.isActive = false;


type MusicTrack = {
    name: (string | number),
    artistName? : string,
    minutes: number,
    streams: number,
    platinum: boolean,
    topTen?: boolean,
}


let nineTeenEightyFour: MusicTrack = {
    name: 1984,
    artistName: 'J.Cole',
    minutes: 3.11,
    streams: 1000000,
    platinum: true,
    topTen: true,
}

let mercy10: MusicTrack = {
    name: 'Mercy 1.0',
    artistName: 'Kanye West',
    minutes: 5.30,
    streams: 10000000,
    platinum: true,
    topTen: true,
}

let goodSong: MusicTrack = {
    name: 'good song',
    minutes: 3.20,
    streams: 200000,
    platinum: false
}


const announceTrack = (musicTrack: MusicTrack) => {
    return `${musicTrack.name} by ${musicTrack.artistName}`;
}

console.log(announceTrack(mercy10));

//Enums 

enum Grade {
    F,
    E,
    D,
    C,
    B, 
    A
}

const cumulativeGrade = (grade: Grade) => {
    let total = 0;
    return total + grade;
}

console.log(cumulativeGrade(Grade.A));

const cgpaCalc = (score: number) => {
    if(score >= 70) return Grade.A;
    if(score >= 60) return Grade.B;
    if(score >= 50) return Grade.C;
    if(score >= 45) return Grade.D;
    if(score >= 40) return Grade.E;
    if(score <= 39) return Grade.F;
}

console.log(cgpaCalc(85));
console.log(cgpaCalc(61));
console.log(cgpaCalc(54));
console.log(cgpaCalc(48));
console.log(cgpaCalc(43));
console.log(cgpaCalc(10));