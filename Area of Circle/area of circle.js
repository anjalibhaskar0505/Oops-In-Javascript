class Area{

    constructor(radius){
        this.radius =radius;
    }

    areaCircle(){
        return(`The area of circle is ${2*Math.PI*(this.radius **2)}`);
    }
};
let obj =new Area(21);
console.log(obj.areaCircle());