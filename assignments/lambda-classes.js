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
        this.catchPhrase = instAttrs.catchPhrase
    }
    demo(subject){
        console.log(`Today we are learning about ${subject}`);
    }
    grade(subject){
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
        this.favSubjects.forEach(function(i) {
            console.log((i));
        });
    }
    PRAssignment(subject){
        console.log(`${this.name} has submitted a PR for ${subject}.`);
    }
    sprintChallenge(subject){
        console.log(`${this.name} has begun Sprint challenge on ${subject}.`);
    }
}

class ProjectManager extends Instructor {
    constructor(PMAttrs){
        super(PMAttrs);
        this.gradClassName = PMAttrs.gradClassName,
        this.favInstructor = PMAttrs.favInstructor
    }
    standup(channel){
        console.log(`${this.name} announces to ${channel}, @channel stand up time!`);
    }
    debugsCode(subject){
        console.log(`${this.name} debugs ${Student.name} on ${subject}`)
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
const projectManager1 = new ProjectManager({
    name: 'Jack',
    age: 35,
    location: 'LA',
    speciality: 'Back End',
    favLanguage: 'Java',
    catchPhrase: 'Never quit!',
    gradClassName: 'CS3',
    favInstructor: 'Britt',
})
const projectManager2 = new ProjectManager({
    name: 'Mitch',
    age: 40,
    location: 'OKC',
    speciality: 'Front End',
    favLanguage: 'HTML/CSS',
    catchPhrase: 'Fail until you succeed',
    gradClassName: 'Web 15',
    favInstructor: 'Dan',
})

console.log(person1.speak());
console.log(person2.speak());
console.log(instructor1.demo('JavaScript'));
console.log(instructor2.demo('Python'));
console.log(instructor1.grade('CSS'));
console.log(instructor2.grade('Java'));
console.log(student1.listsSubjects());
console.log(student2.listsSubjects());
console.log(student3.listsSubjects());
console.log(student1.PRAssignment('JavaScript'));
console.log(student2.PRAssignment('CSS'));
console.log(student3.PRAssignment('HTML'));
console.log(student1.sprintChallenge('JavaScript'));
console.log(student2.sprintChallenge('HTML'));
console.log(student3.sprintChallenge('LESS'));
console.log(projectManager1.standup('Web22'));
console.log(projectManager2.standup('Web21'));
console.log(projectManager1.debugsCode('JavaScript'));
console.log(projectManager2.debugsCode('HTML'));

console.log(person1.name, person1.age, person1.location);
console.log(person2.name, person2.age, person2.location);
console.log(instructor1.catchPhrase);
console.log(instructor2.catchPhrase);
console.log(projectManager1.catchPhrase);
console.log(projectManager2.catchPhrase);
console.log(student1.name, student1.previousBackground, student1.className);
console.log(student2.name, student1.previousBackground, student1.className);
console.log(student3.name, student1.previousBackground, student1.className);


