/**In movie.js, write a function createMovie(title, director, genre) 
   that returns an object representing a movie.
   Ensure the function is wrapped in a try-catch block to handle errors. */


export function createMovie(title, director, genre){
    try {
        if(!title || !director || !genre){
            throw new Error('The three parameters are required check that you have added (title, director, genre)');
        }
        let movie = {
            title: title,
            director: director,
            genre: genre
        }; 
            return movie;
        } catch (error) {
            console.error('Error in creating movie',error.message);
        }
    }

