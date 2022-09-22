import * as Yup from "yup"

export const validateInput = Yup.object({
    name: Yup.string()
        .required("Name is required")
        .max(200, "Name too Long"),
    rollno: Yup.number()
        .required("Roll no is required")
        .min(1, "Invalid Roll no."),
    email: Yup.string()
        .required("Email is required")
        .email("Invalid email")
});