import { AuthButton } from '../AuthButton'
import { AuthInput } from '../AuthInput'
import { SignupContainer } from './styles'
import { Lock, User, PersonSimple } from 'phosphor-react'

interface SignupProps {
  changeLoginState: () => void
}

export function Signup({ changeLoginState }: SignupProps) {
  return (
    <SignupContainer>
      <h1>Criar sua conta</h1>
      <AuthInput
        type="text"
        placeholder="Nome"
        icon={<PersonSimple size={18} weight="regular" />}
      />
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
      <AuthInput
        type="password"
        placeholder="Confirmar senha"
        icon={<Lock size={18} weight="regular" />}
      />
      <AuthButton>Cadastrar-se</AuthButton>
      <p className="signUpText">
        Já possui uma conta?{' '}
        <a className="signUpLink" onClick={changeLoginState}>
          Entrar
        </a>
      </p>
    </SignupContainer>
  )
}
