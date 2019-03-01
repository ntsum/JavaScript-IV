
class Person {
    constructor(name) {
        this.name = name.name;
        this.age = name.age;
        this.location = name.location;
        this.gender = name.gender;
    }

    speak () {
        return(`Hello my name is${this.name}, and I am from ${this.location}`);
    }
}

class Instructor extends Person {
    constructor(name){
        super(name);
        this.specialty = name.specialty;
        this.favLanguage = name.favLanguage;
        this.catchPhrase = name.catchPrase;
        this.subject = name.subject;
    }

    demo (subject) {
        return(`Today we are learning about ${subject}`);        
    }

    grade (student, subject) {
        return(`${student.name} recieves a perfect score on ${subject}`);
    }
}

class Student extends Person {
    constructor(name){
        super(name);
        this.previousBackground = name.previousBackground;
        this.className = name.className;
        this.favSubjects = name.favSubjects;
    }

    listsSubjects () {
         let favArray = this.favSubjects        
       
        for (let i = 0; i < favArray.length; i++){
            console.log(favArray[i]);
       }
    }

    PRAssignment (subject) {
        return(`${this.name} has submitted a PR for ${subject}`);
    }

    sprintChallenge (subject) {
        return(`${this.name} has begun sprint challenge on ${subject}`);
    }
}

class ProjectManager extends Instructor {
    constructor(name){
        super(name);
        this.gradClassName = name.gradClassName;
        this.favInstructor = name.favInstructor;
    }

    standUp (channel) {
        return(`${this.name} announces to ${channel}, @channel standup time!`);
    }

    debugsCode (student, subject) {
        return(`${this.name} debugs ${student.name}s code on ${subject}`);
    }
}

const cindy = new Instructor({
    name: 'Cindy',
    location: 'Texas',
    age: 35,
    specialty: 'iOS Development',
    gender: 'Female',
    favLanguage: 'C++',
    catchPrase: 'Yeehaw!'
});

const ana = new Instructor({
    name: 'Ana',
    location: 'Iowa',
    age: 29,
    specialty: 'Java',
    gender: 'Female',
    favLanguage: 'Javascript',
    catchPrase: 'Sometimes Javascript is confusing'
});

const maria = new Student({
    name: 'Maria',
    location: 'Seattle',
    age: 29,
    gender: 'Female',
    favSubjects: ['Javascript', 'Preprocessing', 'Applied CSS'],
    className: 'Web18',
    previousBackground: 'none'
});

const cameron = new Student({
    name: 'Cameron',
    location: 'New York',
    age: 21,
    gender: 'Male',
    favSubjects: ['Python', 'JavaScript', 'C++'],
    className: 'Web17',
    previousBackground: 'Makeup Artist'
});

const winston = new Student({
    name: 'Winston',
    location: 'New Jersey',
    age: 25,
    gender: 'Male',
    favSubjects: ['Python', 'Javascript', 'HTML'],
    className: 'Web18',
    previousBackground: 'Subway'
});


const caroline = new ProjectManager({
    name: 'Caroline',
    location: 'Florida',
    age: 53,
    gender: 'Female',
    favInstructor: 'Ana',
    gradClassName: 'Web18'
});

const sumiko = new ProjectManager({
    name: 'Sumiko',
    location: 'California',
    age: 24,
    gender: 'Female',
    favInstructor: 'Cindy',
    gradClassName: 'Web18'
});


console.log(ana.demo('Applied CSS'));
console.log(cindy.grade(ana, 'CSS'));
console.log(cameron.sprintChallenge('Java'));
console.log(winston.PRAssignment('Python'));
console.log(sumiko.standUp('Web18'));
console.log(caroline.debugsCode(winston, 'Javascript Callbacks'));
console.log(sumiko.gradClassName);
console.log(winston.previousBackground);
console.log(cameron.className);
console.log(maria.favSubjects);
console.log(cindy.catchPhrase);
console.log(ana.specialty);

