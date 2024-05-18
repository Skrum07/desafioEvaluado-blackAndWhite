import express from 'express';
import path from 'path';

const __dirname = path.resolve();
const routes = express.Router();




routes.get('/', (req, res) => {
    res.sendFile( __dirname + '/view/index.html');
});

export default routes;