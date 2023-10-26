import styled from 'styled-components'

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 1.6rem;
    margin: 1rem 0;
  }

  .signUpText {
    font-size: 0.9rem;
    margin: 0.6rem 0 1rem;
  }

  .signUpLink {
    color: ${(props) => props.theme.blue};
    cursor: pointer;
  }
`
