import * as Yup from 'yup'




export const validationSchema = Yup.object({
    name: Yup.string()
        .required('please enter name'),
    email: Yup.string()
        .email('Invalid email address')
        .required('please enter email'),
    password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('please enter password'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('please enter confirm password')
});
