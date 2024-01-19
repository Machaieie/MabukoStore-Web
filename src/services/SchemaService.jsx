import * as yup from "yup"

const REQUIRED_FIELD_MESSAGE = "Campo obrigatório";
const INVALID_PASSWORD_MESSAGE = "A senha deve conter letras e digitos";

const loginRules = yup.object({
    password: yup
      .string()
      .transform((x) => (x === "" ? undefined : x))
      .required(REQUIRED_FIELD_MESSAGE)
      .min(6, "A senha deve ter no mínimo 6 caracteres")
      .matches(
        /^(?=.*[0-9])(?=.*[a-zA-Z])(?=\S+$).{6,20}$/,
        INVALID_PASSWORD_MESSAGE
      ),

      username: yup.string().min(3, "O usuário deve ter pelo menos 3 dígitos").required(REQUIRED_FIELD_MESSAGE)
  });


  export {
    loginRules,
  }