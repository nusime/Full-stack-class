/** Import the registerUser function and the car objects.
    Register a user, check which cars they can afford and display the results. */

import  {registration}  from "./registration.js";    
import { chevroletCamaro, fordMustang, hondaCivic, teslaModel3, toyotaCorolla } from "./cars.js";

function main(){
    let user = registration('Amar', 30,'Software developer');
    console.log(user);
    let income = user.money;
    if(income >= 40000){
        console.log('The user can afford the following cars: '
            , toyotaCorolla, fordMustang, teslaModel3, hondaCivic, chevroletCamaro);
    } else if(income >= 35000 && income < 40000){
        console.log('The user can afford the following cars: '
            , toyotaCorolla, fordMustang, hondaCivic, chevroletCamaro);
    } else if(income >= 30000 && income < 35000){
        console.log('The user can afford the following cars: '
            , toyotaCorolla, fordMustang, hondaCivic);
    } else if(income >= 22000 && income < 30000){
        console.log('The user can afford the following cars: '
            , toyotaCorolla, hondaCivic);
    } else if(income >= 20000 && income < 22000){
        console.log('The user can afford the following cars: ', toyotaCorolla);
    } else {
        console.log('The user can not afford any of the cars');
    }
}

main();
