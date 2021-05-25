(function() {
  document.addEventListener("mousemove", parallax);

  function parallax(e) {
    const elem = document.querySelector('.ParallaxG');
    const speed = elem.getAttribute('data-speed')
    const x = (window.innerWidth - e.pageX*speed)/150
    const y = (window.innerHeight - e.pageY*speed)/150

    elem.style.transform = `translateX(${x}px) translateY(${y}px)`
  }
}())