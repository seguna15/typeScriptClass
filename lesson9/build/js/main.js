"use strict";
//partial: allows you update some properties of an object
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const updateAssignment = (assign, propsToUpdate) => {
    return Object.assign(Object.assign({}, assign), propsToUpdate);
};
const assignment1 = {
    studentId: "comp123",
    title: "Final Project",
    grade: 0,
};
const assignGrade = updateAssignment(assignment1, { grade: 95 });
console.log(assignGrade);
const updateSong = (track, propsToUpdate) => {
    return Object.assign(Object.assign({}, track), propsToUpdate);
};
const kanye1 = {
    artist: "Kanye West",
    title: "Can't tell me nothing",
    released: false
};
const releaseSong = updateSong(kanye1, { released: true });
console.log(releaseSong);
;
const updateMovie = (film, propsToUpdate) => {
    return Object.assign(Object.assign({}, film), propsToUpdate);
};
const PF = {
    title: 'Pulp Fiction',
    creator: 'Quentein Tarantino',
    released: true,
    rating: 10,
};
const movieRating = updateMovie(PF, { rating: 11 });
console.log(movieRating);
// utility types are helpful for transforming types
//Required and Readnly
const recordAssignment = (assign) => {
    //send to database login
    return assign;
};
const verifyAssignment = Object.assign(Object.assign({}, assignGrade), { verified: true });
console.log(verifyAssignment);
recordAssignment(Object.assign(Object.assign({}, assignGrade), { verified: true }));
//Record
const hexColorMap = {
    red: "FF000",
    blue: '0000FF',
    green: '00FF00',
};
const finalGrade = {
    JS1: 'B',
    JS2: 'C',
    JS3: 'A'
};
;
const gradeData = {
    JS1: {
        assignment1: 95,
        assignment2: 79,
        assignment3: 85,
        assignment4: 1,
    },
    JS2: {
        assignment1: 67,
        assignment2: 77,
        assignment3: 90,
        assignment4: 87,
    },
    JS3: {
        assignment1: 65,
        assignment2: 79,
        assignment3: 34,
        assignment4: 99,
    }
};
console.log(gradeData);
const user1 = {
    username: 'kanyeistheGOAT',
    email: 'kanye@gmail.com',
};
console.log(user1);
const user1Prev = {
    username: 'kanyeistheGOAT',
    email: 'kanye@gmail.com',
    age: 14
};
console.log(user1Prev);
//ReturnType
//type newAssign = {title: string, points: number};
const createNewAssign = (title, points) => {
    return { title, points };
};
const tsAssign = createNewAssign("utility types", 100);
console.log(tsAssign);
const assignArgs = ['Generics', 100];
const tsAssign2 = createNewAssign(...assignArgs);
console.log(tsAssign2);
const fetchUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => {
        return res.json();
    }).catch(error => {
        if (error instanceof Error)
            console.log(error.message);
    });
    return data;
});
fetchUsers().then(users => console.log(users));
