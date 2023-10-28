import { AuthInputContainer, Input } from './styles'
import { IconProps } from 'phosphor-react'
import { ErrorMessage } from 'formik'

interface AuthInputPros {
  type: 'text' | 'password'
  name: string
  placeholder: string
  icon: IconProps
}

export function AuthInput({ type, name, placeholder, icon }: AuthInputPros) {
  return (
    <AuthInputContainer>
      <div className="inputBox">
        <>{icon}</>
        <Input type={type} name={name} placeholder={placeholder} />
      </div>
      <ErrorMessage className="errorMsg" component="div" name={name} />
    </AuthInputContainer>
  )
}
