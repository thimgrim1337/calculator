class Calculator {
  constructor() {}
}

class Event {
  static captureEvent = () => {};
}

Event.numberButtons = document.querySelectorAll('[data-number]');
Event.operationButtons = document.querySelectorAll('[data-operator]');
Event.equalsButton = document.querySelector('[data-operate]');
Event.deleteButton = document.querySelector('[data-cancel');
Event.allClearButton = document.querySelector('[data-clear]');
Event.prevOperand = document.querySelector('.prevOperand');
Event.currentOperand = document.querySelector('.currentOperand');
