const icone = document.querySelector('i');
const btn = document.querySelector('.btn');
console.log(icone);


icone.addEventListener('click', function(){
    icone.classList.toggle('fa-smile-wink');
    icone.classList.toggle("happy")
});

btn.addEventListener('click', function(){

    btn.classList.toggle('Abonné');
    if(btn.innerText === "Abonné"){
        btn.innerText = "Abonnez-vous";
    }else{
        btn.innerText = "Abonné";
    };
});


