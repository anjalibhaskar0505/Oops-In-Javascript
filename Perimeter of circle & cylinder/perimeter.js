class circle{

    constructor(radius){
        this.radius =radius;
    }

    circlePerimeter(){
        return(`${2*Math.PI*this.radius}`);
    }
};

class cylinder extends circle{

    constructor(radius ,height){
        super(radius);
        this.height =height;
    }
    cylinderPerimeter(){
        return(`${2*super.circlePerimeter() + 2*this.height}`);
    }
};
let circle1 =new circle(7);
console.log(circle1.circlePerimeter());

let cylinder1 =new cylinder(7,9);
console.log(cylinder1.cylinderPerimeter());