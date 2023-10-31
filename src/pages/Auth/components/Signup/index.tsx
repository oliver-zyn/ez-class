import { AuthButton } from '../AuthButton'
import { AuthInput } from '../AuthInput'
import { SignupContainer } from './styles'
import { Lock, User, PersonSimple } from 'phosphor-react'
import { Formik, Field } from 'formik'
import * as yup from 'yup'

interface SignupProps {
  changeLoginState: () => void
}

export function Signup({ changeLoginState }: SignupProps) {
  const validationSchema = yup.object({
    name: yup.string().required('Insira um nome'),
    email: yup
      .string()
      .email('Insira um email válido')
      .required('Insira um email'),
    password: yup
      .string()
      .min(8, 'A senha deve ter pelo menos 8 caracteres')
      .required('Insira uma senha'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], 'As senhas não coincidem')
      .required('Confirme sua senha'),
  })

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
      }}
      onSubmit={async (values) => {
        alert(JSON.stringify(values, null, 2))
      }}
      validationSchema={validationSchema}
    >
      {({ isSubmitting, isValid }) => (
        <SignupContainer>
          <h1>Criar sua conta</h1>
          <Field
            name="name"
            type="text"
            component={AuthInput}
            placeholder="Insira seu nome"
            icon={<PersonSimple size={18} weight="regular" />}
          />
          <Field
            name="email"
            type="text"
            component={AuthInput}
            placeholder="Insira seu email"
            icon={<User size={18} weight="regular" />}
          />
          <Field
            name="password"
            type="password"
            component={AuthInput}
            placeholder="Insira sua senha"
            icon={<Lock size={18} weight="regular" />}
          />
          <Field
            name="confirmPassword"
            type="password"
            component={AuthInput}
            placeholder="Confirme sua senha"
            icon={<Lock size={18} weight="regular" />}
          />
          <AuthButton isDisabled={isSubmitting || !isValid}>
            Cadastrar-se
          </AuthButton>
          <p className="LoginText">
            Já possui uma conta?{' '}
            <a className="LoginLink" onClick={changeLoginState}>
              Entrar
            </a>
          </p>
        </SignupContainer>
      )}
    </Formik>
  )
}
