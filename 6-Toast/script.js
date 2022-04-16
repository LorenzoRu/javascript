console.log('script.js is working');
const btn = document.querySelector('.btn');
const toast = document.querySelector('.toast');


btn.addEventListener('click', () => {
    const notification = document.createElement('div');
    notification.classList.add('msg');
    notification.innerText = 'Bien enregistré !';
    console.log(notification);
    toast.appendChild(notification);   
    setTimeout(() => {
        notification.remove();
    }, 2000);
});
