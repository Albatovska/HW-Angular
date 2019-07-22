
const { Observable: { create }, range, interval, timer} = require('rxjs');
const {reduce, bufferCount, bufferTime, buffer, merge}= require('rxjs/operators');

//1. Имплементировать функцилнал range используя функцию create.

  const publisherRange = create((observable:any) => {
   let i: number = 3,
   count: number = i + 10;
    for(i ; i <= count; i++ ){
    
    observable.next(i);
    
    }
}); 
const subscriberFirst = publisherRange.subscribe(
    (val:number) => {
        console.log(`This is observable value: ${val}`);
    }) 


//2. Имплементировать функционал interval используя функцию create.

  const publisherInterval = create((observable:any) => {
     const timeInterval = 500;
    let i: number = 0;
       setInterval(() =>{
    
    observable.next(i);
     i++;
      if (i > 5) {
            clearInterval(interval);
        }
      }, timeInterval);
    });
const subscriberSecond = publisherInterval.subscribe(
    (val:number) => {
        console.log(`This is observable value: ${val}`);
    });
  

//3. Используя тольк reduce иммплементировать функционал filter.

 const publisherFilter = range (0, 100)
 .pipe(reduce((acc: number, val: number) => {

  if(val % 3 === 0 ) {
       acc += val; 
    console.log(acc)
       
   }

   return acc
    
  
 }, 10))

 const subscriberThird = publisherFilter.subscribe(
    (val:number) => {
        console.log(`This is observable value: ${val}`);
    });


//4. Дан обзервабле interval - 1 tick in 50 msec -> выдавать данные либо 1 раз в 333 сек или же когда накапливается 7 элементов.

 const publisher = interval(500)
 .pipe(bufferCount(7))
.pipe(bufferTime(3330));
 
const subscriber = publisher.subscribe(
    (val: number) => {
        console.log(`This is observable value: ${val}`)
    });
 