const sBtn = document.querySelector('.sucsses-btn');
console.log(sBtn);
const cookies = document.querySelector('.cookies');
console.log(cookies);

sBtn.addEventListener('click', function(){
    cookies.style.opacity = "0";
});