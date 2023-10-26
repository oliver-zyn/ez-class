import styled from 'styled-components'

export const AuthInputContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  max-width: 300px;
  margin: 0.5rem 0;

  > input {
    width: 100%;
    height: 50px;
    padding: 0 1.5rem 0 3rem;
    border: 1px solid ${(props) => props.theme['base-border']};
    border-radius: 5px;
    outline: none;
    background-color: ${(props) => props.theme.white};
    color: ${(props) => props.theme['base-text']};
    transition: 0.3s ease;
  }

  > input::placeholder {
    color: ${(props) => props.theme['base-placeholder']};
  }

  > input:focus,
  > input:hover {
    outline: none;
    border-color: ${(props) => props.theme.blue};
    background-color: ${(props) => props.theme.white};
    box-shadow: 0 0 0 5px rgb(47 145 224 / 30%);
  }

  > svg {
    color: ${(props) => props.theme['base-text']};
    position: absolute;
    left: 1rem;
  }
`
