document.getElementById("Beagle").innerHTML = "Este es el div de la raza Beagle"


let divs = document.getElementsByClassName("col")

for (let i = 0; i < divs.length; i++) {
    console.log("contenido del div = " + i + ":" + divs[i].innerText)
    divs[i].style.backgroundColor = ''
}

let tagh3 = document.getElementsByTagName("h3")


document.querySelector(".col")
document.querySelectorAll(".col")

document.getElementById("Pomeranian").addEventListener("click", myFunct);

function myFunct() {
    document.getElementById("Pomeranian").innerHTML = "POMERANIAN!";
}

document.getElementById("Boxer").addEventListener("click", myFunct1);

function myFunct1() {
    document.getElementById("Boxer").innerHTML = "XD!";
}



document.getElementById("myForm").addEventListener("click", myFunction);

function myFunction() {
    alert("Se guardara en la base de datos tu voto");
}

function myFunction() {
    alert("Se guardara en la base de datos tu voto");
}