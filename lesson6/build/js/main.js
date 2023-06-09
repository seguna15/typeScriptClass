"use strict";
class Staff {
    constructor(name, isAdmin, department, age, education = 'A Level') {
        this.name = name;
        this.isAdmin = isAdmin;
        this.department = department;
        this.age = age;
        this.education = education;
        this.name = name;
        this.isAdmin = isAdmin;
        this.department = department;
        this.age = age;
        this.education = education;
    }
    getAge() {
        return `Hello, I am ${this.age}`;
    }
}
const staff1 = new Staff('John Doe', true, 'HR', 32);
console.log(staff1);
console.log(staff1.getAge());
/////////////////////////////////////////////////////////
class SoftwareDev extends Staff {
    constructor(lang, softwareType, name, isAdmin, department, age) {
        super(name, isAdmin, department, age);
        this.lang = lang;
        this.softwareType = softwareType;
        this.lang = lang;
        this.softwareType = softwareType;
    }
    getEducation() {
        return `I hold ${this.education} degree`;
    }
}
const Ajennay = new SoftwareDev('TypeScript', 'Web Apps', 'Ajennay Noriega', true, 'IT', 14);
console.log(Ajennay);
console.log(Ajennay.getEducation());
class Car {
    constructor(name, type, model, year) {
        this.name = name;
        this.type = type;
        this.model = model;
        this.year = year;
    }
    getVehicleDetails() {
        return `name: ${this.name} type: ${this.type} model: ${this.model} year: ${this.year}`;
    }
    getCarYear() {
        return `car year: ${this.year}`;
    }
}
let Camry = new Car('Toyota', 'Car', 'Camry', 2021);
console.log(Camry.getVehicleDetails());
console.log(Camry.getCarYear());
class Rapper {
    constructor(name, amountOfAlbums, grammys, theGOAT) {
        this.name = name;
        this.amountOfAlbums = amountOfAlbums;
        this.grammys = grammys;
        this.theGOAT = theGOAT;
    }
    performedSong(song) {
        return `${this.name} performed ${song}`;
    }
}
const kanye = new Rapper('Yeezy', 8, 100, 'yes');
console.log(kanye);
console.log(kanye.performedSong('Follow God'));
///////////////////////////////////////
// Static members 
class Users {
    static getCount() {
        return Users.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Users.count;
    }
}
Users.count = 0;
let Paul = new Users('Paul Walker');
let Dwanye = new Users('Dwayne Johnson');
const Chris = new Users('Chris Prat');
console.log(Dwanye.id);
console.log(Dwanye.name);
console.log(Users.getCount());
//Getter and Setter
class Todos {
    constructor() {
        this.todoState = [];
    }
    get getTodos() {
        return this.todoState;
    }
    set setTodos(value) {
        if (Array.isArray(value) && value.every(el => typeof el === 'string')) {
            this.todoState = value;
            return;
        }
        else {
            throw new Error('Parameter is not an array of strings');
        }
    }
}
const webProject = new Todos();
webProject.setTodos = ['create folder', 'initialize npm', 'download dependencies'];
console.log(webProject.getTodos);
webProject.setTodos = [...webProject.getTodos, "edit package.json", "create an entry point"];
console.log(webProject.getTodos);
/**
 * create a class of  Genre which has a class member that stores music genres as array.
 * the initial state of the genre array has to be an empty array
 * create a getter and setter.
 * your setter must include a type guard to check if parameter is an array and also an array of string
 */
class Genre {
    constructor() {
        this.genres = [];
    }
    get getGenres() {
        return this.genres;
    }
    set setGenres(newGenres) {
        if (Array.isArray(newGenres) && newGenres.every(el => typeof el === 'string')) {
            this.genres = newGenres;
            return;
        }
        else {
            throw new Error('Genres must be an array.');
        }
    }
}
const musicGenre = new Genre();
console.log(musicGenre.getGenres);
musicGenre.setGenres = ['Rock', 'Pop', 'Jazz'];
console.log(musicGenre.getGenres);
musicGenre.setGenres = [...musicGenre.getGenres, 'Hip Hop', 'R&B'];
console.log(musicGenre.getGenres);
// musicGenre.genres = 'Country';
