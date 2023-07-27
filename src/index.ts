// let x: number = 10;
// x = 25;
// console.log(x);

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
class User{
    name
    role
    isApproved

    constructor(name: string, role: string, isApproved: boolean){
        this.name = name
        this.role = role
        this.isApproved = isApproved
    }

    showUserName(){
        console.log(`o nome do usuário é ${this.name}`);
    }

    showUserRole(canShow: boolean): void{
        if(canShow){
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

//interface em classes
interface IVehicle{
    brand: string
    showBrand(): void
}

class car implements IVehicle{

    brand;
    wheels;

    constructor(brand:string, wheels:number){
        this.brand = brand
        this.wheels = wheels
    }

    showBrand(): void {
        console.log (`a marca do carro é: ${this.brand}`)
    }

    showWheels(): void {
        console.log (`o carro tem: ${this.wheels}`)
    }
}

const fusca = new car("VW", 4)

fusca.showBrand();
fusca.showWheels();

//heranca
class SuperCar extends car {
    engine

    constructor (brand: string, wheels: number, engine: number){
        super(brand, wheels)
        this.engine = engine
    }
}

const a4 = new SuperCar ("Audi", 4, 2.0);

console.log(a4);

a4.showBrand();

//constructor decorators
function BaseParameter(){
    return function <T extends {new(...args: any[]): {}}>(constructor: T) {
        return class extends constructor {
            id = Math.random()
            createdAt = new Date();
        };
    };
}

@BaseParameter()

class Person{
    name

    constructor (name: string){
        this.name = name
    }
}

const sam = new Person("Sam");
console.log(sam);