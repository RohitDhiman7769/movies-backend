import connectDB from '../../db.js';
import Movies from '../module/movies-details.js';

export const getMoviesDetalis = async (req, res) => {
  try {
    const moviesData = await Movies.find(); 
    console.log('Fetched Movies:', moviesData);

    return res.status(200).json({
      status: 200,
      message: 'Data Fetched Successfully',
      data: moviesData,
    });

  } catch (err) {
   console.log(err)
  }
};
