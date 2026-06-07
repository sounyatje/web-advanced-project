// vite setup with vanilla without framework https://www.youtube.com/watch?v=iUXt3EtXRaw

import './style.scss'

let items = document.querySelectorAll('.item')
items.forEach(item => {
  item.addEventListener('click', () => {
    items.forEach(i => i.classList.remove('active'))
    item.classList.add('active')
    console.log('geklikt:', item);
  });

  item.addEventListener('mouseenter', () => {
    item.classList.add('hover')
  });

  item.addEventListener('mouseleave', () => {
    item.classList.remove('hover')
  });
});

let arrowleft = document.querySelector('.arrow.left img')
let arrowright = document.querySelector('.arrow.right img')

const leftOriginal = arrowleft.src
const rightOriginal = arrowright.src

arrowleft.addEventListener('mousedown', () => {
  arrowleft.src = './src/images/controlLR.png';
});
arrowleft.addEventListener('mouseup', () => {
  arrowleft.src = leftOriginal;
});
arrowleft.addEventListener('mouseleave', () => {
  arrowleft.src = leftOriginal;
});

arrowright.addEventListener('mousedown', () => {
  arrowright.src = './src/images/controlRR.png';
});
arrowright.addEventListener('mouseup', () => {
  arrowright.src = rightOriginal;
});
arrowright.addEventListener('mouseleave', () => {
  arrowright.src = rightOriginal;
});

let searchbutton = document.getElementById('search-button');
   searchbutton.addEventListener('click', function() {
        console.log("het werkt")
    });

let searchImg = document.querySelector('#search-button img');
searchImg.addEventListener('mousedown', () => {
  searchImg.src = './src/images/searchred.png';
});
searchImg.addEventListener('mouseup', () => {
  searchImg.src = './src/images/search.png'; 
});
searchImg.addEventListener('mouseleave', () => {
  searchImg.src = './src/images/search.png';
});

fetch('https://api.attackontitanapi.com/characters')
  .then(response => response.json())
  .then(data => console.log(data))