// configurar fondo aleatorio entre los colores de los div//
setInterval (function (){
    var aleatorio = Math.round (Math.random()*100)

    if (aleatorio<11) { document.getElementById("contenedor").style.backgroundColor = "coral";}
    else if (aleatorio<22) { document.getElementById("contenedor").style.backgroundColor = "greenyellow";}
    else if (aleatorio<33) { document.getElementById("contenedor").style.backgroundColor = "palevioletred";}
    else if (aleatorio<44) { document.getElementById("contenedor").style.backgroundColor = "cornflowerblue";}
    else if (aleatorio<55) { document.getElementById("contenedor").style.backgroundColor = "rgb(104, 45, 104)";}
    else if (aleatorio<66) { document.getElementById("contenedor").style.backgroundColor = "rgb(68, 167, 117)";}
    else if (aleatorio<77) { document.getElementById("contenedor").style.backgroundColor = "rgb(135, 123, 138)";}
    else if (aleatorio<88) { document.getElementById("contenedor").style.backgroundColor = "rgb(29, 29, 29)";}
    else { document.getElementById("contenedor").style.backgroundColor = "rgb(255, 255, 255)";}

}, 1000)

//configurar puntuacion//

var points = 0

document.getElementById("points").innerText = "Puntuacion: " + points

//circulo 1//
document.getElementById("circle-1").onclick = function() {
    if(document.getElementById("contenedor").style.backgroundColor === document.getElementById("circle-1").style.backgroundColor) {
        points = points + 1
    } else {
        points = points - 1
    }

    document.getElementById("points").innerText = "Puntuacion: " + points

    if (points > 19) {
        alert("Has alcanzado la marca de " + points + " puntos. Continua entrenando de esta manera a diario")

        points = 0

        document.getElementById("points").innerText = "Puntuacion: " + points
    }
}

//circulo 2//
document.getElementById("circle-2").onclick = function() {
    if(document.getElementById("contenedor").style.backgroundColor === document.getElementById("circle-2").style.backgroundColor) {
        points = points + 1
    } else {
        points = points - 1
    }

    document.getElementById("points").innerText = "Puntuacion: " + points

    if (points > 19) {
        alert("Has alcanzado la marca de " + points + " puntos. Continua entrenando de esta manera a diario")

        points = 0

        document.getElementById("points").innerText = "Puntuacion: " + points
    }
}

//circulo 3//
document.getElementById("circle-3").onclick = function() {
    if(document.getElementById("contenedor").style.backgroundColor === document.getElementById("circle-3").style.backgroundColor) {
        points = points + 1
    } else {
        points = points - 1
    }

    document.getElementById("points").innerText = "Puntuacion: " + points

    if (points > 19) {
        alert("Has alcanzado la marca de " + points + " puntos. Continua entrenando de esta manera a diario")

        points = 0

        document.getElementById("points").innerText = "Puntuacion: " + points
    }
}

//circulo 4//
document.getElementById("circle-4").onclick = function() {
    if(document.getElementById("contenedor").style.backgroundColor === document.getElementById("circle-4").style.backgroundColor) {
        points = points + 1
    } else {
        points = points - 1
    }

    document.getElementById("points").innerText = "Puntuacion: " + points

    if (points > 19) {
        alert("Has alcanzado la marca de " + points + " puntos. Continua entrenando de esta manera a diario")

        points = 0

        document.getElementById("points").innerText = "Puntuacion: " + points
    }
}

//circulo 5//
document.getElementById("circle-5").onclick = function() {
    if(document.getElementById("contenedor").style.backgroundColor === document.getElementById("circle-5").style.backgroundColor) {
        points = points + 1
    } else {
        points = points - 1
    }

    document.getElementById("points").innerText = "Puntuacion: " + points

    if (points > 19) {
        alert("Has alcanzado la marca de " + points + " puntos. Continua entrenando de esta manera a diario")

        points = 0

        document.getElementById("points").innerText = "Puntuacion: " + points
    }
}

//circulo 6//
document.getElementById("circle-6").onclick = function() {
    if(document.getElementById("contenedor").style.backgroundColor === document.getElementById("circle-6").style.backgroundColor) {
        points = points + 1
    } else {
        points = points - 1
    }

    document.getElementById("points").innerText = "Puntuacion: " + points

    if (points > 19) {
        alert("Has alcanzado la marca de " + points + " puntos. Continua entrenando de esta manera a diario")

        points = 0

        document.getElementById("points").innerText = "Puntuacion: " + points
    }
}

//circulo 7//
document.getElementById("circle-7").onclick = function() {
    if(document.getElementById("contenedor").style.backgroundColor === document.getElementById("circle-7").style.backgroundColor) {
        points = points + 1
    } else {
        points = points - 1
    }

    document.getElementById("points").innerText = "Puntuacion: " + points

    if (points > 19) {
        alert("Has alcanzado la marca de " + points + " puntos. Continua entrenando de esta manera a diario")

        points = 0

        document.getElementById("points").innerText = "Puntuacion: " + points
    }
}

//circulo 8//
document.getElementById("circle-8").onclick = function() {
    if(document.getElementById("contenedor").style.backgroundColor === document.getElementById("circle-8").style.backgroundColor) {
        points = points + 1
    } else {
        points = points - 1
    }

    document.getElementById("points").innerText = "Puntuacion: " + points

    if (points > 19) {
        alert("Has alcanzado la marca de " + points + " puntos. Continua entrenando de esta manera a diario")

        points = 0

        document.getElementById("points").innerText = "Puntuacion: " + points
    }
}

//circulo 9//
document.getElementById("circle-9").onclick = function() {
    if(document.getElementById("contenedor").style.backgroundColor === document.getElementById("circle-9").style.backgroundColor) {
        points = points + 1
    } else {
        points = points - 1
    }

    document.getElementById("points").innerText = "Puntuacion: " + points

    if (points > 19) {
        alert("Has alcanzado la marca de " + points + " puntos. Continua entrenando de esta manera a diario")

        points = 0

        document.getElementById("points").innerText = "Puntuacion: " + points
    }
}

    //document.querySelector("div").onclick = function() {alert('click')}