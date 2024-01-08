var sign = document.querySelectorAll('.img2');
var game = document.querySelectorAll('.img1');
var text = document.querySelector('.text');


function randomNumber(){
    return Math.floor(Math.random()*3)
}

var imgs = ['/images/rock_image.png','/images/paper_image.png','/images/scissors_image.png']

function play(num){
    rn = randomNumber();
    // console.log(rn);
    if(num == rn){
        text.innerHTML = "Draw";
    }
    else if(num == rn+1){
        text.innerHTML = "You Win";
    }
    else{
        text.innerHTML = "You Loose";
    }
    game[0].src = imgs[rn];
    game[1].src = imgs[num];
}
sign[0].addEventListener("click",function(){
    // console.log('rock');
    play(0); 
});
sign[1].addEventListener("click",function(){
    // console.log('paper');
    play(1)
});
sign[2].addEventListener("click",function(){
    // console.log('scissor');
    play(2);
});