/**In index.js, import the functions from movieCollection.js and movie.js.
Create a few movie objects and add them to the collection.
Display all movies.
Search for movies by genre or director and log the results.
Wrap the main logic in a try-catch block.
 */

import { createMovie } from "./movie.js";
import { addMovie, displayMovies, movieArray, searchMovies } from "./movieCollection.js";

function main(){
    //The movies below are pushed to the array. I did this to ceck if it may add a movie that's already added.
    let titanic = createMovie('Titanic', 'James Cameron', 'Romance, Drama');
    let threeIdiots = createMovie('3 Idiots', 'Rajkumar Hirani', 'Comedy, Drama');
    let redOne = createMovie('Red One', 'Jake Kasdan', 'Action, Adventure, Comedy');

    movieArray.push(titanic);
    movieArray.push(threeIdiots);
    movieArray.push(redOne); // to check the exception.

    let carryOn = createMovie('Carry on', 'Jaume Collet-Serra', 'Thriller');
    let damsel = createMovie('Damsel', ' Juan Carlos Fresnadillo', 'Fantasy, Adventure');
    
    let inception = createMovie('Inception', 'Christopher Nolan');// This line is to show that the 3 parameters are required.
    addMovie(inception);

    addMovie(carryOn);
    addMovie(damsel);
    addMovie(redOne);
    

    console.log('\nDisplaying the movies...\n');
    displayMovies();

    console.log('\nSearched movie result\n');
    searchMovies('Romance, Drama', '');
    searchMovies('', 'Jake Kasdan');
    searchMovies('Action', ''); //checking by adding a genre that's mot added to the array.

}

main();