import mongoose from "mongoose";

const movieSchema = mongoose.Schema({
    title : String,
    discription : String,
    year : Number,
    poster : String,
    genre : String,
},{collection : 'movies_details' })
const Movies = mongoose.model('Movies', movieSchema);
export default Movies;
