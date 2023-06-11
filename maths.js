var answer;
var score = 0;
var background_image = []
function nextQuestion(){
    const n1 = Math.floor(Math.random()*5);
    document.getElementById('n1').innerHTML = n1;
    const n2 = Math.floor(Math.random()*5);
    document.getElementById('n2').innerHTML = n2;

    answer = n1 + n2;
}

function checkAnswer(){
    const prediction = predictImage();
    if(prediction == answer){
        score++;
        s = "images/background"+score+".svg";
        background_image.push('url(' + s + ')');
        document.body.style.backgroundImage = background_image;

        if (score >= 6) {
            score = 0;
            alert('well done you won the quiz');
            background_image = [];
        }
        
    }
    else{
        score--;
        alert('try to do again');
        background_image.pop();
        document.body.style.backgroundImage = background_image;
    }
    if(score < 0) {score = 0;}
}