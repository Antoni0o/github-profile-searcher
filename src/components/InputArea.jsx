import styled from "styled-components";

import { variables } from "../utils/theme";

const InputArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  form {
    display: flex;
  }
  input {
    outline: none;
    border: 1px solid ${variables.border};
    border-right: none;
    padding: 1.5rem 3rem;

    font-size: 2rem;
    color: ${variables.text};

    background-color: ${variables.background}; 
  }
  input[type=text] {
    border-radius: 1rem 0 0 1rem;
  }
  button[type=submit] {
    transition: .5s ease;
    display: flex;
    align-items: center;
    justify-content: center;

    height: 55px;
    padding: 0.1rem 3rem;

    background-color: ${variables.button};
    border-radius: 0 1rem 1rem 0;
    border: none;
    cursor: pointer;

    font-weight: bold;
    font-size: ${variables.h2};
    color: ${variables.text};

    &:hover {
      filter: brightness(0.8)
    }
  }
`

export default InputArea;