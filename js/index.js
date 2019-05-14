// Your code goes here

let navEls = document.querySelectorAll('nav .nav-link');

Array.from(navEls);

navEls.forEach(navEl => {
    navEl.addEventListener('mouseover', event => {
        event.target.style.color = '#90CAF9';
        console.log(event)
    });
    navEl.addEventListener('mouseout', event => {
        event.target.style.color = '#212529';
        console.log(event)
    });
});

