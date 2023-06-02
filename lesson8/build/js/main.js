"use strict";
const echoString = (arg) => arg; // this method can only work with string
const echo = (arg) => arg; // this method works with all types as it uses generics
//a more practical example below
const isObject = (arg) => {
    return (typeof arg === 'object' && !Array.isArray(arg) && arg !== null);
};
console.log(isObject(true));
console.log(isObject('John'));
console.log(isObject([1, 2, 3, 4]));
console.log(isObject({ name: 'Kanye' }));
console.log(isObject(null));
// empty objects and arrays are truthy values
if ('') {
    console.log('truthy');
}
else {
    console.log('falsy');
}
//custom function to return false if array or object is empty
const isTrue = (arg) => {
    if (Array.isArray(arg) && !arg.length)
        return { arg, is: false };
    if (isObject(arg) && !Object.keys(arg).length)
        return { arg, is: false };
    return { arg, is: !!arg };
};
console.log(isTrue(false));
console.log(isTrue(0));
console.log(isTrue(true));
console.log(isTrue(1));
console.log(isTrue('Ajennay'));
console.log(isTrue(''));
console.log(isTrue(null));
console.log(isTrue(undefined));
console.log(isTrue({}));
console.log(isTrue({ name: 'Ajennay' }));
console.log(isTrue([]));
console.log(isTrue([1, 2, 3]));
console.log(isTrue(NaN));
console.log(isTrue(-0));
const checkBoolValue = (arg) => {
    if (Array.isArray(arg) && !arg.length)
        return { value: arg, is: false };
    if (isObject(arg) && !Object.keys(arg).length)
        return { value: arg, is: false };
    return { value: arg, is: !!arg };
};
const processUser = (user) => {
    //user logic
    return user;
};
console.log(processUser({ id: 1, name: "Ajennay" }));
//console.log(processUser({name: "Ajennay"});
////////
//generic with a class
class StateObject {
    constructor(value) {
        this.data = value;
    }
    get state() {
        return this.data;
    }
    set state(value) {
        this.data = value;
    }
}
const store = new StateObject("John");
console.log(store.state);
//store.state = 12
store.state = 'Ajennay';
const myStore = new StateObject([15]);
myStore.state = ['Ajennay', 14, true];
console.log(myStore.state);
