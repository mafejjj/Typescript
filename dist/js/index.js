"use strict";
// let x: number = 10;
// x = 25;
// console.log(x);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// //inferencia x annotation
// let y = 12;
// // y = "teste"
// let z: number = 12;
// // tipos básicos
// let firstName: string = "maria"
// let age: number = 17
// const isAdmin: boolean = true;
// //string != string
// console.log(typeof firstName);
// firstName = "joão";
// console.log(firstName);
// //object
// const myNumbers: number[] = [1, 2, 3]
// console.log(myNumbers);
// console.log(myNumbers.length);
// //console.log(myNumbers.toUpperCase())
// console.log(firstName.toUpperCase());
// myNumbers.push(5);
// console.log(myNumbers);
// //tuplas
// let myTuple: [number, string, string[]]
// myTuple = [5, "teste", ["a","b"]]
// //myTuple = [true, false, true]
// //object literals -> {prop: value}
// const user: {name: string, age: number} = {
//     name: "Pedro",
//     age: 18
// };
// console.log(user);
// console.log(user.name);
// //user.job = "programador"
// //any
// let a:any = 0;
// a = "teste";
// a = true;
// a = [];
// //union type
// let id: string | number = "10"
// id = 200
// // id =true
// // id = []
// //type alias
// type myIdType = number | string
// const userId: myIdType = 10
// const productID : myIdType = "0001"
// const shirID: myIdType = 123
// //enum
// //tamanho de roupas(size: médio, size: pequeno)
// enum Size{
//     p = "pequeno",
//     m = "médio",
//     g = "grande"
// }
// const camisa = {
//     name: "Camisa gola V",
//     size: Size.g,
// };
// console.log(camisa);
// //literal types
// let teste: "autenticado" | null;
// // teste = "outrovalor"
// teste = "autenticado";
// teste = null;
// //funcoes
// function sum(a: number, b: number){
//     return a + b;
// }
// console.log(sum(12, 12));
// //console.log(sum("12", true))
// function sayHelloTo(name: string): string {
//     return `Hello ${name}`;
// }
// console.log(sayHelloTo("maria"));
// function logger(msg: string): void{
//     console.log(msg);
// }
// logger ("teste");
// function greeting(name: string, greet?: string): void{
//     if(greet){
//         console.log(`Olá ${greet} ${name}`);
//         return;
//     }
//         console.log(`Olá ${name}`);
// }
// greeting("maria");
// greeting("pedro", "sir");
// //interfaces
// interface MathFunctionParams{
//     n1: number,
//     n2: number
// }
// function sumNumbers(nums: MathFunctionParams){
//     return nums.n1 + nums.n2
// }
// console.log(sumNumbers({n1: 1, n2: 2}));
// function multiplyNumbers(nums: MathFunctionParams){
//     return nums.n1 * nums.n2
// }
// const someNumber:MathFunctionParams = {
//     n1: 5,
//     n2: 10
// }
// console.log(multiplyNumbers(someNumber));
// //narrowing
// //checagem tipos
// function doSomething(info: number | boolean){
//     if(typeof info === "number") {
//         console.log(`o numero é ${info}`)
//         return;
//     }
//     console.log("não foi passado um numero")
// }
// doSomething(5);
// doSomething(true);
// //generics
// function showArraysItems<T>(arr: T[]){
//     arr.forEach((item) => {
//         console.log(`ITEM: ${item}`)
//     })
// }
// const a1 = [1, 2, 3];
// const a2 = ["a", "b", "c"];
// showArraysItems(a1);
// showArraysItems(a2);
//classes
class User {
    constructor(name, role, isApproved) {
        this.name = name;
        this.role = role;
        this.isApproved = isApproved;
    }
    showUserName() {
        console.log(`o nome do usuário é ${this.name}`);
    }
    showUserRole(canShow) {
        if (canShow) {
            console.log(`idade do usuário é: ${this.role}`);
            return;
        }
        console.log("informação restrita");
    }
}
const zeca = new User("zeca", "Admin", true);
console.log(zeca);
zeca.showUserName();
zeca.showUserRole(false);
class car {
    constructor(brand, wheels) {
        this.brand = brand;
        this.wheels = wheels;
    }
    showBrand() {
        console.log(`a marca do carro é: ${this.brand}`);
    }
    showWheels() {
        console.log(`o carro tem: ${this.wheels}`);
    }
}
const fusca = new car("VW", 4);
fusca.showBrand();
fusca.showWheels();
//heranca
class SuperCar extends car {
    constructor(brand, wheels, engine) {
        super(brand, wheels);
        this.engine = engine;
    }
}
const a4 = new SuperCar("Audi", 4, 2.0);
console.log(a4);
a4.showBrand();
//constructor decorators
function BaseParameter() {
    return function (constructor) {
        return class extends constructor {
            constructor() {
                super(...arguments);
                this.id = Math.random();
                this.createdAt = new Date();
            }
        };
    };
}
let Person = class Person {
    constructor(name) {
        this.name = name;
    }
};
Person = __decorate([
    BaseParameter()
], Person);
const sam = new Person("Sam");
console.log(sam);
