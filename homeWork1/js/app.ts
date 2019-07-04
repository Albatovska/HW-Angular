//Определить переменные для всех примитивом джавасткрипта

let num: number = 1;
let str: string = 'string';
let b1: boolean = true;
let obj: object = {};
const arrayOfString: string[] = ['hello', 'world'];
const arrayOfNumbers: Array < number > = [1, 2, 3, 4, 5, 6];
const arr: [number, boolean, string] = [1, true, 'str'];

//Написать функцию принимающую число и возвращающую его факториал 
//по всем правилам тайпскрипта

function factorial(num: number): any{
    let rezult: number = num;
    if( num < 0){
        return console.log('err')
    } else {
        for (let i: number = rezult - 1; i >= 1; i--){
        rezult *= i;
      };
    };
    return rezult
};

console.log(factorial(5));

// Написать функцию принимающую число и 
//возврашающую массив с числами фибоначи до этого порядкового числа

function fibonacchi(num: number): any {
    let rezult: number[] = [0, 1];
    if( num <= 0){
        return console.log('err')
    } else
    if (num <= 2) {
        return rezult.slice(0, num);
    } else {
        for (let i: number = 2; i < num; i++) {
            rezult.push(rezult[rezult.length - 1] + rezult[rezult.length - 2]);
        }
        return rezult
    }
}
console.log(fibonacchi(9));

