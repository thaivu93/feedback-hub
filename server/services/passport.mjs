import { Strategy as GoogleStrategy } from 'passport-google-oauth20'; 
import GoogleKey from '../config/key.mjs';
import mongoose from 'mongoose';
import passport from 'passport';

const User = mongoose.model('users');

// create new instance of google passport strategy
// passport.use is a generic command to connect and perform task on database
passport.use(
	new GoogleStrategy({
		clientID: GoogleKey.googleClientId,
		clientSecret: GoogleKey.googleClientSecret,
		callbackURL: "/auth/google/callback",
		}, 
		(accessToken, refreshToken, profile, done) => {
			// this returns promises aka async query
			// check if there is user in the db
			User.findOne({ googleId: profile.id })
				.then((existingUser) => {
					if (existingUser) {
						// we already have record of this user
						done(null, existingUser);
					} else {
						// create a new model instance in mongoose
						new User({ 
							googleId: profile.id
						})
							.save()
							.then(user => done(null, user)); // this save the instance into the database 
					}
				})
		}
));
