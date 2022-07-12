import * as yup from 'yup'

const passwordRule = '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{5,})';

export const loginVolidateSchema = yup.object().shape({
  email: yup.string().email('Pleas enter valid email').required('Required'),
  password: yup.string().min(5).matches(passwordRule, {message: 'Need stronger password'}).required('Required'),
})
