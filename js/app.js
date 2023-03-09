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


class Mouse {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const myMouse = new Mouse("Perez", 4);
