import express from 'express';
import path from 'path';
import Jimp from 'jimp';
import { v4 as uuidv4 } from 'uuid';

const __dirname = path.resolve();
const routes = express.Router();


routes.get('/styles', (req, res) => 
    res.sendFile(__dirname + '/assets/css/style.css'),)
 
routes.get('/', (req, res) => {
    res.sendFile( __dirname + '/view/index.html');
});

routes.post('/editar', async(req, res) => {

    const imagen = req.body.URL
    const id = uuidv4().slice(-5)
    const nombreImagen = `${id}.jpg`
    const img = await Jimp.read(imagen)
    await img
    .resize(350, Jimp.AUTO)
    .greyscale()
    .writeAsync(__dirname + `/assets/uploads/${nombreImagen}.jpg`)
 
    res.sendFile(__dirname + `/assets/uploads/${nombreImagen}.jpg`)

});
export default routes;