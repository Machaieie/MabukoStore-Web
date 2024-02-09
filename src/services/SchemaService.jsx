import * as yup from "yup"

const REQUIRED_FIELD_MESSAGE = "Campo obrigatório";
const INVALID_PASSWORD_MESSAGE = "A senha deve conter letras e numeros";

const loginRules = yup.object({
  password: yup
    .string()
    .required(REQUIRED_FIELD_MESSAGE),

  username: yup.string().required(REQUIRED_FIELD_MESSAGE)
});

const authorSchema = yup.object({
  name: yup.string().required(REQUIRED_FIELD_MESSAGE).min(3, "o nome deve ter no mínimo 3 caracteres"),
  biography: yup.string().required(REQUIRED_FIELD_MESSAGE).min(10, "A biografia deve ter no mínimo 10 caracteres"),
  nationality: yup.string().required(REQUIRED_FIELD_MESSAGE),

})

const publisherSchema = yup.object({
  name:  yup.string().required(REQUIRED_FIELD_MESSAGE).min(3, "o nome deve ter no mínimo 3 caracteres"),
  location: yup.string().required(REQUIRED_FIELD_MESSAGE),
  phone: yup.string().required(REQUIRED_FIELD_MESSAGE),
  nuit: yup.string().required(REQUIRED_FIELD_MESSAGE),
})

const bookSchema = yup.object({
  title: yup.string().required(REQUIRED_FIELD_MESSAGE),
  gender: yup.string().required(REQUIRED_FIELD_MESSAGE),
  edition: yup.string().required(REQUIRED_FIELD_MESSAGE),
  price: yup.string().required(REQUIRED_FIELD_MESSAGE),
})

const promotionSchema = yup.object({
  promotionPrice: yup.string().required(REQUIRED_FIELD_MESSAGE),
})


const userSchema = yup.object({
 
  username: yup.string().min(3, "O usuário deve ter pelo menos 3 dígitos").required(REQUIRED_FIELD_MESSAGE),
  password: yup
    .string()
    .transform((x) => (x === "" ? undefined : x))
    .required(REQUIRED_FIELD_MESSAGE)
    .min(6, "A senha deve ter no mínimo 6 caracteres")
    .matches(
      /^(?=.*[0-9])(?=.*[a-zA-Z])(?=\S+$).{6,20}$/,
      INVALID_PASSWORD_MESSAGE
    ),
  confirmPassword: yup.string()
    .required(REQUIRED_FIELD_MESSAGE)
    .oneOf([yup.ref('password'), null], 'As senhas devem ser iguais'),
  nuit: yup.string().required(REQUIRED_FIELD_MESSAGE),
  name: yup.string().required(REQUIRED_FIELD_MESSAGE),
});

export {
  loginRules,
  authorSchema,
  publisherSchema,
  userSchema, 
  bookSchema,
  promotionSchema
}