import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 22.4rem;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  justify-content: center;
  align-items: flex-start;
  padding: 3.2rem;
  border-radius: 1.6rem;
  background-color: var(--background-2);
  margin-bottom: 2.4rem;
  cursor: pointer;

  > h1 {
    color: var(--white);
    font-size: 2.4rem;
    font-weight: 700;
  }

  > p {
    color: var(--note-color);
    font-family: 3.6rem;
    font-weight: 400;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  > div.rating-stars {
    display: flex;
  }
`
