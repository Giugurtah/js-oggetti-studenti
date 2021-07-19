// *ES1
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
//Elemento dove verranno stampati i dati degli studenti
const studentsElement = document.getElementById("students");
//Bottoni
const addStudentButton = document.getElementById("add_student");
const saveDataButton = document.getElementById("save_data")
//Data form
const studentDataForm = document.getElementById("student_data");
const studentName = document.getElementById("student_name");
const studentSurname = document.getElementById("student_surname");
const studentAge = document.getElementById("student_age");

//Creo l'array
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

//Stampo l'array con apposita funzione
printArrayObjects(studentsArray, studentsElement);

//Quando viene richiesto, il form per inserire nuovi studenti compare
addStudentButton.addEventListener("click", function(){
    studentDataForm.classList.remove("hide");
})

//Salvataggio dei dati e stampa
saveDataButton.addEventListener("click", function(){
    //Al click viene creata una variabile oggetto ausiliaria
    var auxStudent = {
        name : studentName.value,
        surname : studentSurname.value,
        age : parseInt(studentAge.value),
    };
    //La variabile ausiliaria viene aggiunta all'array
    studentsArray.push(auxStudent);
    //Viene poi iniziallizzato il messaggio a schermo e viene poi eseguita nuovamente la funzione di stampa
    studentsElement.innerHTML = "";
    printArrayObjects(studentsArray, studentsElement);

    studentName.value = "";
    studentSurname.value = "";
    studentAge.value = "";
})

//Funzione apposita per stampare tutti gli studenti dell'array
function printArrayObjects (array, element) {
    for (var i = 0; i < array.length; i++) {
        element.innerHTML += "----------STUDENTE N°" + (i+1) + "----------<br>";
        for (var key in array[i]) {
            element.innerHTML += key + ": " + array[i][key] + "<br>";
        }
    }
}
