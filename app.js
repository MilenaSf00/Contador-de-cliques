
const lazyLoading = () => {
    const listaElementos = document.querySelectorAll("[data]")
    listaElementos.forEach((elemento) => {
        if (elemento.getBoundingClientRect().top < window.innerHeight + 250) {
            elemento.src = elemento.getAttribute("data")
            elemento.removeAttribute("data") 
            const botao = elemento.parentElement.querySelector('.contador');
  let contador = 0;
  
  botao.addEventListener('click', () => {
    contador++;
    botao.innerHTML = contador;
  });
        }
    })
}
window.onload = () => {
    lazyLoading()
}

window.onscroll = () => {
    lazyLoading()
}


