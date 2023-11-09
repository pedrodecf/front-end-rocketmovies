import styled from "styled-components"

export const Container = styled.textarea`
  width: 100%;
  height: 27.4rem;
  padding: 1.8rem 2.4rem;
  resize: none;
  display: flex;
  border-radius: 1rem;
  background-color: var(--input);
  color: var(--white);
  font-size: 1.4rem;
  font-weight: 400;
  border: none;
  width: 100%;

  &::placeholder {
    color: var(--input-color);
  }
`
