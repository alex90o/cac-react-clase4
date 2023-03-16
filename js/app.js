
/*
alert(" ♥♥♥ Saludar ♦♦♦")
 

 var nombre = prompt("Ingrese su nombre")

 var apellido = prompt("Ingrese su apellido")

 //alert("Hola " + nombre +" "+ apellido + " bienvenido que tengas un buen día"); 
 let myDOM = document; 

console.log(myDOM);

let myApp = document.getElementById("myApp");

myApp.innerHTML = "Hola " + nombre +" "+ apellido + " bienvenido que tengas un buen día"
*/
/* clase 4*/
let myDom = document; //document es un objeto global

let name = "Firlais";

const myDog = {
    name: "Firulais"
};

const myCat = {
    "name": "Kity"
};

console.log(myDog.name);
console.log(myCat.name);

/*
class Mouse {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}*/


function Mouse(name, age) {
    this.name = name;
    this.age = age;
}

const myMouse = new Mouse("Perez", 4);

class Button {
    constructor(parentID, text) {
        this.parentID = parentID;
        // completa this.text
        this.text = text;
    }

    render(){
        let myApp = document.getElementById(this.parentID);

        myApp.innerHTML = "<button>Enviar</button>"; // VAmos a escribir el html para que se 
        // dibuje un boton con el texto de this.text
    }
}

// Construir el objeto boton
// y llamar al metodo render de ese objeto.
let myButon = new Button("app", "login...");
myButon.render();


// myButon.metodoQueSea()