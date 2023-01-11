class Vehicle{

    constructor(capacity){
        this.capacity =capacity;
    }

};

class Bus extends Vehicle{

    constructor(capacity)
    {
        super(capacity);
        this.capacity =capacity;
    }

    set_Capacity(){
        return(`The seating capacity is ${this.capacity}`);
    }
    
};

let obj =new Bus(50);
console.log(obj.set_Capacity());