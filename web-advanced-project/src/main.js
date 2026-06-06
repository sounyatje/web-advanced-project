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

let arrowleft = document.querySelector('.arrow left')
    arrowleft.addEventListener('click', () => {
  img.src = './src/images/controlLR.png';
});