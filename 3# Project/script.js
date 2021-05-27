const transition = [ { opacity: 1, easing: 'ease-in' },{ opacity: 0 } ];
const loader = document.querySelector('#preloader');

const images = [
  './assets/img1.jpg',
  './assets/img2.jpg',
  './assets/img3.jpg',
  './assets/img4.jpg',
  './assets/img5.jpg',
];

window.onload = function() {
  loader.animate(transition,1000);
  loader.style.opacity = 0;
}

const i = Math.floor(Math.random()*5);

document.getElementsByClassName("background")[0].src = images[i];
document.getElementsByClassName("imgContainer")[0].style.backgroundImage = `url('${images[i]}')`;
