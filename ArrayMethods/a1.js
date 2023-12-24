// Q1
function CustomMap(arr,cb){
    let result = [];
    for(let i=0;i<arr.length;i++){
        result.push(cb(arr[i],i,arr));
    }
    return result;
}

const arr = [1,3,4,5,8];

CustomMap(arr,function cb(element){
    console.log(element*element);
})

//Q2
const numbers = [1, -2, 3, -4, 5];
const positives = numbers.filter(n => n >= 0);
console.log(positives);

//Q3
const arrays = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const result = arrays.map(arr => arr.filter(num => num % 2 === 0));
console.log(result);

//Q4
const Arrw = [2, 4, 5, 6, 8, 10];

const result1 = Arrw.reduce(function (acc, CurrVal) {
    return acc + CurrVal*CurrVal;
}, 0);

console.log(result1);

//Q5
let sum = 0;
const number = [1, 2, 3, 4, 5];
number.forEach((num, index) => {
if (index % 2 === 0) sum += num;
});
console.log(sum);

//Q6 we need to provide object which have length property or should be iterable
const arrayLike = { length: 5 };
const newArray = Array.from({ length: arrayLike.length },(v, i) => i);
console.log(newArray);

//Q7

const Data = [
    {name : 'Ronaldo',value : 120},
    {name : 'Amrabat',value : 65},
    {name : 'messi', value : 110},
    {name : 'akanji',value : 90},
    {name : 'alvarez', value : 103} 
];

const FinalValue = Data.filter(item => (item.name[0]==='a')|| (item.name[0]==='A')).reduce(function (acc,CurrValue){
    return acc+ CurrValue.value;
},0);
console.log(FinalValue);

//Q8
const numb = [1, 2, 3, 4, 5];
const result2 = numb.reduce((acc, curr) => {
if (curr % 2 === 0) {
acc.even.push(curr);
} else {
acc.odd.push(curr);
}
return acc;
}, { odd: [], even: [] });
console.log(result2);

//Q9
const ArrayLike = {0: 'a', 1: 'b', 2: 'c', length: 3};

const Final = Array.from({length : ArrayLike.length},(c,index) => ArrayLike[index]);

console.log(Final);
//Q10
const Number2 = [1,2,3,4,5];

Number2.forEach(function (num,idx,array){
    array[idx]= num*2;
});

console.log(Number2);

