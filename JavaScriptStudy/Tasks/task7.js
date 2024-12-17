/**Create a function called printPattern that takes a single paramater n.
   Use nested  loops to print a pattern of stars (*) where each row has an increasing numer of stars.
 */

function printPattern(n){
    for(let i = 0; i<= n; i++){
        let stars = '';
        for(let j = 0; j<i; j++){
            stars += '*';
        }
        console.log(stars);
    }
}

printPattern(5);