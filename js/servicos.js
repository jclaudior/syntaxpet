const links = document.querySelectorAll('.navegacao ul li a')
const contLinks = document.querySelectorAll('.conteiner a')

contLinks.forEach(link => link.addEventListener('click', navegar))
links.forEach(link => link.addEventListener('click', navegar))

function navegar(e) {
    e.preventDefault()
    const href = e.target.getAttribute('href')
    const para = document.querySelector(href).offsetTop - 100
    console.log(para)
    window.scroll({
        top: para,
        behavior: "smooth"
    })
}

document.addEventListener('scroll', (e) => {
    const posicao = 1750
    const nav =  document.querySelector('.navegacao')
    if (window.pageYOffset >= posicao){
        nav.style.opacity = "0"
    }
    else {
        nav.style.opacity = "1" 
    }
})