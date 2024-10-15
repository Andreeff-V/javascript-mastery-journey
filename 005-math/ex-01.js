
console.log(Math.floor(11 / 4));

console.log(11 % 4);
console.log(Math.round(11 / 4));
// Примеры использования объекта Math

// Константы
console.log(`Значение числа Пи (π): ${Math.PI}`);
// основание натурального логарифма
console.log(`Значение числа e: ${Math.E}`);

// Основные функции Math
console.log(`Абсолютное значение -10: ${Math.abs(-10)}`);
console.log(`Квадратный корень из 16: ${Math.sqrt(16)}`);
console.log(`2 в степени 3: ${Math.pow(2, 3)}`);
console.log(`Округление вверх 4.3: ${Math.ceil(4.3)}`);
console.log(`Округление вниз 4.7: ${Math.floor(4.7)}`);
console.log(`Округление 4.5: ${Math.round(4.5)}`);
console.log(`Округление 4.4: ${Math.round(4.4)}`);
console.log(`Псевдослучайное число от 0 до 1: ${Math.random()}`);
// (0, 1]
// (1, 3); [1, 7]; (1, 5]; [2, 66)
// Тригонометрические функции
console.log(`Синус угла π радиан: ${Math.sin(Math.PI)}`);
console.log(`Косинус угла π радиан: ${Math.cos(Math.PI)}`);
console.log(`Тангенс угла π/4 радиан: ${Math.tan(Math.PI / 4)}`);

// Логарифмические функции
console.log(`Натуральный логарифм числа e: ${Math.log(Math.E)}`);
console.log(`Десятичный логарифм числа 100: ${Math.log10(100)}`);

// Прочие функции
console.log(`Минимальное число из (1, 2, 3): ${Math.min(1, 2, 3)}`);
console.log(`Максимальное число из (1, 2, 3): ${Math.max(1, 2, 3)}`);

let minutes = 4669
let hour = Math.floor(minutes / 60)
console.log(hour)


let fahrenheit = 100

let celsius = (5 / 9) * (fahrenheit - 32)
console.log(celsius);

let a1 = Number.isNaN(0 / 0);

let a2 = Number.isNaN(NaN);

let a3 = isNaN(0 / 0);

let a4 = Number.isNaN("NaN");

let a5 = Number.isNaN(undefined);
console.log(a1, a2, a3, a4, a5);
