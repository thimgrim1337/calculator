class Calculator {
  static setOperand = (prevOperand, currentOperand) => {
    this.prevOperand = prevOperand;
    this.currentOperand = currentOperand;
    this.reset();
  };

  static appendNumber = (number) => {
    if (number === '.' && this.currentOperand.includes('.')) return;
    this.currentOperand = this.currentOperand.toString() + number.toString();
  };

  static setOperator = (operator) => {
    if (this.currentOperand === '') return;
    if (this.prevOperand !== '') this.operate();
    this.operator = operator;
    this.prevOperand = this.currentOperand;
    this.currentOperand = '';
  };

  static sum = (a, b) => a + b;
  static substract = (a, b) => a - b;
  static multiply = (a, b) => a * b;
  static divide = (a, b) => (b != 0 ? a / b : alert('You cannot divide by 0'));
  static modulo = (a, b) => a % b;

  static operate = () => {
    let result;
    const prev = parseFloat(this.prevOperand);
    const current = parseFloat(this.currentOperand);
    if (isNaN(prev) || isNaN(current)) return;
    switch (this.operator) {
      case '+':
        result = this.sum(prev, current);
        break;
      case '-':
        result = this.substract(prev, current);
        break;
      case '*':
        result = this.multiply(prev, current);
        break;
      case '/':
        result = this.divide(prev, current);
        break;
      case '%':
        result = this.modulo(prev, current);
        break;
    }
    this.currentOperand = result;
    this.prevOperand = '';
    this.operator = undefined;
  };

  static delete = () =>
    (this.currentOperand = this.currentOperand.slice(0, -1));

  static reset = () => {
    this.prevOperand = '';
    this.currentOperand = '';
    this.operator = undefined;
  };
}

class Event {
  static captureEvent = () => {
    this.numberButtons.forEach((button) =>
      button.addEventListener('click', () => {
        Calculator.appendNumber(button.innerText);
        UI.updateDisplay();
      })
    );

    this.operationButtons.forEach((button) =>
      button.addEventListener('click', () => {
        Calculator.setOperator(button.innerText);
        UI.updateDisplay();
      })
    );

    this.equalsButton.addEventListener('click', () => {
      Calculator.operate();
      UI.updateDisplay();
    });

    this.allClearButton.addEventListener('click', () => {
      Calculator.reset();
      UI.updateDisplay();
    });

    this.deleteButton.addEventListener('click', () => {
      Calculator.delete();
      UI.updateDisplay();
    });
  };

  static init = () => {
    this.captureEvent();
  };
}

class UI {
  static getDisplayNumber = (number) => {
    const stringNumber = number.toString();
    const integerDigits = parseFloat(stringNumber.split('.')[0]);
    const decimalDigits = stringNumber.split('.')[1];
    let integerDisplay;
    if (isNaN(integerDigits)) {
      integerDisplay = '';
    } else {
      integerDisplay = integerDigits.toLocaleString('en', {
        maximumFractionDigits: 0,
      });
    }
    if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`;
    } else {
      return integerDisplay;
    }
  };

  static updateDisplay = () => {
    Event.currentOperand.innerText = this.getDisplayNumber(
      Calculator.currentOperand
    );
    if (Calculator.operator != null) {
      Event.prevOperand.innerText = `${this.getDisplayNumber(
        Calculator.prevOperand
      )} ${Calculator.operator}`;
    } else {
      Event.prevOperand.innerText = '';
    }
  };
}

Event.numberButtons = document.querySelectorAll('[data-number]');
Event.operationButtons = document.querySelectorAll('[data-operator]');
Event.equalsButton = document.querySelector('[data-operate]');
Event.deleteButton = document.querySelector('[data-delete');
Event.allClearButton = document.querySelector('[data-clear]');
Event.prevOperand = document.querySelector('.prevOperand');
Event.currentOperand = document.querySelector('.currentOperand');

Calculator.setOperand(Event.prevOperand, Event.currentOperand);

Event.init();
