import { AuthButtonContainer } from './styles'
import { ReactNode } from 'react'

interface AuthButtonProps {
  children: ReactNode
}

export function AuthButton({ children }: AuthButtonProps) {
  return <AuthButtonContainer type="submit">{children}</AuthButtonContainer>
}
