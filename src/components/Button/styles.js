import styled from "styled-components"

export const Container = styled.button`
  width: 100%;
  height: 4.8rem;
  border-radius: 0.8rem;
  background-color: ${({ $delete }) =>
    $delete ? "var(--black)" : "var(--primary)"};
  color: ${({ $delete }) => ($delete ? "var(--primary)" : "var(--black)")};
  font-size: 1.6rem;
  font-weight: 400;
  border: none;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
`
