import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  /* grid-template-areas:
    "header"
    "description"
    "content"
    "footer"; */
  overflow-y: hidden;

  > main {
    height: 100%;
    grid-area: content;
    overflow-y: auto;
  }
`

export const Description = styled.div`
  grid-area: description;
  padding: 5.2rem 12.4rem;
  display: flex;
  justify-content: space-between;
  

  > h2 {
    font-size: 3.2rem;
    font-weight: 400;
    color: var(--white);
  }

  > a {
    width: 20.8rem;
  }
`

export const Content = styled.div`
  padding: 0 12.4rem;

  footer {
    display: flex;
    gap: 0.8rem;
  }
`
