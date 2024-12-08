//? Question-4:Explain these things in the new EcmaScript standard with examples. (Explain in the form of an example.)
// todo:Using const, let instead of var
var a = 10;
if(true){
    var a = 20 ;
    console.log(a);   //------->20
}
console.log(a);   //-------->20
//-----------------------------------
let b = 10 ;
if(true){
    let b = 20 ;
    console.log(b); //----------->20
}
console.log(b); //------------>10
//------------------------------------
//به const نمی توانیم یک مقدار جدید بدهیم.

// todo:arrow function
function multi(a , b) {
    return a * b ;
} // معمولی 
const multipl = (a , b) => a* b ;
console.log(multi(5 , 10 ));
console.log(multipl(5 , 10));   //arrow function



// todo:template string instead of "" and ''
const fname = "sedighe"
const favorite = "boxing"
const sentence = `hello! my name is ${fname} and my favorite hobby is ${favorite}`;
console.log(sentence);

// todo:destructuring
const numbers = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10]
const [one , two , three , ...rest] = numbers
console.log(three);
console.log(rest);


