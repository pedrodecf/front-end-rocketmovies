import styled from "styled-components"

export const Container = styled.header`
  display: grid;
  grid-area: header;
  align-items: center;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 6.4rem;
  width: 100%;
  background-color: var(--background);
  border-bottom: 0.1rem solid var(--border);
  padding: 2rem 12.4rem;
`

export const Logo = styled.div`
  justify-self: start;

  > a {
    font-size: 2.4rem;
    font-weight: 700;
    color: var(--primary);
  }
`
export const Search = styled.div`
  justify-self: center;
  width: 64rem;
`
export const User = styled.div`
  display: flex;
  align-items: center;
  justify-self: end;

  > div {
    display: grid;
    flex-direction: column;
    display: flex;
    align-items: end;

    > a {
      text-align: end;
      font-size: 1.8rem;
      color: var(--white);
      font-weight: 700;
      cursor: pointer;
    }
  }

   a > img {
    width: 6.4rem;
    height: 6.4rem;
    border-radius: 50%;
    border: 0.2rem solid var(--border);
    margin-left: 1.4rem;
    cursor: pointer;
  }
`
