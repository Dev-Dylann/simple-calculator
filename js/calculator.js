const screen = document.querySelector(`#screen`);
const preview = document.querySelector(`#preview`);
const buttons = document.querySelectorAll(`.button`);

buttons.forEach((e) => {
  e.onclick = () => {
    if (e.id == `clear`) {
      screen.value = emptyScreen();
    } else if (e.id == `backspace`) {
      screen.value = backSpace();
    } else if (e.id == `equals` && screen.value != ``) {
      screen.value = calculate();
    } else {
      screen.value += e.id;
    }
  };
});

const emptyScreen = () => {
  return ``;
};

const backSpace = () => {
  let length = screen.value.length;
  let backed = screen.value.slice(0, length - 1);
  return backed;
};

const calculate = () => {
  try {
    eval(screen.value);
  } catch (error) {
    error = `Syntax Error`;
    return error;
  }

  return eval(screen.value);
};
