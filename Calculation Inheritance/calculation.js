class calculation1{
    
    constructor(num1,num2){
        this.num1 =num1;
        this.num2 =num2;
    }
    summation(){
        return(`Summation = ${this.num1 + this.num2}`);
    }
};

class calculation2{
    
    constructor(num1,num2){
        this.num1 =num1;
        this.num2 =num2
    }

    multiplication(){
        return(`Multiplication =${this.num1 * this.num2}`);
    }
};

class calculation3 extends (calculation1,calculation2){

    constructor(num1,num2){
    super(num1);
    this.num1 =num1;
    
    this.num2 =num2; 
    }

    division(){
        return(`Division =${this.num1 / this.num2}`);
    }
};

let obj1 = new calculation1(5,9);
console.log(obj1.summation());

let obj2 = new calculation2(3,7);
console.log(obj2.multiplication());

let obj3 =new calculation3(9,3);
console.log(obj3.division());