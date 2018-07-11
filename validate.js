const Joi = require('joi');

const schema = Joi.object({
  name: Joi.string()
    .min(1)
    .max(100)
    .required(),
  container: Joi.string()
    .valid(['clients'])
    .default('clients'),
  path: Joi.string()
    .min(1)
    .required(),
});

const obj = {
  // name: 'Felipe Campos',
  path: 'src/image.png',
};

const result = Joi.validate(obj, schema);
console.log(result.error);
