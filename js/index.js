const studentElement = document.getElementById("student");
var studentObject = {
    name : "Cristian",
    surname : "Buoncompagni",
    age : 22,
}

for (var key in studentObject) {
    studentElement.innerHTML += key + ": " + studentObject[key] + "<br>";
}
