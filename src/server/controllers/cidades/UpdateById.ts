
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
    console.log(req.params);
    console.log(req.body);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('mm perereca!');
}