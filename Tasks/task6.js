/**Create a function  findNumber that takes an array of numbers and a target number
   The function should loop through the array.
   If the target number is found , log the index and exit the loop using break.
   If the current number is divisible by 3, skip the current iteration using continue.
   Log "target not found" if the loop completes without finding the target 
 */

function findNumber(){
    let arrayNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    let target = 5;
    for (let i = 0; i<arrayNumber.length; i++){
        if (arrayNumber[i] === target){
            console.log('Target number = ', arrayNumber[i]);
            break;
        }
        else if (arrayNumber[i] % 3 === 0)
            continue;
        else if (arrayNumber[i] != target)
            console.log('target not found')
    }
}

findNumber();