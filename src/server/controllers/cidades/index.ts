import * as UpdateById from './UpdateById'
import * as DeliteById from './DeliteById'
import * as create  from './Create';
import * as getAll from './GetAll'
import * as getById from './GetByid'



export const CidadesController = {
    ...create,
    ...getAll,
    ...getById,
    ...DeliteById,
    ...UpdateById,
}
