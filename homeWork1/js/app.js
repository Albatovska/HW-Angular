//Определить переменные для всех примитивом джавасткрипта
var num = 1;
var str = 'string';
var b1 = true;
var obj = {};
var arrayOfString = ['hello', 'world'];
var arrayOfNumbers = [1, 2, 3, 4, 5, 6];
var arr = [1, true, 'str'];
//Написать функцию принимающую число и возвращающую его факториал 
//по всем правилам тайпскрипта
function factorial(num) {
    var rezult = num;
    if (num < 0) {
        return "\u041D\u0435\u0432\u0435\u0440\u043D\u043E\u0435 \u0447\u0438\u0441\u043B\u043E";
    }
    else if (num === 0) {
        return rezult = 1;
    }
    else {
        for (var i = rezult - 1; i >= 1; i--) {
            rezult *= i;
        }
        ;
    }
    ;
    return rezult;
}
;
console.log(factorial(10));
// Написать функцию принимающую число и 
//возврашающую массив с числами фибоначи до этого порядкового числа
function fibonacchi(num) {
    var rezult = [0, 1];
    if (num <= 0) {
        return "\u041D\u0435\u0432\u0435\u0440\u043D\u043E\u0435 \u0447\u0438\u0441\u043B\u043E";
    }
    else if (num <= 2) {
        return rezult.slice(0, num);
    }
    else {
        for (var i = 2; i < num; i++) {
            rezult.push(rezult[rezult.length - 1] + rezult[rezult.length - 2]);
        }
        return rezult;
    }
}
console.log(fibonacchi(-1));
