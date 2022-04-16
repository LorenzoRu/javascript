console.log("connected");

const switchBox = document.querySelector('.switch');
console.log(switchBox);
const btn = document.querySelector('.btn');
console.log(btn);
const icone = document.querySelector('i');
console.log(icone);
const container = document.querySelector('i');



switchBox.addEventListener('click', function() {
    console.log("switch clicked");
    btn.classList.toggle('btn-changed');
    icone.classList.toggle('icone-change');
    icone.classList.toggle('fa-sun');
    switchBox.classList.toggle('switch-changed');
    container.classList.toggle('container-changed');

    if(title.innerText === "Mode Sombre"){
        title.innerText = "Mode Clair";
        title.classList.add('title-changed');
    }else{
        title.innerText = "Mode Sombre";
        title.classList.remove('title-changed');
    };
});
