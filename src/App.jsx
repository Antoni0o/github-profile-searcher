import { createGlobalStyle } from "styled-components";

import Header from "./components/Header.jsx";
import SearchInput from "./components/SearchInput.jsx";
import { variables } from './utils/theme.js';

function App() {
  return (
    <>
      <Globals />
      <Header />
      <SearchInput />
    </>
  );
}

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
  }

  body.light {
    background-color: ${variables.lightBackground};
    color: ${variables.lightText}
  }
`

export default App;
