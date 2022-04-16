console.log("connected");

const modal = document.querySelector('.modal-container');

const btn = document.querySelector('.reveal');

const code = document.querySelector('.code');

const icone = document.querySelector('.fa-times');



window.addEventListener('scroll', displayModal);

function displayModal(){
    
    let h = document.documentElement.scrollTop;
    if(h > 400) {
        modal.style.display = "flex";
    }

}

btn.addEventListener('click', function(){
    code.style.display = "block";
    btn.style.display = "none";
});

icone.addEventListener('click', function(){
    modal.style.display = "none";
    window.removeEventListener('scroll', displayModal)
}); 