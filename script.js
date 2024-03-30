const buttonNo = document.querySelector('#no');
const buttonYes = document.querySelector('#yes');

let fontSize = 2;

let messages = [
  '¿Estás segura?',
  'Piénsalo bien',
  'Piénsalo muy bien',
  'coleta piensalo bien',
  'Mira, el otro botón es más bonito'
];

buttonNo.addEventListener('click', () => {
  fontSize = fontSize + .5;
  buttonYes.style.fontSize = `${fontSize}rem`;

  const indexRandom = Math.floor(Math.random() * messages.length);

  buttonNo.textContent = messages[indexRandom];
});

buttonYes.addEventListener('click', () => {
  document.querySelector('#message').style.display = 'flex';
  setTimeout(() => {
    window.location.href = 'https://www.youtube.com/watch?v=rscOXVuaCGw';
  }, 5000); // Redirigir después de 2 segundos (2000 milisegundos)
});
