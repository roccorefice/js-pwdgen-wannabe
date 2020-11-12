// yourName
var yourName = prompt("What's your name?");
document.getElementById("name").innerHTML = "Hello " + yourName;

// yourSurname
var yourSurname = prompt("What's your surname?");
document.getElementById("surname").innerHTML = "This is your last name: " + yourSurname;

// favoriteColor
var favoriteColor = prompt("what's your favorite color");
document.getElementById("color").innerHTML = "This is your favorite color: " + favoriteColor;

// yourPassword
document.getElementById("pw").innerHTML = "So this is the most secure password you have ever had in your life: "  + yourName + yourSurname + favoriteColor + "20";
