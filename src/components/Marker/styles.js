import styled from "styled-components"

export const Container = styled.div`
  height: 5.6rem;
  background-color: ${({ $isnew }) =>
    $isnew ? "transparent" : "var(--input)"};
  color: ${({ $isnew }) => ($isnew ? "var(--input-color)" : "var(--white)")};
  border: ${({ $isnew }) =>
    $isnew ? "2px dashed var(--input-color)" : "none"};
  font-family: "Roboto", sans-serif;
  font-size: 1.6rem;
  font-weight: 400;
  padding: 0 1.6rem;
  border-radius: 0.8rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;


  > input {
    color: var(--white);
    background-color: transparent;
    border: none;
  }

  > button {
    border: none;
    background: none;
    display: flex;
    justify-content: center;
    align-items: center;

    > svg {
      color: var(--primary);
    }
  }
`
