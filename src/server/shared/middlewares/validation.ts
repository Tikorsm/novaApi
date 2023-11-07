import { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";
import { AnyObject, Maybe, ObjectSchema, ValidationError } from "yup";


type TProperty = 'body' | 'header' | 'params' | 'query';

type TGetSchema = <T extends Maybe<AnyObject>>(Schema: ObjectSchema<T>) => ObjectSchema<T>;

type TAllSchemas = Record<TProperty, ObjectSchema<any>>;

type TGetAllSchema = (getSchema: TGetSchema) => Partial<TAllSchemas>;

type TValidation = (getAllSchema: TGetAllSchema) => RequestHandler;



export const validation: TValidation = (getAllSchema) => async (req, res, next) => {

    const Schemas = getAllSchema((Schema ) => Schema);
    
    const errorsResult: Record<string, Record<string, string>> = {};

    Object.entries(Schemas).forEach(([key, Schema]) => {
    try {
        Schema.validateSync(req[key as TProperty], { abortEarly: false });
    }
    catch (err) {
        const yupError = err as ValidationError;
        const errors: Record<string, string> = {};

        yupError.inner.forEach(error => {
            if (error.path === undefined) return;
            errors[error.path] = error.message;
        })
        
        errorsResult[key] = errors;
    }
    
});

if(Object.entries(errorsResult).length === 0){
 return next();
}else{
 return res.status(StatusCodes.BAD_REQUEST).json({ errors: errorsResult })
}

};