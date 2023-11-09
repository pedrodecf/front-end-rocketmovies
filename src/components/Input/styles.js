import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 5.6rem;
  padding: 1.8rem 2.4rem;
  display: flex;
  border-radius: 1rem;
  background-color: var(--input);
  display: flex;
  align-items: center;
  justify-content: center;

  > input {
    color: var(--white);
    font-size: 1.4rem;
    font-weight: 400;
    background: none;
    border: none;
    width: 100%;

    &::placeholder {
      color: var(--input-color);
    }
  }

  svg {
    color: var(--input-color);
    margin-right: 1.2rem;
    font-size: 2rem;
  }
`
