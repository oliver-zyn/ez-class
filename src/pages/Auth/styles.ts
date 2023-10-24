import styled from 'styled-components'

export const AuthContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: ${(props) => props.theme.blue};

  div.authBox {
    background: ${(props) => props.theme.white};
    padding: 4rem;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.03);
    border-radius: 0.4rem;
    text-align: center;

    img {
      width: 5rem;
    }

    h1 {
      font-size: 1.6rem;
      padding: 1rem 0;
    }

    div.buttonsBox {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
      padding-top: 2.5rem;

      button {
        all: unset;
        width: 100%;
        border-radius: 4px;
        padding: 1rem;
        text-transform: uppercase;
        font-weight: 600;
        border: 2px solid ${(props) => props.theme.blue};
        cursor: pointer;
      }

      button.sigupBtn {
        background: ${(props) => props.theme.blue};
        color: ${(props) => props.theme.white};
      }
    }
  }
`
