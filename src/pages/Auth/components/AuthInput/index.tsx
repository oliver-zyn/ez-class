import { AuthInputContainer } from './styles'
import { IconProps } from 'phosphor-react'

interface AuthInputPros {
  type: 'text' | 'password'
  placeholder: string
  icon: IconProps
}

export function AuthInput({ type, placeholder, icon }: AuthInputPros) {
  return (
    <AuthInputContainer>
      <>{icon}</>
      <input type={type} placeholder={placeholder} />
    </AuthInputContainer>
  )
}
