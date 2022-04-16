console.log('script.js is connected');

const ask = document.querySelectorAll('.ask');
ask.forEach(function(element) {
    element.addEventListener('click', function() {
        const answer = element.nextElementSibling;
        answer.classList.toggle('show');
        icone = element.lastElementChild;
        icone.classList.toggle('fa-chevron-up');
    });
});