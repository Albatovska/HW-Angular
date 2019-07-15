var _a = require('rxjs'), create = _a.Observable.create, range = _a.range, interval = _a.interval;
var _b = require('rxjs/operators'), reduce = _b.reduce, bufferCount = _b.bufferCount, bufferTime = _b.bufferTime, merge = _b.merge;
//1. Имплементировать функцилнал range используя функцию create.
/* const publisher = create((observable) => {
    let i = 3;
    let count= i+ 10;
    for(i ; i < count; i++ ){
    
    observable.next(i);
    
    }
}); */
//2. Имплементировать функционал interval используя функцию create.
/* const publisher = create((observable) => {
    let count= 0;
    let i = 1;
    const interval = setInterval(() =>{
    
    observable.next(`This is next interation ${i}`);
    i++;
     if (i > 5) {
            clearInterval(interval);
        }
    }, 500)
});
 */
//3. Используя тольк reduce иммплементировать функционал filter.
/* const publisher = range (0, 100)
.pipe(reduce((acc, val) => {

 if(val % 3 === 0 ) {
      acc = val;
   console.log(acc)
      
  }
 
  return acc
   
 
}, 10))

*/
//4. Дан обзервабле interval - 1 tick in 50 msec -> выдавать данные либо 1 раз в 333 сек или же когда накапливается 7 элементов.
var publisher1 = interval(100).pipe(bufferTime(333));
var publisher2 = interval(100).pipe(bufferCount(7));
var publisher = publisher1.pipe(merge(publisher2));
var subscriber = publisher.subscribe(function (val) {
    console.log("This is observable value: " + val);
}, function (err) {
    console.log("Error appears " + err.message);
}, function () {
    console.log('FINISHED');
});
setTimeout(function () { return subscriber.unsubscribe(); }, 5000);
