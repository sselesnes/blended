// Отримуйте від користувача число (кількість хвилин) через prompt
// і виводьте у консоль рядок у форматі годин та хвилин.
// Приклад: користувач вводить в prompt '70' -> в консолі відобразиться '01:10'.
// Корисне посилання для відображення годин та хвилин у потрібному форматі ('01' замість '1'):
// <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart#examples>

const min = "332";

// const min = prompt(`кількість хвилин`);

// function leftFillNum(num, targetLength) {
//   return num.toString().padStart(targetLength, "0");
// }
// let result = `${leftFillNum(Math.floor(min / 60), 2)}:${leftFillNum(min % 60, 2)}`;

function leftFillNum(num, len) {
  return String(num).padStart(len, "0");
}

const result = `${leftFillNum(Math.floor(min / 60), 2)}:${leftFillNum(min % 60, 2)}`;
console.log(result);
