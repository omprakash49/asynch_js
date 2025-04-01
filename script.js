let employee = {
    work : function(){
        console.log("employee is working");
    }
}

let engineer = {
    code : function(){
        console.log("engineer is coding");
    }
}

engineer.__proto__ = employee;

engineer.work();
engineer.code();
