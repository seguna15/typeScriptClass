type StringOrNumber = string |  number;
type stringOrNumberArray = (string | number)[];
type Rapper = {
    name: string,
    recording: boolean,
    tracks: stringOrNumberArray,
    earnings?: number
}

const userId:  StringOrNumber = 'fhyrgfuruyeur';
const myArray: stringOrNumberArray = ['Apple', 5, 10, 'Ajennay'];

const Kanye: Rapper = {
    name: 'Kanye West',
    recording: true,
    tracks: ['Bound 2', 'Guilt Trip', 'White dress', 'POWER', 'All day', 'Spaceship', 'We dont care', 'Follow God', 'Jesus lord pt1', 'come to life', 24, 'off the grid', 'jail', 'waves', 'fade', 'saint pablo', 'we major', 'drive slow', 'Big brother'],
    earnings: 1000000000
}

//LIteral Types

let VAT: 0.75;
let role: 'Admin' | 'Editor' | 'Moderator' | 'Reader';

VAT = 0.75;
role = 'Admin'
console.log(VAT);

//function 

const sum  = (a: number, b: number): number => {
    return a + b;
}

const logger = (message: any): void => {
    console.log(message);
}

logger('hello');
logger(sum(2,3));
logger(sum(2,8));

const subtract = function (c: number, d: number) : number {
    return c - d;
}

logger(subtract(5,2));
logger(subtract(10,4));

type arithmeticFunc = (a: number, b: number) => number

const multiply: arithmeticFunc = function(c,d){
    return c * d;
}

logger(multiply(5,2));
logger(multiply(10,4));

//optional parameters
const sumAll = (a: number, b: number, c?: number) : number => {
    if(typeof c !== 'undefined'){
        return a + b + c;
    }
    return a + b;
}

logger(sumAll(5,2));
logger(sumAll(10,4,10));

//Default Parameter
const calcAll = (a: number = 10, b: number, c: number = 2 ): number => {
    return a + b + c;
}

logger(calcAll(5,10,6));
logger(calcAll(5,10));
logger(calcAll(undefined, 5,10));

//Rest parameter 
const total = (...nums: number[]) : number => {
    return nums.reduce((accumulator, current ) => accumulator + current);
}

logger(total(1,3,3,5,67,7))

//never type

const createError = (errorMsg: string): never => {
    throw new Error(errorMsg)
}

const infiniteLoop = () => {
    let i: number = 1;
    while (true) {
        i++;

        if(i > 100) break
    }
}

//custom type guard
const isNumber = (value: any): boolean => {
    return typeof value === 'number' ? true : false;
}

const isString = (value: any): boolean => {
    return typeof value === 'string' ? true : false;
}

//function that accepts number or string
const numberOrString = (value: number | string ): string => {
    if(isString(value)) return 'string';
    if(isNumber(value)) return 'number';

    return createError('this method only accepts string or number');
};

