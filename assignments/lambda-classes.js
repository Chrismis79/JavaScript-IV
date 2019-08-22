// CODE here for your Lambda Classes
class Person {
    constructor(attrs){
        this.name = attrs.name,
        this.age = attrs.age,
        this.location = attrs.location
    }
    speak(){
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }
}

class Instructor extends Person {
    constructor(instAttrs){
        super(instAttrs);
        this.speciality = instAttrs.speciality,
        this.favLanguage = instAttrs.favLanguage,
        this.catchPhrase = instAttrs.catchPhrase,
    }
    demo(){
        console.log(`Today we are learning about ${subject}`);
    }
    grade(){
        console.log(`${Student.name} receives a perfect score on ${subject}`);
    }
}

class Student extends Person {
    constructor(studentAttrs){
        super(studentAttrs);
        this.previousBackground = studentAttrs.previousBackground,
        this.className = studentAttrs.className,
        this.favSubjects = studentAttrs.favSubjects     
    }
    listsSubjects(){
        this.favSubjects[i].forEach(element => {
            console.log(this.favSubjects[i]);
        });
    }
    PRAssignment(){
        console.log(`${this.name} has submitted a PR for ${subject}.`);
    }
    sprintChalleng(){
        console.log(`${this.name} has begun Sprint challenge on ${subject}.`);
    }
}

class ProjectManager extends Instructor {
    constructor(PMAttrs){
        super(PMAttrs);
        this.gradClassName = PMAttrs.gradClassName,
        this.favInstructor = PMAttrs.favInstructor
    }
    standup(){
        console.log(`${this.name} announces to ${channel}, @channel stand up time!`);
    }
    debugsCode(){
        console.log(`${this.name} debugs ${Student.name}`)
    }
}

const person1 = new Person({
    name: 'Peggy',
    age: 24,
    location: 'South Carolina'
})
const person2 = new Person({
    name: 'Derrel',
    age: 32,
    location: 'Oklahoma'
})
const instructor1 = new Instructor({
    name: 'Dory',
    age: 29,
    location: 'Sydney',
    speciality: 'Front End',
    favLanguage: 'JavaScript',
    catchPhrase: 'Just keep swimming'
})
const instructor2 = new Instructor({
    name: 'Nemo',
    age: 20,
    location: 'Hawaii',
    speciality: 'Back End',
    favLanguage: 'Python',
    catchPhrase: 'If at first you don\'t succeed, try, try again!'
})
const student1 = new Student({
    name: 'Christine',
    age: 39,
    location: 'Tulsa',
    previousBackground: 'Nursing',
    className: 'Web 23',
    favSubjects: ['React','CSS', 'JavaScript', 'UI/UX']
})
const student2 = new Student({
    name: 'Kevin',
    age: 28,
    location: 'Boston',
    previousBackground: 'Clerk',
    className: 'Web 21',
    favSubjects: ['Java','Python', 'JavaScript', 'C#']
})
const student3 = new Student({
    name: 'Lori',
    age: 44,
    location: 'Texas',
    previousBackground: 'Stay at home mom',
    className: 'UI/UX 4',
    favSubjects: ['UI/UX','HTML','CSS', 'LESS']
})
