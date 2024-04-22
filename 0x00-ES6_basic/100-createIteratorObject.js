export default function createIteratorObject(report) {
  let employees = [];
  for (let department in report.allEmployees) {
    employees = [...employees, ...report.allEmployees[department]];
  }

  let currentIndex = 0;
  return {
    next() {
      return {
        value: employees[currentIndex++],
        done: currentIndex > employees.length,
      };
    },
    [Symbol.iterator]() {
      return this;
    },
  };
}
