import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import kanjiRoutes from './routes/kanji.js';


const app = express();


//localhost:5000/kanji
app.use('/kanji',kanjiRoutes);


app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

/*Connect to mongodb database*/
const CONNECTION_URL = 'mongodb+srv://user123:123user@cluster0.fd3wz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);