const express = require('express');
const app = express();
app.use(express.json());

const movies = [
    "The Shawshank Redemption",
    "The Godfather",
    "The Dark Knight",
    "Pulp Fiction",
    "Forrest Gump",
    "Inception",
    "The Matrix",
    "Fight Club",
    "The Lord of the Rings: The Return of the King",
    "The Empire Strikes Back"
];

app.get('/search', async(req, res)=> {
    try {
        const {movieName} = req.query;
        if (!movieName) return res.status(400).json({error: 'Movie name is required'});

        const searchResults = movies.filter(movie => movie.toLowerCase() === movieName.toLowerCase());
        if (searchResults.length === 0){
            return res.status(404).json({error: 'Movie not found'});
        }
        else
            return res.status(200).json({movies: searchResults});
    } catch (error) {
        console.error(error);
        return res.status(500).json({error: 'Internat Server Error'});
    }
});

app.post('/addMovie', async(req, res) => {
    try {
        const {newMovie} = req.body;
        if (!newMovie) {
            return res.status(400).json({error: 'Please enter a movie name!'});
        }   
        if (movies.some(movie => movie.toLowerCase() === newMovie.toLowerCase())){
            return res.status(400).json({error: 'Movie already exists'})
        }

        movies.push(newMovie);
        res.status(201).json({message:  `${newMovie} is added sucessfully!`, movies})
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'Internal Server Error'});
    }
});

app.put('/edit-movie', async(req, res) => {
    try {
        const {oldMovie, newMovie} = req.body;
        if(!oldMovie || !newMovie){
            return res.status(400).json({error: 'Please enter the old Movie and the new one'});
        }

        const movieIndex = movies.findIndex(movie => movie.toLowerCase() === oldMovie.toLowerCase());
        if(movieIndex === -1){
            return res.status(404).json({error: 'Old movie is not found'});
        }
        movies[movieIndex] = newMovie;
        res.status(200).json({message: 'Movie is editted successfully', movies})
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'Internal Server Error'});
    }
})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
