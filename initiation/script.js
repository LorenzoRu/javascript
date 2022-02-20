console.log("connected")
let  titre = document.getElementById("title");
titre.style.color = "green";
titre = 2;
console.log(titre);


//select //store
const redBtn = document.getElementById("btnRed");
console.log(redBtn);
const blueBtn = document.getElementById("btnBlue");
console.log(blueBtn);
let score = 0;
console.log(score, "initialisation");
let title = document.getElementById('title');
console.log(title);


//action
redBtn.addEventListener('click', function(){
console.log('cliked');
add();
});
blueBtn.addEventListener('click', function(){
console.log('cliked');
add();

});

function add(){
    score = score + 1;
    console.log(score);
    title.innerText = score;
};

setTimeout(function(){
    redBtn.remove();
    blueBtn.remove();
}, 10000);