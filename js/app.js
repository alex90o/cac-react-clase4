
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
    const myButtonHTML = myApp.innerHTML + "<button> " + this.text + "</button>"
    myApp.innerHTML = myButtonHTML;

    }
    

}

// Construir el objeto boton
// y llamar al metodo render de ese objeto.
let myButon = new Button("app", "Button Creado...");
myButon.render();





class Input {
   constructor(parentID, type) {
         this.parentID = parentID;
    
     this.type = type;
    }

    render() {
       let myApp = document.getElementById(this.parentID);

       const myInputHTML = myApp.innerHTML + "<input type="+ this.type + ">";

     myApp.innerHTML = myInputHTML; 
       
   }   
 }

let myInput = new Input("inputs1", "checkbox");
 myInput.render();

let myInput2 = new Input("inputs2", "date");
myInput2.render();

let myInput3 = new Input("inputs3", "password");
 myInput3.render();

 let myInput4 = new Input("inputs4", "text");
 myInput4.render();

 let myInput5 = new Input("inputs5", "range");
 myInput5.render();

 let myInput6 = new Input("inputs6", "color");
 myInput6.render();


