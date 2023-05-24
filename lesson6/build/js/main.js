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
