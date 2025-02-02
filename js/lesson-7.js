// Напишіть функцію getNumbers(min, max), що приймає 2 параметри -
// мінімальне і максимальне число відповідно.
// Напишіть цикл всередині функції, який виводить у консоль
// всі числа від max до min за спаданням.

// Окрім цього, підрахуйте суму всіх парних чисел в цьому циклі
// і поверніть її з функції.

function getNumbers(min, max) {
    let twins = 0;
    for (let calc = max; calc >= min; calc--) {
        console.log(calc);
        if (calc % 2 == 0) {
            twins += calc;
        }
    }
    return twins;
}

console.log(getNumbers(5, 28));