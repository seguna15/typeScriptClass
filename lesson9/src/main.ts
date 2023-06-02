//partial: allows you update some properties of an object

interface Assignment {
    studentId: string,
    title: string,
    grade: number,
    verified?: boolean
}

const updateAssignment = (assign: Assignment, propsToUpdate: Partial<Assignment>): Assignment => {
    return {...assign, ...propsToUpdate}
}

const assignment1: Assignment = {
    studentId: "comp123",
    title: "Final Project",
    grade:0,
}

const assignGrade: Assignment = updateAssignment(assignment1, {grade: 95});
console.log(assignGrade);

interface Song {
    artist: string,
    title: string,
    released: boolean,
    platinum?: boolean
}

const updateSong = (track: Song, propsToUpdate: Partial<Song>): Song => {
    return{...track, ...propsToUpdate}
}

const kanye1: Song = {
    artist: "Kanye West",
    title: "Can't tell me nothing",
    released: false
}

const releaseSong: Song = updateSong(kanye1, {released: true});
console.log(releaseSong);

//create a movie interface and create an update method to update some of its properties

interface Movie {
    title: string,
    creator: string,
    released: boolean,
    rating: number,
};

const updateMovie = (film: Movie, propsToUpdate: Partial<Movie>): Movie => {
     return{...film, ...propsToUpdate};
};

const PF: Movie = {
   title: 'Pulp Fiction',
   creator: 'Quentein Tarantino',
   released: true,
   rating: 10,
};

const movieRating: Movie = updateMovie(PF, {rating: 11});
console.log(movieRating);

// utility types are helpful for transforming types

//Required and Readnly
const recordAssignment = (assign: Required<Assignment>): Assignment => {
    //send to database login
    return assign;
}

const verifyAssignment: Readonly<Assignment> = {...assignGrade, verified: true};
console.log(verifyAssignment);

recordAssignment({...assignGrade, verified: true});

//Record
const hexColorMap: Record <string, string> = {
    red: "FF000",
    blue:'0000FF',
    green:'00FF00',
};

type Classes  = "JS1" | "JS2" | "JS3";
type LetterGrades = "A"| "B" | "C" | "D" | "U";

const finalGrade: Record<Classes, LetterGrades> = { 
    JS1: 'B',
    JS2: 'C',
    JS3: 'A'
};

interface Grades {
    assignment1: number,
    assignment2: number,
    assignment3: number,
    assignment4: number,
};

const gradeData: Record<Classes, Grades> = {
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

 
//pick and omit

interface User {
    username: string;
    email: string;
    age: number;
    password: string;
    token: string;
}


/* const user1: User = {
    username: 'kanyeistheGOAT',
    email: 'kanye@gmail.com',
    password: 'ajstyle123'
} */

type userData = Pick<User, "username" | "email">

const user1: userData = {
    username: 'kanyeistheGOAT',
    email: 'kanye@gmail.com',
}

console.log(user1);

type userPreview = Omit<User, "password" | "token">;

const user1Prev: userPreview = {
    username: 'kanyeistheGOAT',
    email: 'kanye@gmail.com',
    age: 14
}

console.log(user1Prev);

//Exclude and Extract

type Adjustable = Exclude<LetterGrades, "U">;

type HighGrades = Extract<LetterGrades, "A" | "B">


//Nonnullable
type AllPossibleGrades = 'Dave' | 'John' | null | undefined
type NameOnly = NonNullable<AllPossibleGrades>;

//ReturnType
//type newAssign = {title: string, points: number};

const createNewAssign = (title: string, points: number) => {
    return {title, points}
}

type newAssign = ReturnType<typeof createNewAssign>;
const tsAssign: newAssign = createNewAssign("utility types", 100);
console.log(tsAssign);

//Parameters
type AssignParams = Parameters<typeof createNewAssign>;

const assignArgs: AssignParams = ['Generics', 100];

const tsAssign2: newAssign = createNewAssign(...assignArgs);

console.log(tsAssign2);

//Awaited - helps us with the returnType of a primose

interface User1 {
    id: number,
    name: string,
    username: string,
    email: string,
}

const fetchUsers = async (): Promise<User1[]> => {
    
    const data = await fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            return res.json();
        }).catch(error => {
            if(error instanceof Error) console.log(error.message);
        })
    return data;
}

type FetchUsersReturnType = Awaited<ReturnType< typeof fetchUsers>>;
fetchUsers().then(users => console.log(users));