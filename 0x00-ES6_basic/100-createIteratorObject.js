export default function createIteratorObject(report) {
  let employees = [];
  for (const department in report.allEmployees) {
    if (Object.prototype.hasOwnProperty.call(report.allEmployees, department)) {
      employees = employees.concat(report.allEmployees[department]);
    }
  }
  return employees[Symbol.iterator]();
}
