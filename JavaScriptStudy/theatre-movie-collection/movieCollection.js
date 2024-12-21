/**In movieCollection.js, create an empty array to store movie objects.
Write a function addMovie(movie) to add a movie to the collection.
Write a function displayMovies() to list all movies in the collection.
Write a function searchMovies(genre, director) to find movies by genre or director.
Use try-catch blocks in all functions for error handling. */

export let movieArray = [];
export function addMovie(movie){

    try {
        
        for(let existingMovie of movieArray){
            if(existingMovie.title === movie.title && existingMovie.director === movie.director){
                console.log('Ooops the movie is already in your collection');
                return;
            } 
            
        }

        movieArray.push(movie);
        console.log(`Movie ${movie.title} is added successfully`);
        
    } catch (error) {
        console.error('There is sth wrong',error.message);
    }
}
    

export function displayMovies(){

    try {
        
        if(movieArray.length === 0){
            console.log('No movie in ur collection')
            return;
        }
        
       
        movieArray.forEach(movie =>{
            console.log(`Movie: ${movie.title}, ${movie.director}, ${movie.genre}`);
        });
        
    

    } catch (error) {
        console.error('Error in displaying',error.message)     
    }
}

export function searchMovies(genre, director){

    try {
            const searchResults = movieArray.filter(movie => {
                return movie.genre === genre || movie.director === director;
            });

            if(searchResults.length === 0){
                console.log('Oops found no match');
                return [];
            }

            
            searchResults.forEach(movie => {
                console.log(`Movie: ${movie.title}, ${movie.director}, ${movie.genre}`);
            });

            return searchResults;

                 
        } catch (error) {
            console.error('Check your connection', error.message);
        }
}
