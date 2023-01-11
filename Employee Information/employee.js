class BasicInfo{

    constructor(empid ,empname ,gender){
        this.empname =empname;
        this.empid =empid;
        this.gender =gender;
    }

    getBasicInfo(){
        return(`The name of employee is ${this.empname} ,is ${this.gender} and id is ${this.empid}`);
    }

};
class deptInfo {
    
    constructor(dept_name,assignedwork,time2complete){

        
        this.dept_name =dept_name;
        this.assignedwork =assignedwork;
        this.time2complete =time2complete;
        
    }

    deptInfo(){
        return(`The department name is ${this.dept_name}, the assigned work is ${this.assignedwork} and the time period to complete is ${this.time2complete}`);
    }
};

class loanInfo extends BasicInfo{

    constructor(empid,empname,gender,loanDetails,loanAmount){
        
        super(empid);
        this.empname =empname;
        this.gender =gender;
        this.loanDetails =loanDetails;
        this.loanAmount =loanAmount;
    }

    getloanInfo(){
        return(`${super.getBasicInfo()} ,loan details is ${this.loanDetails} and loan amount is ${this.loanAmount}`);
    }
};


let obj1 =new deptInfo("CS","Java Program","1 hour");
console.log(obj1.deptInfo());

let obj2 =new loanInfo(234,"Anjali","Female","Personal Loan",500000);
console.log(obj2.getloanInfo());