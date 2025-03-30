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
        callback();
    }, 300)
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
// it resolves if only  all the promises are resolved;

console.log("this is promise all");

const promiseOne = new Promise((resolve,reject) => {
    setTimeout(() =>{
        resolve("promise one is resloved");
    },4000);
});

const promiseTwo = new Promise((reslove,reject) => {
    setTimeout(() => {
        reslove("promise two is resolved");
    },3000);
});

Promise.all([promiseOne,promiseTwo])
.then((data) => {
    console.log(data[0],data[1]);
})
.catch((error) => {
    console.log(error);
});

// asynch and await

const stepOne = () => {
    return new Promise((resolve,reject) => {
        const step = true;
        if(step){
            resolve("step one is done");
        }else{
            reject("step failed");
        }
    })
}

const stepTwo = () => {
    return new Promise((resolve,reject) => {
        const step = false;            // if rejected at some point it will not execute frome here onwards
                                     // in promise chaining
        if (step){
            resolve("step two is done");
        }else {
            reject("steo two failed");
        }

    })
}

const stepThree = () => {
    return new Promise((resolve,reject) => {
        const step3 = false;
        if(step3){
            resolve("step 3 is done");
        } else {
            reject("step 3 is failed");
        }
    })
}

const stepOrder = async () =>{
    try{
        const s1 = await stepOne();
        console.log(s1);
        const s2 = await stepTwo();
        console.log(s2);
        const s3 = await stepThree();
        console.log(s3);

    }
    catch (error){
        console.log(error);
    }
}
stepOrder();


// fetch api

fetch('https://dummyjson.com/test')
.then(data => data.json())
.then(console.log);

// random joke usinf asynch wait

async function randoJoke(){
    try{
        let joke = await fetch(`https://official-joke-api.appspot.com/random_joke`);
        let jokeJson = await joke.json();    
        console.log(jokeJson.setup);
        console.log(jokeJson.punchline);

    } catch(error){
        console.log(error);
    }
}
randoJoke();
