// random joke usinf asynch wait

let button =  document.getElementById('but');
let content = document.getElementById('content');
let jokePara = document.getElementById('jokePara');
let jokePara2 = document.getElementById('jokePara2');
let but2 = document.getElementById('but2');


 
button.addEventListener("click" , randoJoke);

async function randoJoke(){
    try{
        jokePara.innerHTML = "loading..."
        jokePara2.innerHTML = "";

        let joke = await fetch(`https://official-joke-api.appspot.com/random_joke`);
        
        let jokeJson = await joke.json();    
        console.log(jokeJson.setup);
        console.log(jokeJson.punchline);
        jokePara.innerHTML = jokeJson.setup;
        jokePara2.innerHTML = jokeJson.punchline;


    } catch(error){
        console.log(error);
    }
}

but2.addEventListener("click" , saveJoke);


function saveJoke(){

}

window.onload = function() {
    let aryJoke = [];
    // get elemet from local to arry

    
}