import express from 'express';
import { Route as authRoute} from './routes/authRoute.mjs';
import { key } from './config/key.mjs';
import mongoose from 'mongoose';
import cookieSession from 'cookie-session';
import passport from 'passport';
import './models/User.mjs'
import './services/passport.mjs'

mongoose.connect(key.mongoURI);

const app = express();

app.use(
	cookieSession({
		//configuration object
		maxAge: 30 * 24 * 60 * 60 * 1000,
		keys: [key.cookieKey]
	})
)
app.use(passport.initialize());
app.use(passport.session());

authRoute(app);

// deployment checklist
// https://feedback-hub-ely6.onrender.com/
// http://localhost:5000/auth/google/callback



// port listening
const PORT = process.env.PORT || 5000;
app.listen(PORT);
