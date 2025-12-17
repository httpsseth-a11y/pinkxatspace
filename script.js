const text = "En cada paso forjo mi destino en la hoguera del dolor.";
let i = 0;

function typeEffect(){
  if(i < text.length){
    document.getElementById("musicText").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeEffect, 60);
  }
}

typeEffect();

const btn = document.getElementById("playBtn");
let playing = false;

btn.addEventListener("click", () => {
  playing = !playing;
  btn.innerHTML = playing ? "❚❚" : "▶";
});

// Zoom na imagem ao clicar
const cardImg = document.querySelector('.card img');
const overlay = document.querySelector('.overlay') || createOverlay();

function createOverlay() {
  const div = document.createElement('div');
  div.className = 'overlay';
  document.body.appendChild(div);
  return div;
}

if (cardImg) {
  cardImg.addEventListener('click', function(e) {
    e.stopPropagation();
    this.classList.toggle('zoomed');
    overlay.classList.toggle('active');
  });
  
  overlay.addEventListener('click', function() {
    cardImg.classList.remove('zoomed');
    this.classList.remove('active');
  });
  
  // Suporte para touch
  cardImg.addEventListener('touchend', function(e) {
    e.stopPropagation();
    this.classList.toggle('zoomed');
    overlay.classList.toggle('active');
  });
}
