import styled from 'styled-components'
import { Field } from 'formik'

interface AuthInputProps {
  haserror: boolean
}

export const AuthInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  max-width: 300px;
  margin: 0.5rem 0;

  .inputBox {
    display: flex;
    align-items: center;
  }

  .errorMsg {
    color: ${(props) => props.theme.red};
    margin-top: 0.25rem;
    font-size: 0.9rem;
  }

  svg {
    color: ${(props) => props.theme['base-text']};
    position: absolute;
    left: 1rem;
  }
`

export const Input = styled(Field)<AuthInputProps>`
  width: 100%;
  height: 50px;
  padding: 0 1.5rem 0 3rem;
  border: 1px solid
    ${(props) =>
      props.haserror ? props.theme.red : props.theme['base-border']};
  border-radius: 5px;
  outline: none;
  background-color: ${(props) => props.theme.white};
  color: ${(props) => props.theme['base-text']};
  transition: 0.3s ease;

  &::placeholder {
    color: ${(props) => props.theme['base-placeholder']};
  }

  &:focus,
  &:hover {
    outline: none;
    border-color: ${(props) => props.theme.blue};
    background-color: ${(props) => props.theme.white};
    box-shadow: 0 0 0 5px rgb(47 145 224 / 30%);
  }
`
