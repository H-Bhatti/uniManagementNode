class person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getName() {
        return this.name
    }
}

class student extends person {
    rollNumber: string;
    courses: course[] = [];

    constructor(name: string, age: number, rollNumber: string) {
        super(name, age);
        this.rollNumber = rollNumber;
    }

    registerForCourse(course: course) {
        this.courses.push(course);

    }
}

class instructor extends person {
    private salary: number;
    courses: course[] = []

    constructor(name: string, age: number, salary: number) {
        super(name, age);
        this.salary = salary;

    }

    assignCourse(course: course) {
        this.courses.push(course);
    }

}
class course {
    id: string;
    name: string;
    studnets: student[] = [];
    instructor!: instructor;

    constructor(id: string, name: string) {
        this.id = id;
        this.name = name;
    }

    addStudent(student: student) {
        this.studnets.push(student);
        student.registerForCourse(this)
    };
    setInsructor(instructor: instructor) {
        this.instructor = instructor;
        instructor.assignCourse(this)
    };
}
class department {
    name: string;
    courses: course[] = [];

    constructor(name: string) {
        this.name = name;
    }

    addCourse(course: course) {
        this.courses.push(course);
    }
}




const student1 = new student("hammad", 25, "stud001");
const student2 = new student("akber", 25, "stud002");

const inst1 = new instructor("junaid", 39, 25000);
const inst2 = new instructor("kamran", 39, 25000);

const course1 = new course("BCC", "BlockChanin");
const course2 = new course("IOT", "Internet of things");

course1.addStudent(student1);
course1.addStudent(student2);
course1.setInsructor(inst1)

const dep = new department("WEB3");
dep.addCourse(course1);
dep.addCourse(course2);

// console.log(student1)
// console.log("_______")
// console.log(inst1)
// console.log("_______")
// console.log(course1)
// console.log("_______")
console.log(dep)
// console.log("X X X")
// course1.addStudent(student1)
// course1.setInsructor(inst1)
// console.log(student1)
// console.log("_______")
// console.log(inst1)