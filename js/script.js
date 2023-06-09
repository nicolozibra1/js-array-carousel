// Consegna:
// Dato un array contenente una lista di cinque immagini, 
// creare un carosello come nello screenshot allegato.


// MYSCRIPT
const images = [
    'img/01.webp',
    'img/02.webp',
    'img/03.webp',
    'img/04.webp',
    'img/05.webp'
];
const slider = document.querySelector('.slider');
console.log(slider)
let currentIndex = 0;
let currentSelect = currentIndex + 1;
let slides = '';

// MAIN-SLIDER
for(let i= 0; i < images.length; i++){
slides += `<div class="slide">
             <img src="${images[i]}" alt="roma-${i}">
           </div>`;
}
console.log(slides);

slider.innerHTML += slides;
document.querySelectorAll('.slide')[currentIndex].classList.add('active');

const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
console.log(next, prev);


next.addEventListener('click', goNext);

function goNext() {
document.querySelectorAll('.slide')[currentIndex].classList.remove('active');
document.querySelectorAll('.nail')[currentIndex].classList.toggle('img-current'); 


if(currentIndex === images.length - 1) {
    currentIndex = 0;
    document.querySelectorAll('.nail')[currentIndex].classList.toggle('img-current');
}
else if(currentIndex > 4) {
    currentIndex = 0;
}
else{
    currentIndex++;
    document.querySelectorAll('.nail')[currentIndex].classList.toggle('img-current');
}
document.querySelectorAll('.slide')[currentIndex].classList.add('active');

console.log(currentIndex)[i];
}

prev.addEventListener('click', goPrev);

function goPrev() {
document.querySelectorAll('.slide')[currentIndex].classList.remove('active');
document.querySelectorAll('.nail')[currentIndex].classList.toggle('img-current'); 
if(currentIndex === 0) {
    currentIndex = images.length - 1;
    document.querySelectorAll('.nail')[currentIndex].classList.toggle('img-current'); 
}
else if(currentIndex > 4) {
    currentIndex = 0;
}
else{
    currentIndex--;
    document.querySelectorAll('.nail')[currentIndex].classList.toggle('img-current');
}
document.querySelectorAll('.slide')[currentIndex].classList.add('active');
}

// THUMBNAIL
const thumbNail = document.querySelector('.thumbnail');
let nails = '';
console.log(thumbNail);

for(let i= 0; i < images.length; i++){
    let classNail = "nail"; 
    if(i === 0){
        classNail += " img-current";
    }
    nails += `<div class="${classNail}">
                 <img src="${images[i]}" alt="roma-${i}">
               </div>`;
    }
    console.log(nails);

    thumbNail.innerHTML += nails;
    