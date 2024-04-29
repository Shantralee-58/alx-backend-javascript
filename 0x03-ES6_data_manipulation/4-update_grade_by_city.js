const updateStudentGradeByCity = (students, city, newGrades) => students.map((student) => {
  const gradeObj = newGrades.find((grade) => grade.studentId === student.id);
  if (gradeObj) {
    return { ...student, grade: gradeObj.grade };
  }
  return { ...student, grade: 'N/A' };
});

export default updateStudentGradeByCity;
