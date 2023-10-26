import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20'; 

import GoogleKey from '../config/key.mjs';

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
