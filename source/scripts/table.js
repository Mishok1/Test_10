const table = document.querySelector('.hero__image1');
const upButton = document.querySelector('#upButton');
const downButton = document.querySelector('#downButton');
let maxLength = -28;
let minLength = 36;
const step = 1;
const secondsToHold = 1;
let currentTableValue = -12;


function buttonsStateControl() {
  if (currentTableValue <= maxLength) {
    upButton.disabled = true;
    downButton.disabled = false;
  } else if (currentTableValue >= minLength) {
    downButton.disabled = true;
    upButton.disabled = false;
  } else if (minLength >= currentTableValue >= maxLength) {
    upButton.disabled = false;
    downButton.disabled = false;
  }
}


function holdHandler(button, legsLength, device) {
  const timeoutId = setTimeout(() => {
    currentTableValue = legsLength;
    table.style.transform = `translateY(${legsLength}px)`;
    buttonsStateControl();
  }, (secondsToHold * 1000));

  button.addEventListener(`${device}`, () => {
    clearTimeout(timeoutId);
  }, { once: true });
}

const screenWidth = window.screen.width;

if (screenWidth > 1440) {
  maxLength = -66;
  minLength = 87;
}

upButton.addEventListener('click', () => {
  currentTableValue = currentTableValue - step;
  table.style.transform = `translateY(${currentTableValue}px)`;
  buttonsStateControl();
});

downButton.addEventListener('click', () => {
  currentTableValue = currentTableValue + step;
  table.style.transform = `translateY(${currentTableValue}px)`;
  buttonsStateControl();
});

// debugger;
downButton.addEventListener('mousedown', () => holdHandler(downButton, minLength, 'mouseup'));

upButton.addEventListener('mousedown', () => holdHandler(upButton, maxLength, 'mouseup'));


downButton.addEventListener('touchstart', () => holdHandler(downButton, minLength, 'touchend'));

upButton.addEventListener('touchstart', () => holdHandler(upButton, maxLength, 'touchend'));
