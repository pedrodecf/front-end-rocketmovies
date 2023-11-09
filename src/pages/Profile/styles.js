import styled from "styled-components"

export const Container = styled.div`
  > footer {
    position: fixed;
    bottom: 0;
    right: 0;
  }

  > header {
    width: 100%;
    height: 14.4rem;
    background-color: var(--background-2);
    position: absolute;
    display: flex;
    align-items: center;
    padding: 0 12.4rem;
    font-size: 1.6rem;
    font-weight: 400;
  }
`

export const Form = styled.form`
  width: 34rem;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  gap: 0.8rem;

  position: relative;
  top: 50px;

  > p {
    text-align: center;
    color: var(--input-color);
    font-size: 1.8rem;
    margin: 1rem 0 2rem;
  }

  :nth-child(5) {
    margin-top: 2.4rem;
  }
  :nth-child(7) {
    margin-top: 2.4rem;
  }
`

export const Avatar = styled.div`
  width: 18.6rem;
  height: 18.6rem;
  margin: 0 auto 2.4rem;
  position: relative;

  > img {
    border-radius: 50%;
    width: 18.6rem;
    height: 18.6rem;
  }

  > label {
    width: 48px;
    height: 48px;
    background-color: var(--primary);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 7px;
    right: 7px;
    cursor: pointer;

    input {
      display: none;
    }

    svg {
      width: 20px;
      height: 20px;
      color: var(--background);
    }
  }
`
