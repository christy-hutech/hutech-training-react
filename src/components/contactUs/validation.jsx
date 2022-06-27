import * as yup from "yup"

export const userSchema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().required(),
    options: yup.string().required(),
    phone: yup.string().required(),
    message: yup.string().required(),
})
