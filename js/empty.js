const NUMBER_STARS = 200

  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

for (let i = 0; i < NUMBER_STARS; i++) {
  var size = getRandomInt(5) + 3
  document.querySelector('.container').innerHTML += `
  <span class="star" 
  data-coef="${getRandomInt(3) + 1 * 2}" 
  data-x="${Math.floor(Math.random( ) * windowWidth * 1.2)}" 
  data-y="${Math.floor(Math.random( ) * windowHeight * 1.2)}"
  style="
  width: ${size}px;
  height: ${size}px;"
  >
  </span>`
}

const stars = document.querySelectorAll('.star')

const elem = document.querySelector('body'); // выбираем элемент, на котором будем отслеживать движение мыши

elem.addEventListener('mousemove', function (event) {
  // добавляем обработчик события "mousemove"
  const x = event.clientX - (windowWidth / 2); // получаем координату X мыши
  const y = event.clientY - (windowHeight / 2); // получаем координату Y мыши

  stars.forEach((item) => {
    item.style.cssText += `
    left: ${parseInt(item.dataset.x) + x / parseInt(item.dataset.coef) / 2}px; 
    top: ${parseInt(item.dataset.y) + y / parseInt(item.dataset.coef) / 2}px;
    `
  })

  //console.log(`Координаты мыши: x=${x}, y=${y}`); // выводим координаты мыши в консоль
});



// Элементы
const defaultSound = new Audio("../amogus.mp3");
// Кнопки
const redButton = document.querySelector(".amogus");

// Обработчик кнопки
redButton.addEventListener("click", () => {
      const audio = defaultSound.cloneNode();
      audio.play();
});

