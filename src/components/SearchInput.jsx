import styled from "styled-components";
import { BsSearch } from 'react-icons/bs'

import { variables } from "../utils/theme";

const SearchInput = () => {
  return (
    <InputArea>
      <input type="text" name="search" id="search" placeholder="Search the profile here" />
      <button type="submit"><BsSearch /></button>
    </InputArea>
  )
}

const InputArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 24em;
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
    display: flex;
    align-items: center;
    justify-content: center;

    height: 55px;
    padding: 0.1rem 3rem;

    background-color: ${variables.button};
    border-radius: 0 1rem 1rem 0;
    border: none;

    font-weight: bold;
    font-size: ${variables.h2};
    color: ${variables.text};
  }
`

export default SearchInput;