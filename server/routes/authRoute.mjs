import passport from "passport";

// ROUTING
//
// access '/auth/google' directs to a login page of google, redirect to
// '/auth/google/callback' with a code (used to authenticate login)

function Route(app) {
	app.get('/auth/google',
		passport.authenticate('google', {
			scope: ['profile', 'email']
		}),
	);


	// passport redirected into auth
	app.get('/auth/google/callback', passport.authenticate('google'));
}

export { Route }
