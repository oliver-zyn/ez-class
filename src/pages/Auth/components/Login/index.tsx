import { AuthButton } from '../AuthButton'
import { AuthInput } from '../AuthInput'
import { LoginContainer } from './styles'
import { Lock, User } from 'phosphor-react'
import { Formik, Field } from 'formik'
import * as yup from 'yup'

interface LoginProps {
  changeLoginState: () => void
}

export function Login({ changeLoginState }: LoginProps) {
  const validationSchema = yup.object({
    email: yup
      .string()
      .email('Insira um email válido')
      .required('Insira um email'),
    password: yup
      .string()
      .min(8, 'A senha deve ter pelo menos 8 caracteres')
      .required('Insira uma senha'),
  })

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert('Formulário enviado com sucesso!')
          console.log(values)
          setSubmitting(false)
        }, 500)
      }}
      validationSchema={validationSchema}
    >
      {({ isSubmitting, isValid }) => (
        <LoginContainer>
          <h1>Bem vindo de volta!</h1>
          <Field
            name="email"
            type="email"
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
          <AuthButton isDisabled={isSubmitting || !isValid}>Entrar</AuthButton>
          <p className="signUpText">
            Não possui uma conta?{' '}
            <a className="signUpLink" onClick={changeLoginState}>
              Cadastre-se
            </a>
          </p>
        </LoginContainer>
      )}
    </Formik>
  )
}
