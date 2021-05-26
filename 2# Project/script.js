const title = document.getElementsByTagName("strong")[0]
const description = document.getElementsByClassName("description")[0]
const elemento = document.getElementsByClassName("elemento")[0]
const titulo = document.getElementsByClassName("title")
const content = document.getElementsByClassName("content")[0]

const transition = [ { opacity: 1, easing: 'linear' },{ opacity: 0, easing: 'ease-in' },{ opacity: 1 } ];
const data = [
  {},
  {name: "Sahasrara", color: "#FB7BE0", element: "Coronário", about: "O elemento deste chakra é o pensamento que representa a manifestação de tudo ao nosso redor e a função do sahasrara é o conhecimento."},
  {name: "Ajna", color: "#8E6ADB", element: "Frontal", about: "Ele está localizado no centro da cabeça, atrás da testa, e o elemento associado a este chakra é a luz através da qual enxerga o mundo exterior. É também chamado de chakra do terceiro olho e refere-se ao olho da percepção que  permite ver além da realidade simples."},
  {name: "Visuddha", color: "#02A6A8", element: "Éter", about: "Este chakra está associado à comunicação, à maneira de se expressar e à criatividade. A comunicação vai além dos estados físicos da matéria e é possível graças ao éter, espaço e vibrações."},
  {name: "Anahata", color: "#699807", element: "Ar", about: "Esse chakra é o que governa o amor, mas é diferente do segundo chakra. O amor deste último é mais sensual, apaixonado e externo porque é voltado para uma pessoa, enquanto o do quarto chakra é puro, inconsciente e vem de dentro."},
  {name: "Manipura", color: "#FEE359", element: "Fogo", about: "Está conectada à energia na verdade, é responsável pelo metabolismo, tanto no nível macroscópico, que ocorre no sistema digestivo, quanto no nível microscópico, que ocorre nas células individuais."},
  {name: "Svadhisthana", color: "#DD7327", element: "Água", about: "Está conectada à regula todos os processos em que líquidos estão envolvidos, como circulação sanguínea, produção e eliminação de urina, reprodução e sexualidade. Já no comportamental influencia o prazer, a sexualidade, as emoções e até as sensações."},
  {name: "Muladhara", color: "#FA2138", element: "Terra", about: "Está conectada à parte sólida do corpo, como ossos, músculos e intestino grosso (por onde passa a substância sólida)."},
]

const pointer = document.querySelectorAll(".pointer");

pointer.forEach(ponteiro => {
  ponteiro.addEventListener("mouseover", function(e) {
    content.animate(transition, 500);
    
    setTimeout(()=>{
      titulo[0].innerText = "Elemento: "
      titulo[0].style.color = data[e.target.id].color;
      titulo[1].innerText = "Sobre: "
      titulo[1].style.color = data[e.target.id].color;
      title.innerText = data[e.target.id].name;
      title.style.color = data[e.target.id].color;
      description.innerText = `${data[e.target.id].about}`;
      elemento.innerText = `${data[e.target.id].element}`;
    },250);
  })
})
