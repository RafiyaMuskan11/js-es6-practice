// javascript ES6 features

// let keyword
let myname = "rafiya";
console.log(myname);
 
// let does not allow us to declare a variable twice like var keyword
// but it can be re-assigned

myname = "rafiyamuskan";
console.log(myname);

// const keyword - we can declare Read-only variable with const keyword
// it can neither be declared twice nor re-assigned
 
const name = "rafiyamuskan";
console.log(name);

 /* wrong const code -can not be declared twice

        const word = "hi";
        const word = "hello"           */

/* wrong const code - can not be re-assigned 
   
   const name1 = "rafiya";
   name1 = "rafiyamuskan";
   console.log(name1);    */


// arrow function - used to write concise anonymous function.
// 1st way
var add = (a,b) =>{
    // sum=0;
    sum= a+b;
    return sum;
}
console.log(add(2,4));

// 2nd way
var sum = (a,b) => a+b;
console.log(sum(3,4));

// default parameters - using default parameters in functions
var sum = (i,j=5) => i-j;
console.log(sum(8,4)); 
// output= 8-4=4;
console.log(sum(8,));
// output= 8-5=3;


// template literals

const id = {
    first: "rafiya",
    second: "muskan",
    greet: "pleased to meet you"
};

const intro = `Hello my name is ${id.first} ${id.second} ${id.greet}!`;
console.log(intro);

// destructuring of object

/*const details ={
    firstname: 'rafiya',
    secondname:'muskan',
    age: '21',
    place:'banglore'
};
const {firstname , secondname,age,place} = details;
console.log(age);*/

const movie = {
    mname: 'avatar',
    released:'2009',
    director:'james'
};
const {mname, released, director } = movie;
console.log(name);

