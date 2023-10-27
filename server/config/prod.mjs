// prod.js - prod key's herej

const ProdKeys = {
	googleClientId: process.env.GOOGLE_CLIENT_ID ,
	googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
	mongoURI: process.env.MONGO_URI,
	cookieKey: process.env.COOKIE_KEY
};

export default ProdKeys;

