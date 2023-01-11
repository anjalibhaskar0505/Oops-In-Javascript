class Calculator{

    constructor(num1 ,num2){
        this.num1 =num1;
        this.num2 =num2;
    }

    addNumbers(){
        return(`The sum of two numbers is ${this.num1 + this.num2}`);
    }

    subtractNumbers(){
        return(`The difference between two numbers is ${this.num1 - this.num2}`);
    }

    multiplyNumbers(){
        return(`The product of two numbers is ${this.num1 * this.num2}`);
    }

    divisionNumbers(){
        return(`The quotient of two numbers is ${this.num1 / this.num2}`);
    }
}

let obj =new Calculator(10,2);

console.log(obj.addNumbers());
console.log(obj.subtractNumbers());
console.log(obj.multiplyNumbers());
console.log(obj.divisionNumbers());