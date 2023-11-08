
import { Request,  Response  } from "express";

import * as yup from 'yup';
import { validation } from "../../shared/middlewares";
import { StatusCodes } from "http-status-codes";


interface IParamProps {
    id?: number;
}

interface IBodyProps {
    nome: string;
}


export const UpdateByIdValidation = validation((getSchema) => ({
    body: getSchema<IBodyProps>(yup.object().shape({
        nome: yup.string().required().min(3),
    })),
    params: getSchema<IParamProps>(yup.object().shape({
        id: yup.number().integer().required().moreThan(0),
    })),
}));


export const UpdateById = async (req: Request<IParamProps, {}, IBodyProps>, res: Response) => {
    if(Number(req.params.id) === 99999) return res.status(StatusCodes.INTERNAL_SERVER_ERROR ).json({ 
        
        errors: {
        default: 'Registro não econtrado'
    }
});
     
    return res.status(StatusCodes.NO_CONTENT).send();
}