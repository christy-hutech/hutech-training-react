import * as yup from "yup"

export const userSchema = yup.object().shape({
    name: yup.string().required(),
    message: yup.string().required(),
})
