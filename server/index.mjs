import express from 'express';
import './services/passport.mjs'
import { Route as authRoute} from './routes/authRoute.mjs';

const app = express();

authRoute(app)

// deployment checklist
// https://feedback-hub-ely6.onrender.com/
// http://localhost:5000/auth/google/callback



// port listening
const PORT = process.env.PORT || 5000;
app.listen(PORT);
