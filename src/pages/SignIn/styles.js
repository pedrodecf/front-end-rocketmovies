import styled from "styled-components"
import backgroundImg from "../../assets/background.png"

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`

export const Form = styled.form`
  margin: 20rem 16rem auto 13rem;
  display: flex;
  flex-direction: column;

  > h1 {
    font-size: 4.8rem;
    font-weight: 700;
    color: var(--primary);
  }

  > p {
    font-size: 1.4rem;
    font-weight: 400;
    color: var(--h2);
  }

  > h2 {
    font-size: 2.4rem;
    font-weight: 500;
    color: var(--white);
    padding: 4.8rem 0;
  }

  > div {
    &:nth-child(4) {
      margin-bottom: 0.8rem;
    }
  }

  > button {
    &:nth-child(6) {
      margin-top: 2.4rem;
      margin-bottom: 4.2rem;
    }
  }

  a {
    &:last-child {
      align-self: center;
    }
  }
`

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center;
  background-size: cover;
`
