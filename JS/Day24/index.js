// Closure: A function that remembers variables from its outer scope even after the outer function has finished executing.
// function createCounter() {
//     let count = 0;
//     function increment() {
//         count++;
//         return count;
//     }
//     return increment;
// }

// const counter = createCounter();
// console.log(counter());
// console.log(counter());
// console.log(counter());

// Real use case of Closure function
// function createBankAccount() {
//     let balance = 500;
//     return {
//         deposit: function (amount) {
//             if (typeof amount === "number" && amount > 0) {
//                 balance += amount;
//                 console.log(`${amount} deposited`);
//             }
//         },
//         withdraw: function (amount) {
//             if (typeof amount === "number" && amount > 0) {
//                 balance -= amount;
//                 console.log(`${amount} withdrawn`);
//             }
//         },
//         getBalance: function () {
//             return balance;
//         }
//     }
// }
//  const customer=createBankAccount();
//  customer.deposit(150);
// console.log(customer.getBalance());
// customer.withdraw(250);
// console.log(customer.getBalance());


// High order function
// function high(){
//     return function print(){
//         console.log('printing something');
//     }
// }
// const execute= high();
// execute()



