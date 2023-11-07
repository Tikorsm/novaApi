
import { Router } from 'express';

import { CidadesController } from './../controllers'

const router = Router();


router.get('/cidades', CidadesController.getAllValidation, CidadesController.getAll);
router.get('/cidades/:id', CidadesController.getAllValidation, CidadesController.getById);
router.delete('/cidades/:id', CidadesController.deleteByIdValidation, CidadesController.deleteById);
router.put('/cidades/:id', CidadesController.UpdateByIdValidation, CidadesController.UpdateById);
router.post('/cidades', CidadesController.createValidation, CidadesController.create);




export { router }