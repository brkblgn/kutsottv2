import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import path from "path";
import expressLayouts from 'express-ejs-layouts';

import viewRoutes from './routes/index.js'
import recordRoutes from './routes/record.js';
import testRoutes from './routes/testData.js';


dotenv.config({ path: './.env.local' });

const app = express();

// Static Files
const dirname = path.resolve(path.dirname(''));
app.use(express.static('public'));
app.use('/img', express.static( dirname + '/public/img' ));

// EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

// Bodyparser
app.use(express.json({ limit: "30mb", extended: true}));
app.use(express.urlencoded({ limit: "30mb", extended: true}));

// Logger
app.use(morgan('dev'));

// Cors Policy
app.use(cors());

//Routes
app.use('/', viewRoutes);
app.use('/record', recordRoutes);
app.use('/test', testRoutes);

// Get PORT
const PORT = process.env.PORT || 81;


// Connect to Mongo && Run Server
mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server Running on ${PORT}`)))
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);
