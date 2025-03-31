function createScoreTracker(){
    let score = 0;

    return {
        increase : function(points){
            score += points;
        },
        decrease : function(points){
            score -= points;
        },
        getScore : function(){
            console.log(score);
        },
        reset : function(){
            score = 0;
        }
    }
}

let player1 =  createScoreTracker();
player1.increase(10);
player1.decrease(5);

let player2 = createScoreTracker();
player2.increase(20);
player2.decrease(3);



player1.getScore();
player2.getScore();