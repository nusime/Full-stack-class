/**Define a function that creates a user object assigns a random amount
   of money between $0 and $50,000. */

export function registration(name, age, occupation) {
    let user = {
        userName: name,
        age: age,
        money: Math.ceil(Math.random() * 50000),
        occupation: occupation
    };
    
    return user;
}


