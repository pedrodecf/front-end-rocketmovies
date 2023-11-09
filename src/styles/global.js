import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`

    :root {
        --background: #1C1B1E;
        --background-2: rgba(255, 133, 155, 0.05);
        --input: #262529;
        --input-color: #948F99;
        --note-color: #999591;
        --primary: #FF859B;
        --h2: #CAC4CF;
        --white: #F4EDE8;
        --tags-1: #312E38;
        --tags-2: #282124;
        --border: #3E3B47;
        --black: #0D0C0F;

        font-size: 62.5%;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: var(--background);
    }

    body, button, input, textarea {
        font-family: 'Roboto Slab', serif;
        font-size: 1.6rem;
    }

        a {
        text-decoration: none;
    }

    button, a {
        cursor: pointer;
        transition: filter 0.2s;
    }

    button:hover, a:hover {
        filter: brightness(0.9);
    }    

    textarea:focus, input:focus{
    outline: none;
}
  * {
    scrollbar-width: 0.6rem;
    scrollbar-color: #8f54a0 #ffffff;
  }

  *::-webkit-scrollbar {
    width: 0.6rem;
    height: 0.6rem;
  }

  *::-webkit-scrollbar-track {
    background: none;
  }

  *::-webkit-scrollbar-thumb {
    background-color: var(--primary);
    border-radius: 1rem;
    border: none;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type=number] {
  appearance: textfield;
} 
`
