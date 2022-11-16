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
    this.operator = operator;
    console.log(this.operator);
  };

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
      })
    );
  };

  static init = () => {
    this.captureEvent();
  };
}

class UI {
  static updateDisplay = () =>
    (Event.currentOperand.innerText = Calculator.currentOperand);
}

Event.numberButtons = document.querySelectorAll('[data-number]');
Event.operationButtons = document.querySelectorAll('[data-operator]');
Event.equalsButton = document.querySelector('[data-operate]');
Event.deleteButton = document.querySelector('[data-cancel');
Event.allClearButton = document.querySelector('[data-clear]');
Event.prevOperand = document.querySelector('.prevOperand');
Event.currentOperand = document.querySelector('.currentOperand');

Calculator.setOperand(Event.prevOperand, Event.currentOperand);

Event.init();
