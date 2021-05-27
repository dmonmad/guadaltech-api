import { config } from 'dotenv';
config();

export default {
    mongodbURL: process.env.DB_CONNECT || 'mongodb+srv://guadaltech:2q3jaIHQBvC6tGGW@guadaltech.rodxo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    
};