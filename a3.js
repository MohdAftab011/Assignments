//Q1
console.log("A");
setTimeout(() => console.log("B"), 1000);
console.log("C");

//  Output : A
//           C
//           B

//Q2
setTimeout(() => {
    console.log("A");
    setTimeout(() => console.log("B"), 1000);
}, 1000);
console.log("C");
//  Output : C
//           A
//           B

//Q3
setTimeout(() => console.log("A"), 3000);
setTimeout(() => console.log("B"), 2000);
setTimeout(() => console.log("C"), 1000);
//  Output : C
//           B
//           A

//Q4
console.log("A");
setTimeout(() => console.log("B"), 0);
console.log("C");
//  Output : A
//           C
//           B

//Q5 ****
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1000);
}

// Output : 3 3 3

//Q6
setTimeout(() => {
    console.log("A");
    setTimeout(() => {
        console.log("B");
        setTimeout(() => console.log("C"), 500);
    }, 1000);
}, 1500);

//  Output : A
//           B
//           C

//Q7
console.log("A");
setTimeout(() => console.log("B"), 1000);
for(let i = 0; i < 1000000000; i++) {}  // Long loop
console.log("C");
//  Output : A
//           C
//           B

//Q8
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), i * 1000);
}
//Output : 3 3 3

//Q9
for (var i = 0; i < 3; i++) {
    setTimeout((j) => {
        console.log(j);
        setTimeout(() => console.log(j + 1), 1000);
    }, i * 2000, i);
}
//Output : 0 1 1 2 2 3

//Q10
setTimeout(() => console.log("A"), 2500);
for (let i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log("B" + i);
        setTimeout(() => {
            console.log("C" + i);
        }, i * 500 + 500);
    }, i * 1000);
}
//Output : B0
//         C0
//         B1
//         B2
//         C1
//         A
//         C2


//Q11
function first(callback) {
    setTimeout(() => {
        console.log("first");
        callback();
    }, 500);
}
function second() {
    console.log("second");
}
first(second);
//Output : first second

//Q12
let count = 0;
setTimeout(() => console.log(count++), 1000);
setTimeout(() => console.log(count++), 2000);
setTimeout(() => console.log(count++), 3000);

//Output : 0 1 2

//Q13
for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1000 * i);
}

//Output : 0 1 2

//Q 14
for (var i = 0; i < 3; i++) {
    (function(j) {
        setTimeout(() => console.log(j), 2000 * j);
    })(i);
}
//Output : 0 1 2

//Q15
console.log("1");
setTimeout(() => {
    console.log("2");
    setTimeout(() => console.log("3"), 1000);
}, 2000);
setTimeout(() => console.log("4"), 1000);
console.log("5");

//Output : 1 5 4 2 3



           

