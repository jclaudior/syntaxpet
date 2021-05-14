const sliderAlimentacao = document.getElementById('alimentacao');
let isDownAlimentacao = false;
let startXAlimentacao;
let scrollLeftAlimentacao;

sliderAlimentacao.addEventListener('mousedown', (e) => {
  isDownAlimentacao = true;
  sliderAlimentacao.classList.add('active');
  startXAlimentacao = e.pageX - sliderAlimentacao.offsetLeft;
  scrollLeftAlimentacao = sliderAlimentacao.scrollLeft;
});
sliderAlimentacao.addEventListener('mouseleave', () => {
  isDownAlimentacao = false;
  sliderAlimentacao.classList.remove('active');
});
sliderAlimentacao.addEventListener('mouseup', () => {
  isDownAlimentacao = false;
  sliderAlimentacao.classList.remove('active');
});
sliderAlimentacao.addEventListener('mousemove', (e) => {
  if(!isDownAlimentacao) return;
  e.preventDefault();
  const x = e.pageX - sliderAlimentacao.offsetLeft;
  const walk = (x - startXAlimentacao) * 3; //scroll-fast
  sliderAlimentacao.scrollLeft = scrollLeftAlimentacao - walk;
});


const rightAlimentacao = document.getElementById("rightAlimentacao");
const leftAlimentacao = document.getElementById("leftAlimentacao");
var moving= -1;

rightAlimentacao.addEventListener('mousedown', () => {
  if(moving==-1)  //Prevent multimple loops!
    moving = setInterval(()=>sliderAlimentacao.scrollLeft += 5, 10 /*execute every 100ms*/);
});

rightAlimentacao.addEventListener('mouseup', () => {
  if(moving!=-1) {  //Only stop if exists
    clearInterval(moving);
    moving=-1;
  }
});

leftAlimentacao.addEventListener('mousedown', () => {
  if(moving==-1)  //Prevent multimple loops!
    moving = setInterval(()=>sliderAlimentacao.scrollLeft -= 5, 10 /*execute every 100ms*/);
});

leftAlimentacao.addEventListener('mouseup', () => {
  if(moving!=-1) {  //Only stop if exists
    clearInterval(moving);
    moving=-1;
  }
});

const sliderAlimentacaoDesc = document.getElementById('alimentacaoDesc');
let isDownAlimentacaoDesc = false;
let startYAlimentacaoDescAlimentacaoDesc;
let scrollTopAlimentacaoDesc;

sliderAlimentacaoDesc.addEventListener('mousedown', (e) => {
  isDownAlimentacaoDesc = true;
  sliderAlimentacaoDesc.classList.add('active');
  startYAlimentacaoDesc = e.pageY - sliderAlimentacaoDesc.offsetTop;
  scrollTopAlimentacaoDesc = sliderAlimentacaoDesc.scrollTop;
});
sliderAlimentacaoDesc.addEventListener('mouseleave', () => {
  isDownAlimentacaoDesc = false;
  sliderAlimentacaoDesc.classList.remove('active');
});
sliderAlimentacaoDesc.addEventListener('mouseup', () => {
  isDownAlimentacaoDesc = false;
  sliderAlimentacaoDesc.classList.remove('active');
});
sliderAlimentacaoDesc.addEventListener('mousemove', (e) => {
  if(!isDownAlimentacaoDesc) return;
  e.preventDefault();
  const y = e.pageY - sliderAlimentacaoDesc.offsetTop;
  const walk = (y - startYAlimentacaoDesc) * 3; //scroll-fast
  sliderAlimentacaoDesc.scrollTop = scrollTopAlimentacaoDesc - walk;
});

const sliderBrinquedos = document.getElementById('brinquedos');
let isDownBrinquedos = false;
let startXBrinquedos;
let scrollLeftBrinquedos;

sliderBrinquedos.addEventListener('mousedown', (e) => {
  isDownBrinquedos = true;
  sliderBrinquedos.classList.add('active');
  startXBrinquedos = e.pageX - sliderBrinquedos.offsetLeft;
  scrollLeftBrinquedos = sliderBrinquedos.scrollLeft;
});
sliderBrinquedos.addEventListener('mouseleave', () => {
  isDownBrinquedos = false;
  sliderBrinquedos.classList.remove('active');
});
sliderBrinquedos.addEventListener('mouseup', () => {
  isDownBrinquedos = false;
  sliderBrinquedos.classList.remove('active');
});
sliderBrinquedos.addEventListener('mousemove', (e) => {
  if(!isDownBrinquedos) return;
  e.preventDefault();
  const x = e.pageX - sliderBrinquedos.offsetLeft;
  const walk = (x - startXBrinquedos) * 3; //scroll-fast
  sliderBrinquedos.scrollLeft = scrollLeftBrinquedos - walk;
});

const rightBrinquedos= document.getElementById("rightBrinquedos");
const leftBrinquedos = document.getElementById("leftBrinquedos");
var moving= -1;

rightBrinquedos.addEventListener('mousedown', () => {
  if(moving==-1)  //Prevent multimple loops!
    moving = setInterval(()=>sliderBrinquedos.scrollLeft += 5, 10 /*execute every 100ms*/);
});

rightBrinquedos.addEventListener('mouseup', () => {
  if(moving!=-1) {  //Only stop if exists
    clearInterval(moving);
    moving=-1;
  }
});

leftBrinquedos.addEventListener('mousedown', () => {
  if(moving==-1)  //Prevent multimple loops!
    moving = setInterval(()=>sliderBrinquedos.scrollLeft -= 5, 10 /*execute every 100ms*/);
});

leftBrinquedos.addEventListener('mouseup', () => {
  if(moving!=-1) {  //Only stop if exists
    clearInterval(moving);
    moving=-1;
  }
});


const sliderBrinquedosDesc = document.getElementById('brinquedosDesc');
let isDownBrinquedosDesc = false;
let startYBrinquedosDesc;
let scrollTopBrinquedosDesc;

sliderBrinquedosDesc.addEventListener('mousedown', (e) => {
  isDownBrinquedosDesc = true;
  sliderBrinquedosDesc.classList.add('active');
  startYBrinquedosDesc = e.pageY - sliderBrinquedosDesc.offsetTop;
  scrollTopBrinquedosDesc = sliderBrinquedosDesc.scrollTop;
});
sliderBrinquedosDesc.addEventListener('mouseleave', () => {
  isDownBrinquedosDesc = false;
  sliderBrinquedosDesc.classList.remove('active');
});
sliderBrinquedosDesc.addEventListener('mouseup', () => {
  isDownBrinquedosDesc = false;
  sliderBrinquedosDesc.classList.remove('active');
});
sliderBrinquedosDesc.addEventListener('mousemove', (e) => {
  if(!isDownBrinquedosDesc) return;
  e.preventDefault();
  const y = e.pageY - sliderBrinquedosDesc.offsetTop;
  const walk = (y - startYBrinquedosDesc) * 3; //scroll-fast
  sliderBrinquedosDesc.scrollTop = scrollTopBrinquedosDesc - walk;
});


const sliderAcessorios = document.getElementById('acessorios');
let isDownAcessorios = false;
let startXAcessorios;
let scrollLeftAcessorios;

sliderAcessorios.addEventListener('mousedown', (e) => {
  isDownAcessorios = true;
  sliderAcessorios.classList.add('active');
  startXAcessorios = e.pageX - sliderAcessorios.offsetLeft;
  scrollLeftAcessorios = sliderAcessorios.scrollLeft;
});
sliderAcessorios.addEventListener('mouseleave', () => {
  isDownAcessorios = false;
  sliderAcessorios.classList.remove('active');
});
sliderAcessorios.addEventListener('mouseup', () => {
  isDownAcessorios = false;
  sliderAcessorios.classList.remove('active');
});
sliderAcessorios.addEventListener('mousemove', (e) => {
  if(!isDownAcessorios) return;
  e.preventDefault();
  const x = e.pageX - sliderAcessorios.offsetLeft;
  const walk = (x - startXAcessorios) * 3; //scroll-fast
  sliderAcessorios.scrollLeft = scrollLeftAcessorios - walk;
});

const rightAcessorios= document.getElementById("rightAcessorios");
const leftAcessorios = document.getElementById("leftAcessorios");
var moving= -1;

rightAcessorios.addEventListener('mousedown', () => {
  if(moving==-1)  //Prevent multimple loops!
    moving = setInterval(()=>sliderAcessorios.scrollLeft += 5, 10 /*execute every 100ms*/);
});

rightAcessorios.addEventListener('mouseup', () => {
  if(moving!=-1) {  //Only stop if exists
    clearInterval(moving);
    moving=-1;
  }
});

leftAcessorios.addEventListener('mousedown', () => {
  if(moving==-1)  //Prevent multimple loops!
    moving = setInterval(()=>sliderAcessorios.scrollLeft -= 5, 10 /*execute every 100ms*/);
});

leftAcessorios.addEventListener('mouseup', () => {
  if(moving!=-1) {  //Only stop if exists
    clearInterval(moving);
    moving=-1;
  }
});


const sliderAcessoriosDesc = document.getElementById('acessoriosDesc');
let isDownAcessoriosDesc = false;
let startYAcessoriosDesc;
let scrollTopAcessoriosDesc;

sliderAcessoriosDesc.addEventListener('mousedown', (e) => {
  isDownAcessoriosDesc = true;
  sliderAcessoriosDesc.classList.add('active');
  startYAcessoriosDesc = e.pageY - sliderAcessoriosDesc.offsetTop;
  scrollTopAcessoriosDesc = sliderAcessoriosDesc.scrollTop;
});
sliderAcessoriosDesc.addEventListener('mouseleave', () => {
  isDownAcessoriosDesc = false;
  sliderAcessoriosDesc.classList.remove('active');
});
sliderAcessoriosDesc.addEventListener('mouseup', () => {
  isDownAcessoriosDesc = false;
  sliderAcessoriosDesc.classList.remove('active');
});
sliderAcessoriosDesc.addEventListener('mousemove', (e) => {
  if(!isDownAcessoriosDesc) return;
  e.preventDefault();
  const y = e.pageY - sliderAcessoriosDesc.offsetTop;
  const walk = (y - startYAcessoriosDesc) * 3; //scroll-fast
  sliderAcessoriosDesc.scrollTop = scrollTopAcessoriosDesc - walk;
});

