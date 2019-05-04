class User {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    hello(){
        console.log("Hello World!!!");
    }
    Im(){
        console.log(`My name is ${this.name} and i have ${this.age} years`);
    }
}

let ivan = new User("Ivan", 20),
    max = new User("Max", 36);

    ivan.hello();
    max.Im();