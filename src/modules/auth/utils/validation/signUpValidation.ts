import * as Yup from "yup";

export const signUpValidation = Yup.object().shape({
    name: Yup.string(),
    username: Yup.string().required("O nome de usuário é obrigatório!"),
    email: Yup.string().email("Insira um email válido!").required("O email é obrigatório!"),
    password: Yup.string().min(6, "A senha deve conter pelo menos 6 caracteres").required("A senha é obrigatória"),
    confirmPassword: Yup.string().min(6, "A senha deve conter pelo menos 6 caracteres").oneOf([Yup.ref('password')], "As senhas não correspondem").required("A senha é obrigatória"),
})