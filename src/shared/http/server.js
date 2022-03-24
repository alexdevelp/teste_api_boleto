import express from "express";
import cors from 'cors';
import morgan from 'morgan';
import { errors } from 'celebrate';
import routes from "./routes/index.js";
import AppError from "../errors/AppError.js";

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(( req, res, next) => { 
    res.header('Access-Control-Allow-Methods','*');
    res.header(
        'Access-Control-Allow-Header',
        'X-skip-tls-checking',
        'Access-Control-Max-Age',
        'Origin, X-request With, Content-Type, Accept, Authorization',
    )
    next();
})
app.use(express.json());
app.use(routes);
app.use(errors());

const middle = ( error, req, res, next ) => {
    if (error instanceof AppError) {
        return res.status(error.statusCode).json({
            status: 'error',
            message: error.message,
        });
    }

    return res.status(500).json({
        status: 'error',
        message: 'Internal server error',
    });
}

app.use(middle);

app.listen(8080, () => {
    console.log('Server started on port 8080 | API for code verification')
})