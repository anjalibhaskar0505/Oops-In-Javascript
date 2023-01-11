class MyCalculations{
   
    constructor(num){
        this.num =num;
        

    }
       
    digits()
     {
        var sum=0;
        while(this.num>0){
           
           
            sum +=this.num%10;
            this.num =Math.floor(this.num/10);
           }  
        //    let sum=this.number+10;
         return(`Sum of the digits is ${sum}`);
     } 
     
    reverseNumber()
    {
    var sum=0,b;
    while(this.num > 0)
        {
      b = this.num % 10;
      sum = sum * 10 + b;
      this.num = Math.floor(this.num/10);

        }
        return(`Sum of the digits is ${sum}`);

    }

    reverseString()
    {
    var str =this.num;
    str = str.split(""); //convert 'jQuery' to array 
    str = str.reverse(); //reverse 'jQuery' order  
    str = str.join(""); //then join the reverse order values together
    
    return(`Reverse of the string is ${str}`);
        
   

    
}
};

let obj1 =new MyCalculations(123);
console.log(obj1.digits());

let obj2 =new MyCalculations(567);
console.log(obj2.reverseNumber());

let obj3 =new MyCalculations("Hello World");
console.log(obj3.reverseString());