import styled from "styled-components";

import { variables } from "../../utils/theme";

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: -2rem;
  margin-bottom: 2rem;

  span {
    font-size: 164px;
    margin-bottom: -0.2em;
  }

  h1 {
    font-size: ${variables.h1};
  }
  
  @media(max-width: 1024px) {
    text-align: center;
  }
`

export default LogoWrapper;