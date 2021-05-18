var counter = 1;
    setInterval(function(){
        document.getElementById('radio' + counter).checked = true;
        counter ++;
        if(counter > 3){
            counter = 1;
        }
    }, 5000);

    
const links = document.querySelectorAll('.cardserv a')

links.forEach(link => link.addEventListener('click', navegar))

function navegar(e) {
    const href = e.target.parentElement.getAttribute('href')
    const path = href.split('.')

    window.location.href =  `${path[1]}.${path[2]}`
}
