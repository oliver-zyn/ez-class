import { AuthButton } from '../AuthButton'
import { AuthInput } from '../AuthInput'
import { LoginContainer } from './styles'
import { Lock, User } from 'phosphor-react'
import { Formik } from 'formik'
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
      onSubmit={async (values) => {
        alert(JSON.stringify(values, null, 2))
      }}
      validationSchema={validationSchema}
    >
      <LoginContainer>
        <h1>Bem vindo de volta!</h1>
        <AuthInput
          type="text"
          placeholder="Email"
          name="email"
          icon={<User size={18} weight="regular" />}
        />
        <AuthInput
          type="password"
          placeholder="Senha"
          name="password"
          icon={<Lock size={18} weight="regular" />}
        />
        <AuthButton>Entrar</AuthButton>
        <p className="signUpText">
          Não possui uma conta?{' '}
          <a className="signUpLink" onClick={changeLoginState}>
            Cadastre-se
          </a>
        </p>
      </LoginContainer>
    </Formik>
  )
}
