class String{

    // constructor(name){
    // this.name =name;
    
    

    getString(string)
    {
       this.string =string; 
    }

    putString()
    {
        return(`The string is ${this.string}`);
    }
};
let obj1 =new String();
console.log(obj1.getString("hello"));
console.log(obj1.putString());