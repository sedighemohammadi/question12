//! OPTIONAL
// ? Question-1:Using lexical scope, Write a function that displays the following outputs in order:
/**
 * Action
 * Potential
 * Signals
 */
// !Answer:
function display (){
    const array = ['Action' , 'Potential' , 'Signals']
    function inner () {
        array.forEach(item => {
            console.log(item);
            
        })
    }
    inner();
}
display();