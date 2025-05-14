import express from 'express'
import connectDB from './db.js';
import router from './src/router/movies-routes.js';
import moviesScheema from './src/module/movies-details.js';
import cors from 'cors'
const app = express();
app.use(express.json());
app.use(cors());
app.use('/', router)

try {
    connectDB().then(() => {
        app.listen(3000, () => {
            console.log('The sever is running on PORT 3000')
        })
    }).catch((err) => {
        console.log('database not connected successfully')
    })

} catch (err) {
    console.log(err)
}
