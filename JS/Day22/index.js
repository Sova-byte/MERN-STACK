//Function in Javascript


// function greeting(){
//     console.log("Hello Coder Army");
//     return 10;
// }

// function add(num1, num2, num3=0, num4=0){
//     const res= num1+num2+num3+num4;
//     console.log(res);
// }

// greeting();
// console.log(greeting)
// console.log(greeting());


// Rest Operator
// function add(...num){
//     let res=0;
//     for(let n of num){
//         res+=n;
//     }
//     console.log(res);
// }

// add(2,3)
// add(2,3,4)
// add(2,3,4,5)
// add(2,3,4,5,6)

// Difference between rest and spread operator

// const arr=[10,20,30,40,50];
//use of rest operator to catch individual values of arr (30 40 50)
// const [first,second,...num]=arr;
// console.log(num)

// use of spread operator to break down array into individual values then push it to arr2
// const arr2=[15,25,...arr]
// console.log(arr2)


// Second way to declare function in JS
// function: expression

// const addition= function(num1, num2){
//     return num1+num2;
// }

// console.log(addition(5,6));


// Arrow function (so much implementation)
// const add= (num1,num2)=>{
//     return num1+num2;
// }

// console.log(add(5,6));

// no need return keyword and curly braces
// const add = (num1, num2) => num1 + num2;
// if you have only single parameter no need for ()
// const square = num1 => num1*num1;

// console.log(add(5, 6));
// console.log(square(12));


// Arrow function return object
// const details = () => ( { name: 'Aayush', age: 22})
//      {
//     return {
//         name: 'Aayush',
//         age: 22,
//         address: 'haridwar'
//     }

// }
// console.log(details())

//IIFE Immediately Invoked Function
// (function greeting(){
//     console.log('Namaste Bharat')
// })();

// Arrow function IIFE
// (()=>{
//     console.log('Namaste Bharat');
// })()

// Callback function: reusable function passed as an argument
// Heart of Javascript and React

// function greet(){
//     console.log('Greeting Bharat');
// }

// function dance(){
//     console.log('Dancing with Bharat');
// }

// function meet(Callback){
//     console.log('Exploring Bharat');
//     Callback();
//     console.log('Pleasure to meet you Bharat');
// }

// meet(greet);
// meet(dance);

// Real use case of callback function 

// function blinkitorderPlaced() {
//     console.log('blinkit is preparing your food')
// }
// function zomatoorderPlaced() {
//     console.log('zomato is preparing your food')
// }

// function payment(amount, callback) {
//     console.log(`${amount} payment has initialized`)
//     console.log('Payment received');
//     callback();

// }

// payment(240,zomatoorderPlaced);
// payment(149,blinkitorderPlaced);