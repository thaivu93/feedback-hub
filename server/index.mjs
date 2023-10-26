import express from 'express';
import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20'; 

import GoogleKey from './config/key.mjs';


const app = express();

// create new instance of google passport strategy
// passport.use is a generic command
passport.use(
	new GoogleStrategy({
		clientID: GoogleKey.googleClientId,
		clientSecret: GoogleKey.googleClientSecret,
		callbackURL: "/auth/google/callback",
		}, 
		(accessToken, refreshToken, profile, done) => {
			//log the accessToken
			console.log(accessToken);
			console.log(refreshToken);
			console.log(profile);
		}
));

// deployment checklist
// https://feedback-hub-ely6.onrender.com/
// http://localhost:5000/auth/google/callback

// ROUTING
// access '/auth/google' directs to a login page of google, redirect to
// '/auth/google/callback' with a code (used to authenticate login)
app.get('/auth/google',
	passport.authenticate('google', {
		scope: ['profile', 'email']
	}),
);


// passport redirected into auth
app.get('/auth/google/callback', passport.authenticate('google'));



// port listening
const PORT = process.env.PORT || 5000;
app.listen(PORT);
