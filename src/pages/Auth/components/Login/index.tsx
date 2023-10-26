import { AuthButton } from '../AuthButton'
import { AuthInput } from '../AuthInput'
import { LoginContainer } from './styles'
import { Lock, User } from 'phosphor-react'

interface LoginProps {
  changeLoginState: () => void
}

export function Login({ changeLoginState }: LoginProps) {
  return (
    <LoginContainer>
      <h1>Bem vindo de volta!</h1>
      <AuthInput
        type="text"
        placeholder="Usuário"
        icon={<User size={18} weight="regular" />}
      />
      <AuthInput
        type="password"
        placeholder="Senha"
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
  )
}
