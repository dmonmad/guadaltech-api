import app from "./app";
import './database';

const port = process.env.PORT || 3001;

app.listen(port);

console.log('Server on port ', port);