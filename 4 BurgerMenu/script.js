console.log("connected");

const icone = document.querySelector('.navbar-mobile i');
console.log(icone);
const modal = document.querySelector('.modal');
console.log(modal);

icone.addEventListener('click', function(){
    console.log("test")
modal.classList.toggle('test');
icone.classList.toggle('fa-times');
});