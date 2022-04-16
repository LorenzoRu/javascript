console.log("connected");

const switchBox = document.querySelector('.switch');
const btn = document.querySelector('.btn');
const icone = document.querySelector('i');
const container = document.querySelector('.container');
const title = document.querySelector('.title');

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
