type One = string;
type Two = string | number;
type Three = 'hello'

let a: One = 'hello';
let b  = a as Two;
let c = a as Three;

let d = <One>'world';
let e = < string | number>'world';

const addOrConcat = (a: number, b: number, c: 'add' | 'concat'): number | string => {
    if(c === 'add') return a + b
    return '' + a + b;
}

let myVal: string = addOrConcat(2,2,'concat') as string;

let nextVal: number = addOrConcat(2,2,'add') as number;

//10 as string 
//double casting
(10 as unknown) as string;