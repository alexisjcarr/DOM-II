// Your code goes here

/* ===== Navigation ===== */
const navEls = document.querySelectorAll('nav .nav-link');
Array.from(navEls); // this may not be necessary, but if I need an array, it's here

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

/* ===== Images ===== */
const images = document.querySelectorAll('img');
Array.from(images); // this may not be necessary, but if I need an array, it's here

images.forEach(image => {

    image.addEventListener('click', event => {
        event.target.style["max-width"] = '200%';
        event.target.style.border = '3px solid blue';
        console.log(event)
    });

    image.addEventListener('mouseover', event => {
        event.target.style.cursor = 'zoom-in';
        console.log(event)
    });

    image.addEventListener('mouseout', event => {
        event.target.style["max-width"] = '100%';
        event.target.style.border = 'none';
        console.log(event)
    });
});

