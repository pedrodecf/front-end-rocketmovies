import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-areas:
    "header"
    "content"
    "footer";
  overflow-y: hidden;

  > main {
    grid-area: content;
    overflow-y: auto;
  }
`

export const Title = styled.div`
  padding: 4rem 12.4rem 0;
  display: flex;
  gap: 2.4rem;
  flex-direction: column;

  > h2 {
    font-size: 3.6rem;
    font-weight: 500;
    color: var(--white);
  }
`

export const Info = styled.div`
  padding: 4rem 12.4rem 0;

  > div {
    display: flex;
    gap: 4rem;
    margin-bottom: 4rem;
  }
`

export const TagsContainer = styled.div`
  padding: 4rem 12.4rem 0;

  > h3 {
    font-size: 2rem;
    font-weight: 400;
    color: var(--note-color);
    margin-bottom: 2.4rem;
  }

  > div {
    height: 8.8rem;
    width: 100%;
    background-color: var(--black);
    border-radius: 0.8rem;
    display: flex;
    gap: 2rem;
    align-items: center;
    padding: 1.6rem;
  }
`

export const ButtonsContainer = styled.div`
  padding: 4rem 12.4rem 0;
  display: flex;
  gap: 6rem;
`
