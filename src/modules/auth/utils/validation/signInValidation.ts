import * as Yup from "yup";

export const signInValidation = Yup.object().shape({
    usernameOrEmail: Yup.string().required("O nome de usuário ou email é obrigatório!"),
    password: Yup.string().min(6, "A senha deve conter pelo menos 6 caracteres").required("A senha é obrigatória!")
})