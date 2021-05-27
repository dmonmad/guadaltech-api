import morgan from 'morgan';
import express, { json } from 'express';
import cors from 'cors';
import errorHandler from 'errorhandler';
import dotenv from 'dotenv';
import routes from "./routes/routes";

dotenv.config();
const app = express();


//Middle

//Chhecking if json is valid
app.use((err, req, res, next) => {
    try {
        JSON.parse(req.body);
    } catch (err) {
        if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
            return res.sendStatus(400); // Bad request
        }
    }

    next();
});
app.use(cors());
app.use(morgan('dev'));
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

//routes
app.use('/api', routes);

app.use(errorHandler);

export default app;