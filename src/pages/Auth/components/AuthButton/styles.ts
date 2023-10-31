import styled from 'styled-components'

export const AuthButtonContainer = styled.button`
  all: unset;
  margin: 0.5rem 0;
  width: 100%;
  height: 50px;
  max-width: 300px;
  border: 2px solid ${(props) => props.theme.blue};
  border-radius: 5px;
  text-align: center;
  font-weight: 400;
  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme.blue};
  transition: 0.3s ease;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`
