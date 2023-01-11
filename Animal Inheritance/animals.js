class Animal{

    constructor(dog){
        this.dog =dog;
        
    }

};

class Dog extends Animal{

    constructor(dog,puppy){
        super(dog);
        this.puppy =puppy;
        
    }

    getDog(){
        return(`${this.dog} is the subclass of animal`);
    }

};

class Puppy extends Dog{

    constructor(puppy){
        super(puppy)
        this.puppy =puppy;
    }

    getPuppy(){
        return(`${this.puppy} is the subclass of dog`); 
    }
};

let obj1 =new Dog("dog","puppy");
let obj2 =new Puppy("puppy");

console.log(obj1.getDog());
console.log(obj2.getPuppy());