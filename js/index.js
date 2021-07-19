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
const WrongDataAlert = document.getElementById("wrong_data_alert");
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
    //Controllo tramite funzioni apposite che tutti i dati siano accettabili.
    if (validationString(studentName.value) && validationString(studentSurname.value) && validationPositiveNumber(studentAge.value)) {
        //Se i dati sono corretti si avvia il processo di salvatagggio e stampa dati
        //Viene creata una variabile oggetto ausiliaria
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

        WrongDataAlert.classList.add("hide");
    } else {
        //Se i dati sono sbagliati allora compare un messaggio di errore
        WrongDataAlert.classList.remove("hide");
    }
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

//Funzione di validazione quando il dato inserito deve essere una stringa
function validationString(string) {
    if (!string || string.trim() == "" || !isNaN(string)) {
        return false;
    }
    return true;
}

//Funzione di validazione quando il dato inserito deve essere un numero positivo.
function validationPositiveNumber (number) {
    //Il dato viene passato comunque come un stringa, ma controlla che possa essere successivamente convertito in un numero poitivo
    if (!number || number.trim() == "" || isNaN(number) || number < 0) {
        return false;
    }
    return true;
}