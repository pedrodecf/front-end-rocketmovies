import styled from "styled-components";

export const Container = styled.button`
    border: none;
    background: none;
    color: ${({ $logout }) => $logout === true ? "var(--input-color)" : "var(--primary)"} ;
    display: flex;
    align-items: center;
`