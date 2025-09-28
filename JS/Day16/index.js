let user='Aayush'
let age=20
 age=50  //value is not changed but the age is now pointing to value 50 20 is still there in memory
const height=163
height=165
console.log(user , age)
console.log(height)

// Data Types

// Primitive Data Types are immutable
// number, string, boolean, undefined, null, bigint, symbol

//number
let a=10
let b=2.36
console.log(a,b)

// string
let c="Strike is coming"
let d="Stay tuned!"
console.log(c,d)


// boolean
let e= true
let f= false
console.log(e,f)

// undefined
let users;
console.log(users)

// bigint
let num=4587587651585487518745n;
console.log(num)

// null
let weather=null
console.log(weather)

// symbol
let login=Symbol('activated')
console.log(login)


// Non-Primitve Data Types are mutable
// array, object, function

// array
let arr=[45, 57, 'rohit', 25, true]
console.log(arr)

// object
let obj={
    name:'aayush',
    age:22,
    account:1212,
    sex:'M',
}
console.log(obj)

// function
let s=function print(){
    console.log("Hello World")
}
s()
print();
console.log(typeof print())