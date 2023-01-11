class Student{

    constructor(name,roll_number){
        this.name =name;
        this.roll_number =roll_number;
    }

    Display(age,mark){
        
        this.age =age;
        this.mark =mark;
        return(`The student ${this.name} , roll number is ${this.roll_number} , of age ${this.age} got ${this.mark} mark`);
    }

    
    
    setAge(age){

        this.age =age;
        return(`The student is ${this.age}`);
    }
    

    setMarks(mark){
        
        this.mark =mark;
        return(`The student got ${this.mark}`);
    }

    
   
};

let obj1 =new Student("Anamika",3);
let obj2 =new Student("Rojan",21);
console.log(obj1.Display(21,90));
console.log(obj1.setAge(21));
console.log(obj1.setMarks(90));