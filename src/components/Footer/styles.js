import styled from "styled-components"

export const Container = styled.footer`
  display: grid;
  grid-area: footer;
  align-items: end;
  justify-content: end;
  height: 2rem;
  width: 100%;
  margin: 2rem 0;
  padding-right: 12.4rem;
  font-size: 1.4rem;
  position: relative;
  bottom: 0;
  left: 0;

  > p {
    color: var(--white);
    margin-bottom: 2rem;

    > a,
    svg {
      color: var(--primary);
      font-weight: 500;
    }

    > svg {
      margin-bottom: -0.3rem;
    }
  }
`
