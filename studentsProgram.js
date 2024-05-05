const studentsArr = []

const addStudents = (id, name, age, grade)=>{
    let students = {
        'id': id,
        'name': name,
        'age': age,
        'grade': grade
    }
    studentsArr.push(students)
}

addStudents(3, 'Tunde', 23, 'A')
addStudents(4, 'Bola', 29, 'B')
addStudents(5, 'Tayo', 19, 'B')
addStudents(6, 'Kunle', 90, 'A')

const getStudentById = (id)=>{
    const findStudent = studentsArr.find((elem)=>{
        return elem.id == id
    })
    return findStudent
}


const updateStudent = (id, updatedInfo) =>{
    let studentToBeUpdated = getStudentById(id)
    Object.assign(studentToBeUpdated, updatedInfo)
}
updateStudent(4, {vitamin: 'Vitamin-C'})
updateStudent(6, {sex: 'male', marital_status: 'married'})


const generateGradeReport = (grade)=>{
    const studentsInGrade = studentsArr.filter((elem)=>{
        return elem.grade == grade
    })
    let report = 'The following students have grade ' + grade + ' in the just concluded examination. Their names are listed as follows:'

    for(let index in studentsInGrade){
        report += studentsArr[index].name + ' '
    }
    return report
}
console.log(generateGradeReport('A'))