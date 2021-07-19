//*ES1
// const studentElement = document.getElementById("students");
// var studentObject = {
//     name : "Cristian",
//     surname : "Buoncompagni",
//     age : 22,
// }

// for (var key in studentObject) {
//     studentElement.innerHTML += key + ": " + studentObject[key] + "<br>";
// }

//*ES2
const studentsElement = document.getElementById("students");
const addStudentButton = document.getElementById("add_student");
const saveDataButton = document.getElementById("save_data")
const studentDataForm = document.getElementById("student_data");
const studentName = document.getElementById("student_name");
const studentSurname = document.getElementById("student_surname");
const studentAge = document.getElementById("student_age");
let studentsArray = [
    {
        name : "Tony",
        surname : "Stark",
        age : 51,
    },
    {
        name : "Steve",
        surname : "Rogers",
        age : 103,
    },
    {
        name : "Natasha",
        surname : "Romanoff",
        age : 37,
    },
];

printArrayObjects(studentsArray, studentsElement);

addStudentButton.addEventListener("click", function(){
    studentDataForm.classList.remove("hide");
})

saveDataButton.addEventListener("click", function(){
    var auxStudent = {
        name : studentName.value,
        surname : studentSurname.value,
        age : parseInt(studentAge.value),
    };
    studentsArray.push(auxStudent);
    studentsElement.innerHTML = "";
    printArrayObjects(studentsArray, studentsElement);

    studentName.value = "";
    studentSurname.value = "";
    studentAge.value = "";
})

function printArrayObjects (array, element) {
    for (var i = 0; i < array.length; i++) {
        element.innerHTML += "----------STUDENTE N°" + (i+1) + "----------<br>";
        for (var key in array[i]) {
            element.innerHTML += key + ": " + array[i][key] + "<br>";
        }
    }
}
