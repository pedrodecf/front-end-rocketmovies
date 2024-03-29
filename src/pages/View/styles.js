import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  /* grid-template-areas:
    "header"
    "info"
    "content"
    "footer"; */
  overflow-y: hidden;

  > div.data {
    height: 100%;
    overflow-y: auto;
  }
`

export const Info = styled.div`
  grid-area: info;
  padding: 4rem 12.4rem 0;

  > div.view-buttons {
    display: flex;
    justify-content: space-between;
  }

  > div.movie-details {
    display: flex;
    align-items: center;
    margin-top: 2.4rem;

    h2 {
      font-size: 3.6rem;
      color: var(--white);
      font-weight: 500;
      margin-right: 2rem;
    }

    div > svg {
      margin-right: 0.8rem;
      width: 2.4rem;
      height: 2.4rem;
    }
  }

  > div.user-details {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    margin-top: 2.4rem;

    img {
      width: 1.6rem;
      height: 1.6rem;
      border-radius: 50%;
      margin-bottom: 2px;
    }

    p {
      font-family: "Roboto", sans-serif;
      color: var(--white);
      font-weight: 400;
      text-align: justify;
    }

    svg {
      color: var(--primary);
      margin-left: 0.8rem;
    }
  }

  > div.tags {
    display: flex;
    gap: 0.8rem;
    margin: 4rem 0;

    div {
      background-color: var(--tags-2);
    }
  }
`

export const Resume = styled.div`
  height: 100%;
  overflow-y: auto;
  padding: 0 12.4rem 0;
  text-align: justify;
  font-size: 1.8rem;
  font-family: "Roboto Serif", serif;
  font-weight: 400;
  line-height: 150%;
  color: var(--white);
`
