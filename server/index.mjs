import express from 'express';
import { Route as authRoute} from './routes/authRoute.mjs';
import { MongoDb } from './config/key.mjs';
import mongoose from 'mongoose';
import './models/User.mjs'
import './services/passport.mjs'

mongoose.connect(MongoDb.mongoURI);

const app = express();

authRoute(app);

// deployment checklist
// https://feedback-hub-ely6.onrender.com/
// http://localhost:5000/auth/google/callback



// port listening
const PORT = process.env.PORT || 5000;
app.listen(PORT);
