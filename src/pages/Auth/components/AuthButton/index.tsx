import { AuthButtonContainer } from './styles'
import { ReactNode } from 'react'

interface AuthButtonProps {
  children: ReactNode
  isDisabled: boolean
}

export function AuthButton({ children, isDisabled }: AuthButtonProps) {
  return (
    <AuthButtonContainer type="submit" disabled={isDisabled}>
      {children}
    </AuthButtonContainer>
  )
}
