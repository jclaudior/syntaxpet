const slider = document.getElementById('alimentacao');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mousemove', (e) => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 3; //scroll-fast
  slider.scrollLeft = scrollLeft - walk;
  console.log(walk);
});


const slider2 = document.getElementById('alimentacaoDesc');
let isDown2 = false;
let startY;
let scrollTop;

slider2.addEventListener('mousedown', (e) => {
  isDown2 = true;
  slider2.classList.add('active');
  startY = e.pageY - slider2.offsetTop;
  scrollTop = slider2.scrollTop;
});
slider2.addEventListener('mouseleave', () => {
  isDown2 = false;
  slider2.classList.remove('active');
});
slider2.addEventListener('mouseup', () => {
  isDown2 = false;
  slider2.classList.remove('active');
});
slider2.addEventListener('mousemove', (e) => {
  if(!isDown2) return;
  e.preventDefault();
  const y = e.pageY - slider2.offsetTop;
  const walk = (y - startY) * 3; //scroll-fast
  slider2.scrollTop = scrollTop - walk;
  console.log(walk);
});

const slider3 = document.getElementById('brinquedos');
let isDown3 = false;
let startX3;
let scrollLeft3;

slider3.addEventListener('mousedown', (e) => {
  isDown3 = true;
  slider3.classList.add('active');
  startX3 = e.pageX - slider3.offsetLeft;
  scrollLeft3 = slider3.scrollLeft;
});
slider3.addEventListener('mouseleave', () => {
  isDown3 = false;
  slider3.classList.remove('active');
});
slider3.addEventListener('mouseup', () => {
  isDown3 = false;
  slider3.classList.remove('active');
});
slider3.addEventListener('mousemove', (e) => {
  if(!isDown3) return;
  e.preventDefault();
  const x = e.pageX - slider3.offsetLeft;
  const walk = (x - startX3) * 3; //scroll-fast
  slider3.scrollLeft = scrollLeft3 - walk;
  console.log(walk);
});


const slider4 = document.getElementById('brinquedosDesc');
let isDown4 = false;
let startY4;
let scrollTop4;

slider4.addEventListener('mousedown', (e) => {
  isDown4 = true;
  slider4.classList.add('active');
  startY4 = e.pageY - slider4.offsetTop;
  scrollTop4 = slider4.scrollTop;
});
slider4.addEventListener('mouseleave', () => {
  isDown4 = false;
  slider4.classList.remove('active');
});
slider4.addEventListener('mouseup', () => {
  isDown4 = false;
  slider4.classList.remove('active');
});
slider4.addEventListener('mousemove', (e) => {
  if(!isDown4) return;
  e.preventDefault();
  const y = e.pageY - slider4.offsetTop;
  const walk = (y - startY4) * 3; //scroll-fast
  slider4.scrollTop = scrollTop4 - walk;
  console.log(walk);
});