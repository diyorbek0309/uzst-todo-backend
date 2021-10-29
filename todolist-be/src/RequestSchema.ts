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
      id: Joi.string().required(),
      message: Joi.string().min(2).required(),
      completed: Joi.boolean(),
    }),
  }),
  update: Joi.object().keys({
    params: Joi.object().keys({
      id: Joi.string().regex(/^[0-9a-fA-F]{24}$/),
    }),
    body: Joi.object().keys({
      id: Joi.string(),
      message: Joi.string().min(2),
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
