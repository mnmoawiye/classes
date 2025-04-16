
const output = document.getElementById('output');
const buttons = document.getElementById('buttons');

function log(text) {
  output.textContent += text + "\n";
}

function clearLog() {
  output.textContent = '';
}

const problems = [
  function problem1() {
    class Calculator {
      add(x, y) {
        return x + y;
      }
      subtract(x, y) {
        return x - y;
      }
    }
    const calc = new Calculator();
    log("Add: " + calc.add(10, 5));
    log("Subtract: " + calc.subtract(10, 5));
  },

  function problem2() {
    class Person {
      setName(name) {
        this.name = name;
      }
      getName() {
        return this.name;
      }
    }
    const user = new Person();
    user.setName("Masoud");
    log("Name: " + user.getName());
  },

  function problem3() {
    class Bird {
      fly() {
        log("Flying");
      }
    }
    class Penguin extends Bird {
      fly() {
        log("Penguins can't fly");
      }
    }
    const genericBird = new Bird();
    const penguin = new Penguin();
    genericBird.fly();
    penguin.fly();
  },

  function problem4() {
    class Shape {
      describe() {
        log("I'm a shape");
      }
    }
    class Circle extends Shape {
      describe() {
        log("I'm a circle");
      }
    }
    class Square extends Shape {
      describe() {
        log("I'm a square");
      }
    }
    const c = new Circle();
    const s = new Square();
    c.describe();
    s.describe();
  },

  function problem5() {
    class Employee {
      work() {
        log("Working...");
      }
    }
    class Manager extends Employee {
      hireEmployee() {
        log("Employee hired");
      }
    }
    const mgr = new Manager();
    mgr.work();
    mgr.hireEmployee();
  }
];

problems.forEach((fn, index) => {
  const btn = document.createElement('button');
  btn.textContent = `Run Problem ${index + 1}`;
  btn.addEventListener('click', () => {
    clearLog();
    fn();
  });
  buttons.appendChild(btn);
});
