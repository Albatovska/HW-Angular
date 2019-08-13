function fibonacci(num) {
    var arrFibonacci = [0, 1];
    if (num <= 0) {
        throw new RangeError('Error num');
    } else {
        if (num <= 2) {
            return arrFibonacci.slice(0, num);
        } else {
            for (var i = 2; i < num; i++) {
                arrFibonacci.push(arrFibonacci[arrFibonacci.length - 1] + arrFibonacci[arrFibonacci.length - 2]);
            }
            return arrFibonacci;
        }
    }
}

module.exports = {
    fibonacci
}