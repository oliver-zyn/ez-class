import { AuthContainer } from './styles'
import logoImg from '../../assets/logoIcon.svg'

export function Auth() {
  return (
    <AuthContainer>
      <div className="authBox">
        <img src={logoImg} alt="" />
        <h1>Dive anywhere you want!</h1>
        <p>Running out of breath is not a problem</p>
        <div className="buttonsBox">
          <button className="sigupBtn">Signup</button>
          <button className="loginBtn">Login</button>
        </div>
      </div>
    </AuthContainer>
  )
}
