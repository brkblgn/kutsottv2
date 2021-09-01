import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';

import recordRoutes from './routes/record.js';
import testRoutes from './routes/testData.js';


dotenv.config({ path: './.env.local' });

const app = express();

app.use(express.json({ limit: "30mb", extended: true}));
app.use(express.urlencoded({ limit: "30mb", extended: true}));

app.use(morgan('dev'));

app.use(cors());

app.use('/record', recordRoutes);
app.use('/test', testRoutes);

const PORT = process.env.PORT || 81;

mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server Running on ${PORT}`)))
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);
