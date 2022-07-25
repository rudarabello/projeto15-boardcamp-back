import joi from 'joi';


export const categoryModel = joi.object({
    name: joi.string().required()
});