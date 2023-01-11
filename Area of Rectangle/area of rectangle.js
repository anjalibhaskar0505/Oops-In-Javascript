class Rectangle{
    
    constructor(length,breadth){
        this.length =length;
        this.breadth =breadth;
    }

    areaRectangle(){
        return(`The area of rectangle is ${(this.length) * (this.breadth)}`);
    }
};

let obj =new Rectangle(12,15);
console.log(obj.areaRectangle());