"use strict";
//Index signatures, keyof assertion and record utility type
/* interface storeSales {
    Comic: number,
    Suits: number,
    Toys: number,
} */
const todaySales = {
    Comic: 10,
    Suits: 2,
    Toys: 5,
    BatmanComics: 20,
};
console.log(todaySales.Comic);
console.log(todaySales.Suits);
let prop = 'Comic';
console.log(todaySales[prop]);
const todayNetSales = (itemsSold) => {
    let total = 0;
    for (const item in itemsSold) {
        total += itemsSold[item];
    }
    return total;
};
console.log(todayNetSales(todaySales));
const student = {
    name: 'Ajennay Noriega',
    GPA: 5.0,
    classes: ['CSE201', 'CSE203']
};
//console.log(student.test);
for (const key in student) {
    console.log(`${key}: ${student[key]}`);
}
//a situation where we do not know what interface an object belongs to
Object.keys(student).map(key => {
    console.log(student[key]);
});
const logStudentKey = (student, key) => {
    console.log(`Student ${key}: ${student[key]}`);
};
logStudentKey(student, 'classes');
let monthlySales = {
    iphone: 200,
    samsung: 100,
    pixel: 70,
};
for (const sale in monthlySales) {
    console.log(monthlySales[sale]);
}
const totalSales = (sales) => {
    let total = 0;
    for (let item in sales) {
        total += sales[item];
    }
    return total;
};
console.log(totalSales(monthlySales));
