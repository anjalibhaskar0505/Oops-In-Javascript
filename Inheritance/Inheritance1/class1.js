class Vehicle{

    constructor(name,number)
    {
        this.name =name;
        this.number =number;
    }
    getVehicle()
    {
        return(`The brand is ${this.name} and the number is ${this.number}`);
    }
};

class Bus extends Vehicle{

    constructor(name,number){
        super(name);
        this.name =name;
        this.number =number;

    }

    getVehicles()
    {
        return(`${super.getVehicle()}`);
    }
};

let obj =new Bus("Omega",2345);
console.log(obj.getVehicles());