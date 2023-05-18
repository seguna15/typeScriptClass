"use strict";
let a = 'hello';
let b = a;
let c = a;
let d = 'world';
let e = 'world';
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
let myVal = addOrConcat(2, 2, 'concat');
let nextVal = addOrConcat(2, 2, 'add');
//10 as string 
//double casting
10;
