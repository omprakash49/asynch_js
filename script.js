// random joke usinf asynch wait

let button =  document.getElementById('but');
let content = document.getElementById('content');
let jokePara = document.getElementById('jokePara');
let jokePara2 = document.getElementById('jokePara2');
let but2 = document.getElementById('but2');


let aryJoke = [];


 
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
    jokeobj = {
        "setup" : jokePara.innerHTML,
        "punchline" : jokePara2.innerHTML
    }

    aryJoke.push(jokeobj);

    // store in local storage
    localStorage.setItem("aryJokeKey" , JSON.stringify(aryJoke));
    console.log(aryJoke);

    location.reload();
}

window.onload = function() {
    
    // get elemet from local to arry
    if(localStorage.getItem("aryJokeKey") !== null )
        aryJoke =  JSON.parse(localStorage.getItem("aryJokeKey"));
    console.log(aryJoke);   
    displayJokes();
}

function displayJokes(){
    
    for (let joke of aryJoke){
        // section divider between different jokes
        let hLine = document.createElement("hr");
        content.appendChild(hLine);

        // joke display
        let disSet =  document.createElement("p");
        let disPun = document.createElement("p");


        disSet.innerHTML = joke.setup;
        disPun.innerHTML = joke.punchline;

        content.appendChild(disSet);
        content.appendChild(disPun);

       

    }

}