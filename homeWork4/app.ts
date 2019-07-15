const { Observable: { create }, range, interval } = require('rxjs');
const {reduce, bufferCount, bufferTime, merge}= require('rxjs/operators');
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


const publisher1 = interval(100).pipe(bufferTime(333))
    
const publisher2 = interval(100).pipe(bufferCount(7))

const publisher = publisher1.pipe(merge(publisher2))

const subscriber = publisher.subscribe(
    (val) => {
        console.log(`This is observable value: ${val}`);
    },
    (err) => {
        console.log(`Error appears ${err.message}`);
    },
    () => {
        console.log('FINISHED')
     
    }
    );
    setTimeout(() => subscriber.unsubscribe(), 5000);
 