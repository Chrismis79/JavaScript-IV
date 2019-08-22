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