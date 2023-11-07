
import { Router } from 'express';

import { CidadesController } from './../controllers'

const router = Router();


router.get('/cidades', CidadesController.getAllValidation, CidadesController.getAll);

router.post('/cidades', CidadesController.createValidation, CidadesController.create);



export { router }