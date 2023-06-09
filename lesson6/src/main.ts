class Staff {
   /*  name: string;
    isAdmin: boolean;
    department: string;
    age: number;
    education: string */

    additionalCert!: string

    constructor(
        public readonly name: string, 
        public  isAdmin: boolean, 
        public department: string, 
        private age: number, 
        protected education: string = 'A Level'
    ){
        this.name = name;
        this.isAdmin = isAdmin;
        this.department = department;
        this.age = age;
        this.education = education;  
    }

    public getAge(){
        return `Hello, I am ${this.age}`;
    }
}

const staff1 = new Staff('John Doe', true, 'HR', 32, );

console.log(staff1);
console.log(staff1.getAge());

/////////////////////////////////////////////////////////
class SoftwareDev extends Staff {
    constructor(
        public lang: string,
        public softwareType: string,
        name: string,
        isAdmin: boolean,
        department: string,
        age: number
    ){
        super(name, isAdmin, department, age)
        this.lang = lang;
        this.softwareType = softwareType;
    }

    public getEducation() {
        return `I hold ${this.education} degree`;
    }

}

const Ajennay = new SoftwareDev ('TypeScript', 'Web Apps', 'Ajennay Noriega', true, 'IT', 14);
console.log(Ajennay);
console.log(Ajennay.getEducation());

////////////////////////////////////////////////
interface Vehicle {
    name: string
    type: string
    model: string 
    year: number
    getVehicleDetails(): string
}

class Car implements Vehicle {
    name: string;
    type: string;
    model: string;
    year: number;

    constructor(name: string, type: string, model: string, year: number){
        this.name = name;
        this.type = type;
        this.model = model;
        this.year = year;
    }

    getVehicleDetails(): string {
        return `name: ${this.name} type: ${this.type} model: ${this.model} year: ${this.year}`;
    }

    public getCarYear(){
        return `car year: ${this.year}`;
    }
}

let Camry = new Car('Toyota', 'Car', 'Camry', 2021);
console.log(Camry.getVehicleDetails());
console.log(Camry.getCarYear());

/////////////////////////////////////////////////////////////////
/**
 * Create an interface Musician  with its types and let a class Rapper implement it.
 */

interface Musician {
    name: string,
    amountOfAlbums: number,
    grammys: number,
    theGOAT: string,
    performedSong(song: string): string,
}

class Rapper implements Musician{
    name: string;
    amountOfAlbums: number;
    grammys: number;
    theGOAT: string;

    constructor(name: string, amountOfAlbums: number, grammys: number, theGOAT: string) {
        this.name = name;
        this.amountOfAlbums = amountOfAlbums;
        this.grammys = grammys;
        this.theGOAT = theGOAT;
    }

    performedSong(song: string): string {
        return `${this.name} performed ${song}`;
    }
}

const kanye = new Rapper('Yeezy', 8, 100, 'yes');
console.log(kanye);
console.log(kanye.performedSong('Follow God'));


///////////////////////////////////////
// Static members 

class Users {
    static count: number = 0;

    static getCount(): number {
        return Users.count;
    }

    public id: number;

    constructor(public name: string){
        this.name = name;
        this.id = ++Users.count;
    }
}


let Paul = new Users('Paul Walker');
let Dwanye = new Users('Dwayne Johnson');
const Chris = new Users('Chris Prat');

console.log(Dwanye.id);
console.log(Dwanye.name);
console.log(Users.getCount());

//Getter and Setter

class Todos {
    private todoState: string[];

    constructor(){
        this.todoState = []
    }

    public get getTodos(): string[] {
        return this.todoState;
    }

    public set setTodos(value: string[]) {
        if(Array.isArray(value) && value.every(el => typeof el === 'string')) {
            this.todoState = value;
            return
        }else{
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
    private genres: string[];

    constructor() {
      this.genres = [];
    }
  
    get getGenres(): string[] {
      return this.genres;
    }
  
    set setGenres(newGenres: string[]) {
      if (Array.isArray(newGenres) && newGenres.every(el => typeof el === 'string')) {
        this.genres = newGenres;
        return;
      } else {
        throw new Error('Genres must be an array.');
      }
    }
  }
  
  const musicGenre = new Genre();
  
  console.log(musicGenre.getGenres);
  
  musicGenre.setGenres = ['Rock', 'Pop', 'Jazz'];
  console.log(musicGenre.getGenres);
  
  musicGenre.setGenres = [...musicGenre.getGenres ,'Hip Hop', 'R&B'];
  console.log(musicGenre.getGenres);
  
 // musicGenre.genres = 'Country';
  
  
  
  
  
  