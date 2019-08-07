var _a = require('rxjs'), create = _a.Observable.create, range = _a.range, interval = _a.interval, timer = _a.timer;
var _b = require('rxjs/operators'), reduce = _b.reduce, bufferCount = _b.bufferCount, bufferTime = _b.bufferTime, buffer = _b.buffer, merge = _b.merge;
//1. Имплементировать функцилнал range используя функцию create.
var publisherRange = create(function (observable) {
    var i = 3, count = i + 10;
    for (i; i <= count; i++) {
        observable.next(i);
    }
});
var subscriberFirst = publisherRange.subscribe(function (val) {
    console.log("This is observable value: " + val);
});
//2. Имплементировать функционал interval используя функцию create.
var publisherInterval = create(function (observable) {
    var timeInterval = 500;
    var i = 0;
    setInterval(function () {
        observable.next(i);
        i++;
        if (i > 5) {
            clearInterval(interval);
        }
    }, timeInterval);
});
var subscriberSecond = publisherInterval.subscribe(function (val) {
    console.log("This is observable value: " + val);
});
//3. Используя тольк reduce иммплементировать функционал filter.
var publisherFilter = range(0, 100)
    .pipe(reduce(function (acc, val) {
    if (val % 3 === 0) {
        acc += val;
        console.log(acc);
    }
    return acc;
}, 10));
var subscriberThird = publisherFilter.subscribe(function (val) {
    console.log("This is observable value: " + val);
});
//4. Дан обзервабле interval - 1 tick in 50 msec -> выдавать данные либо 1 раз в 333 сек или же когда накапливается 7 элементов.
var publisher = interval(500)
    .pipe(bufferCount(7))
    .pipe(bufferTime(3330));
var subscriber = publisher.subscribe(function (val) {
    console.log("This is observable value: " + val);
});
