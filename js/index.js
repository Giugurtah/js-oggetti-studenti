//*ES1
// const studentElement = document.getElementById("student");
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

for (var i = 0; i < studentsArray.length; i++) {
    studentsElement.innerHTML += "----------STUDENTE N°" + (i+1) + "----------<br>";
    for (var key in studentsArray[i]) {
        studentsElement.innerHTML += key + ": " + studentsArray[i][key] + "<br>";
    }
}