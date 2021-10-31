import styled from 'styled-components'
import { BsGithub } from 'react-icons/bs'

import { variables } from '../utils/theme'

const Header = () => {
  return (
    <LogoWrapper>
      <span><BsGithub /></span>
      <h1>Github Profile Searcher</h1>
    </LogoWrapper>
  )
}

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
  
`

export default Header;