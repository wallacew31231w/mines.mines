const grid = document.querySelector('.grid');
let redSquareIndex = Math.floor(Math.random() * 24); // Índice do quadrado vermelho

// Crie os 24 quadrados
for (let i = 0; i < 24; i++) {
  const square = document.createElement('div');
  square.classList.add('square');
  
  // Verifique se este quadrado é o quadrado vermelho
  if (i === redSquareIndex) {
    square.addEventListener('click', () => {
      if (square.style.backgroundColor !== 'red') {
        square.style.backgroundColor = 'red'; // Torna o quadrado vermelho visível
        alert("Você perdeu!"); // Ação de perder o jogo
      }
    });
  } else {
    square.addEventListener('click', () => {
      square.style.backgroundColor = 'green'; // Ação de acertar
    });
  }
  
  grid.appendChild(square);
}
