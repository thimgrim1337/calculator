class Calculator {
  _a = undefined;
  _b = undefined;
  _result = 0;

  static sum = (a, b) => a + b;
  static substract = (a, b) => a - b;
  static multiply = (a, b) => a * b;
  static divide = (a, b) => a / b;

  static operate(a, b, cb) {
    return cb(a, b);
  }
}

class Event {
  static captureInput() {
    this.calcButtons = document.querySelectorAll('button');

    this.calcButtons.forEach((button) =>
      button.addEventListener('click', (e) => {
        console.log(e.target.textContent);
      })
    );
  }

  static init() {
    this.captureInput();
  }
}

Event.init();
