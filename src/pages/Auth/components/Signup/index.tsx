import { AuthButton } from '../AuthButton'
import { AuthInput } from '../AuthInput'
import { SignupContainer } from './styles'
import { Lock, User, PersonSimple } from 'phosphor-react'
import { Formik } from 'formik'
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
      .min(8, 'A senha deve ter pelo menos 8 caracteres')
      .required('Insira uma senha'),
  })

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
        confirmPassoword: '',
      }}
      onSubmit={async (values) => {
        alert(JSON.stringify(values, null, 2))
      }}
      validationSchema={validationSchema}
    >
      <SignupContainer>
        <h1>Criar sua conta</h1>
        <AuthInput
          type="text"
          placeholder="Nome"
          name="name"
          icon={<PersonSimple size={18} weight="regular" />}
        />
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
        <AuthInput
          type="password"
          placeholder="Confirmar senha"
          name="confirmPassword"
          icon={<Lock size={18} weight="regular" />}
        />
        <AuthButton>Cadastrar-se</AuthButton>
        <p className="LoginText">
          Já possui uma conta?{' '}
          <a className="LoginLink" onClick={changeLoginState}>
            Entrar
          </a>
        </p>
      </SignupContainer>
    </Formik>
  )
}
