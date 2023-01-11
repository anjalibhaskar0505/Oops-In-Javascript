// Using Inheritance


class shapes
{
    constructor(name){
        this.name =name;
        
    }
    
    typeShape()
    {
        return(`${this.name} is a shape`);
    }

}

class rectangle extends shapes
{
   constructor(name,rectangle){
    
     super(name);
     this.rectangle =rectangle;
   }

   typeRectangle()
   {
     return(`This is a ${this.rectangle} shape`);
   }
   
};


class circle extends shapes{
    constructor(name,circle){
        
        super(name);
        this.circle =circle;
    }
    typeCircle()
    {
        return(`This is ${this.circle} shape`);
    }
};

class square extends rectangle
{
    constructor(rectangle,square){
        super(rectangle);
        this.square=square;
    }
    getSquare(){
        return(`${this.square} is a rectangle`);
    }
};

var obj_1 = new shapes("rectangle");
console.log(obj_1.typeShape());

var obj_2 = new rectangle("rectangle","rectangle");
console.log(obj_2.typeRectangle());

var obj_3 = new circle("rectangle","circle");
console.log(obj_3.typeCircle());

var obj_4 = new square("rectangle","square");

console.log(obj_4.typeRectangle());
console.log(obj_4.getSquare());



