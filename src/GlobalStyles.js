import { createGlobalStyle } from "styled-components"

import { variables } from "./utils/theme"

const Globals = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 62.5%
  }

  body {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background-color: ${variables.background};

    font-family: 'Roboto', sans-serif;
    color: ${variables.text};
    h1 {
      font-size: ${variables.h1};
    }
    h2 {
      font-size: ${variables.h2};
    }
    h3 {
      font-size: ${variables.h3};
    }
    p {
      font-size: ${variables.p};
    }
    .errorTimeout {
      display: none;
    }
  }

  body.light {
    background-color: ${variables.lightBackground};
    color: ${variables.lightText}
  }

  @media(max-width: 1024px) {
    height: 100%;
    * {
      font-size: 50%;
    } 
    body {
      overflow-y: scroll;
      overflow-x: hidden;
      width: 100vw;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
    }
  }
`

export default Globals; 