//Q1
let promise = Promise.resolve(3);
promise.then(value => console.log(value));
//  Output : 3

//Q2
let promise1 = new Promise((resolve, reject) => {
    resolve("Success!");
  });
  promise1.then(value => console.log(value));
//  Output : Success!


//Q3
Promise.reject('Error occurred').catch(err => console.log(err));
//  Output : Error occurred


//Q4
let promise3 = Promise.resolve(1);
promise3.then(value => value + 2).then(value => console.log(value));
//  Output : 3


//Q5 
Promise.resolve("Resolved").then(console.log);
Promise.reject("Rejected").catch(console.log);

// Output : Resolved  Rejected

//Q6
let promise4 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Resolved!"), 1000);
  });
  promise4.then(value => console.log(value));
  console.log("After promise");

//  Output : After promise
//           Resolved


//Q7
Promise.resolve(2)
  .then(value => value * 2)
  .then(value => Promise.resolve(value * 2))
  .then(value => console.log(value));
//  Output : 8


//Q8
Promise.reject('Initial Error')
  .catch(err => { throw new Error('New Error'); })
  .catch(err => console.log(err.message));
//Output : New Error

//Q9
async function asyncFunction() {
    return 4;
  }
asyncFunction().then(console.log);
//Output : 4

//Q10
let promise5 = Promise.resolve(Promise.resolve('Resolve'));
promise5.then(res => console.log(res));
//Output : Resolve



//Q11
let promise6 = Promise.resolve('First');
let promise7 = Promise.resolve('Second');
Promise.race([promise6, promise7]).then(value => console.log(value));
//Output : First

//Q12
let promise8 = new Promise((resolve, reject) => {
    throw new Error('Error thrown');
  });
  promise8.catch(error => console.log(error.message));

//Output : Error thrown

//Q13
async function asyncFunc() {
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("Done!"), 1000);
    });
    let result = await promise;
    console.log(result);
  }
  asyncFunc();
  console.log("After async function");

//Output : After async function  
//         Done!

//Q 14
Promise.all([
    Promise.resolve('Promise 1'),
    Promise.reject('Promise 2'),
    Promise.resolve('Promise 3')
  ]).then(console.log).catch(console.log);
//Output : Promise 2

//Q15
let promise9 = new Promise((resolve, reject) => {
    resolve('Promise resolved');
    reject('Promise rejected');
  });
  promise9.then(console.log).catch(console.log);

//Output : Promise Resolved



           

