//Задание 1 
function task1() {
    function showMessage() {
      let message = "Привет, я JavaScript!";
      alert(message); 
    }
  
    showMessage();  
    document.getElementById('task1Result').textContent = "Сообщение выведено."; 
  }
  
//Задание 2 
  function checkPalindrome() {
    const str = document.getElementById('palindromeInput').value.toLowerCase();
    const reversedStr = str.split('').reverse().join('');
    const result = str === reversedStr ? 'Палиндром' : 'Не палиндром';
    document.getElementById('palindromeResult').textContent = `"${document.getElementById('palindromeInput').value}" - ${result}`;
  }

//Задание 3 
  function replaceNegatives() {
    const n = 12; 
    const arr = Array.from({ length: n }, () => Math.floor(Math.random() * 21) - 10); 
  
    const newArr = arr.map(num => num < 0 ? num * num : num);
    document.getElementById('replaceNegativesResult').textContent = `Исходный массив: ${arr.join(', ')}\nНовый массив: ${newArr.join(', ')}`;
  }
  
//Задание 4
  class User {
    constructor(name) {
      this.name = name;
    }
  
    showName() {
      alert(this.name);
    }
  }


  function createUser() {
    const username = document.getElementById('usernameInput').value;
    const user = new User(username);
    user.showName();
    document.getElementById('usernameResult').textContent = `Имя пользователя: ${username}`;
  }
  
//Задание 5
  class Greeter {
    constructor(username) {
      this.username = username;
    }
  
    showMessage() {
      const message = `Привет, ${this.username}!`;
      alert(message);
    }
  }
  
  function showMessageClass() {
    const username2 = document.getElementById('usernameInput2').value;
    const greeter = new Greeter(username2);
    greeter.showMessage();
  }
  
//Задание 6
  class NameReverser {
    constructor(name) {
      this.name = name;
    }
  
    reverse() {
      const reversedName = this.name.split('').reverse().join('');
      document.getElementById('reverseNameResult').textContent = `Перевёрнутое имя: ${reversedName}`;
    }
  }
  
  function reverseName() {
    const name = document.getElementById('nameInput').value;
    const reverser = new NameReverser(name);
    reverser.reverse();
  }

//Задание 7

document.getElementById('runSimulation').addEventListener('click', runSimulation);

class ColorSimulator {
  constructor() {
    this.colors = ["красный", "черный", "белый"];
    this.colorCounts = {};
    this.colorCounts.красный = 0;
    this.colorCounts.черный = 0;
    this.colorCounts.белый = 0;
  }

  simulate(numTrials) {
    const results = [];
    for (let i = 0; i < numTrials; i++) {
      const color = this.colors[Math.floor(Math.random() * 3)];
      results.push(color);
      this.colorCounts[color]++;
    }
    return results;
  }

  findLongestSequence(results) {
    let longestSequenceLength = 0;
    let currentSequenceLength = 0;
    for (let i = 0; i < results.length; i++) {
      if (i === 0 || results[i] === results[i - 1]) {
        currentSequenceLength++;
      } else {
        longestSequenceLength = Math.max(longestSequenceLength, currentSequenceLength);
        currentSequenceLength = 1;
      }
    }
    longestSequenceLength = Math.max(longestSequenceLength, currentSequenceLength); 
    return longestSequenceLength;
  }
}


function runSimulation() {
  const simulator = new ColorSimulator();
  const results = simulator.simulate(1000000);
  const longestSequenceLength = simulator.findLongestSequence(results);
  let colorCounts = simulator.colorCounts;
  let output = `Длина самой длинной последовательности: ${longestSequenceLength}\n`;
  for (let color in colorCounts){
    output += `${color}: ${colorCounts[color]}\n`;
  }

  document.getElementById('simulationResult').textContent = output;
}

