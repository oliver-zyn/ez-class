import styled from 'styled-components'
import { Form } from 'formik'

export const SignupContainer = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 1.6rem;
    margin: 1rem 0;
  }

  .LoginText {
    font-size: 0.9rem;
    margin: 0.6rem 0 1rem;
  }

  .LoginLink {
    color: ${(props) => props.theme.blue};
    cursor: pointer;
  }
`
