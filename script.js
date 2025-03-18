//  callbacks
function task1(callback){
    setTimeout(() => {
        console.log("hello world! (task 1) ");
        callback();
    }, 3000);
}

function task2(callback){
    setTimeout(() => {
        console.log("task 2 completed");
        callback;
    }, 00)
}

task1(() =>{
    task2(() =>{

    }); 
});



// promises

const promise = new Promise((resolve,reject) => {
    const state = false;
    setTimeout(() =>{
        if(state){
            resolve("resloved this");
        } else {
            reject("rejected this");
        }
    }, 1000);
});

console.log(promise);

promise
.then((value) => {
    console.log(value);
})
.catch((error) => {
    console.log(error);
});


// promise chaining

const process1 = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve("process 1 complete");
    }, 4000);
});

const process2 = new Promise((resolve,reject) => {
    setTimeout(() =>{
        resolve("process 2 completed");
    }, 1000);
});

const process3 = new Promise((reslove,reject) => {
    setTimeout(() =>{
        reject("process 3 is completely relected");
    },800);
});

process1
.then((value) => {
    console.log(value);
    return process2;
})
.then((value) => {
    console.log(value);
    return process3;
})
.catch((value) => {
    console.log(value);
});

// promise all

