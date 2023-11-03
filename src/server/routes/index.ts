
import {Router} from 'express';
import {StatusCodes} from 'http-status-codes'

import { CidadesController } from './../controllers'


const router = Router();


router.get('/', (req, res) => {

    return res.send('tu é gay cara!')
})


// router.get('/cidades', CidadesController.getAll);



router.post('/cidades', CidadesController.create);





router.put('/', (req, res) => {

    return res.send('tu é gay cara!')
})





router.delete('/', (req, res) => {

    return res.send('tu é gay cara!')
})


export {router}