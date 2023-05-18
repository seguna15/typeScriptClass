"use strict";
const userId = 'fhyrgfuruyeur';
const myArray = ['Apple', 5, 10, 'Ajennay'];
const Kanye = {
    name: 'Kanye West',
    recording: true,
    tracks: ['Bound 2', 'Guilt Trip', 'White dress', 'POWER', 'All day', 'Spaceship', 'We dont care', 'Follow God', 'Jesus lord pt1', 'come to life', 24, 'off the grid', 'jail', 'waves', 'fade', 'saint pablo', 'we major', 'drive slow', 'Big brother'],
    earnings: 1000000000
};
//LIteral Types
let VAT;
let role;
VAT = 0.75;
role = 'Admin';
console.log(VAT);
//function 
const sum = (a, b) => {
    return a + b;
};
const logger = (message) => {
    console.log(message);
};
logger('hello');
logger(sum(2, 3));
logger(sum(2, 8));
const subtract = function (c, d) {
    return c - d;
};
logger(subtract(5, 2));
logger(subtract(10, 4));
const multiply = function (c, d) {
    return c * d;
};
logger(multiply(5, 2));
logger(multiply(10, 4));
//optional parameters
const sumAll = (a, b, c) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
logger(sumAll(5, 2));
logger(sumAll(10, 4, 10));
//Default Parameter
const calcAll = (a = 10, b, c = 2) => {
    return a + b + c;
};
logger(calcAll(5, 10, 6));
logger(calcAll(5, 10));
logger(calcAll(undefined, 5, 10));
//Rest parameter 
const total = (...nums) => {
    return nums.reduce((accumulator, current) => accumulator + current);
};
logger(total(1, 3, 3, 5, 67, 7));
//never type
const createError = (errorMsg) => {
    throw new Error(errorMsg);
};
const infiniteLoop = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
};
//custom type guard
const isNumber = (value) => {
    return typeof value === 'number' ? true : false;
};
const isString = (value) => {
    return typeof value === 'string' ? true : false;
};
//function that accepts number or string
const numberOrString = (value) => {
    if (isString(value))
        return 'string';
    if (isNumber(value))
        return 'number';
    return createError('this method only accepts string or number');
};
logger(numberOrString(9));
