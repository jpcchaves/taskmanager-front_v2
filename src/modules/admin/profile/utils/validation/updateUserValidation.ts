import * as Yup from "yup";

export const updateUserValidation = Yup.object().shape({
  name: Yup.string().nullable(),
  currentPassword: Yup.string()
    .min(6, "A senha deve conter pelo menos 6 caracteres")
    .required("A senha é obrigatória!"),
  password: Yup.string()
    .min(6, "A senha deve conter pelo menos 6 caracteres")
    .required("A senha é obrigatória!"),
});
