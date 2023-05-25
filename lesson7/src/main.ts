//Index signatures, keyof assertion and record utility type
/* interface storeSales {
    Comic: number,
    Suits: number,
    Toys: number,
} */

/* interface storeSales {
    readonly [index: string]: number
}
 */
//properties that must be present and optional properties
interface storeSales {
    readonly [index: string]: number
    Comic: number,
    Suits: number,
    Toys: number
}
const todaySales: storeSales = {
    Comic: 10,
    Suits: 2,
    Toys: 5,
    BatmanComics: 20,
}


console.log(todaySales.Comic);
console.log(todaySales.Suits);

let prop: string = 'Comic';
console.log(todaySales[prop]);


const todayNetSales  = (itemsSold: storeSales) : number => {
    let total = 0;
    for (const item in itemsSold ){
        total += itemsSold[item];
    }
    return total;
}

console.log(todayNetSales(todaySales));

//todaySales.Suits = 30;

//console.log(todaySales['Phones']);

/////////////////////////////////////////

interface Students {
    //[key: string]: string | number | string[] | undefined
    name: string,
    GPA: number,
    classes?: string[]
}

const student: Students = {
    name: 'Ajennay Noriega',
    GPA: 5.0,
    classes: ['CSE201', 'CSE203']
}

//console.log(student.test);

for (const key in student){
    console.log(`${key}: ${student[key as keyof Students]}`);
}

//a situation where we do not know what interface an object belongs to
Object.keys(student).map( key => {
    console.log(student[key as keyof typeof student])
})

const logStudentKey = (student: Students, key: keyof Students): void => {
    console.log(`Student ${key}: ${student[key]}`);
}

logStudentKey(student, 'classes')

//record utility types
type Phones = 'iphone' | 'samsung' | 'pixel';

type Sales = Record<Phones, number>

let monthlySales: Sales = {
    iphone: 200,
    samsung: 100,
    pixel: 70,
}

for(const sale in monthlySales){
    console.log(monthlySales[sale as keyof Sales])
}

const totalSales  = (sales: Sales) : number => {
    let total = 0;
    for(let item in sales){
        total += sales[item as keyof Sales]
    }
    return total
}

console.log(totalSales(monthlySales));