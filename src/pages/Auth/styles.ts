import styled from 'styled-components'

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: ${(props) => props.theme.white};

  .authBox {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 5rem;
    }

    .lineOrBox {
      margin-top: 0.5rem;
      font-size: 0.8rem;
      width: 100%;
      max-width: 300px;
      display: flex;
      align-items: center;
      gap: 1rem;

      &::before,
      &::after {
        content: '';
        display: block;
        width: 100%;
        height: 1px;
        background: ${(props) => props.theme['base-placeholder']};
      }
    }
  }
`

export const GoogleButton = styled.button`
  all: unset;
  width: 100%;
  max-width: 300px;
  height: 50px;
  display: flex;
  align-items: center;
  margin-top: 1.5rem;
  gap: 1rem;
  background: ${(props) => props.theme.white};
  border: 1px solid ${(props) => props.theme['base-border']};
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s ease;

  > svg {
    height: 1.4rem;
    margin-left: 1rem;
  }

  &:hover {
    background: ${(props) => props.theme['base-input']};
  }
`
