import Joi from "joi";

interface TypeSchema {
  getOne: Joi.Schema<any>;
  create: Joi.Schema<any>;
  update: Joi.Schema<any>;
  delete: Joi.Schema<any>;
}

const schema: TypeSchema = {
  getOne: Joi.object().keys({
    params: Joi.object().keys({
      id: Joi.string().regex(/^[0-9a-fA-F]{24}$/),
    }),
  }),
  create: Joi.object().keys({
    body: Joi.object().keys({
      id: Joi.number().required(),
      message: Joi.string().min(4).required(),
      completed: Joi.boolean(),
    }),
  }),
  update: Joi.object().keys({
    params: Joi.object().keys({
      id: Joi.string().regex(/^[0-9a-fA-F]{24}$/),
    }),
    body: Joi.object().keys({
      id: Joi.number().required(),
      message: Joi.string().min(4).required(),
      completed: Joi.boolean(),
    }),
  }),
  delete: Joi.object().keys({
    params: Joi.object().keys({
      id: Joi.string().regex(/^[0-9a-fA-F]{24}$/),
    }),
  }),
};

export default schema;
