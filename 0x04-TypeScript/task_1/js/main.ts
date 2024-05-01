// Task 1
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  readonly location: string;
  [key: string]: any;
}

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);

// Task 2
interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);

// Task 3
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

console.log(printTeacher('John', 'Doe'));

// Task 4
interface Student {
  firstName: string;
  lastName: string;
  age: number; // Added age property
  location: string; // Added location property
}

interface StudentClass extends Student {
  workOnHomework(): string;
  displayName(): string;
}

class StudentClassImpl implements StudentClass {
  constructor(public firstName: string, public lastName: string, public age: number, public location: string) {}

  workOnHomework() {
    return 'Currently working';
  }

  displayName() {
    return this.firstName;
  }
}

const student = new StudentClassImpl('Alice', 'Smith', 25, 'New York');
console.log(student.workOnHomework());
console.log(student.displayName());
