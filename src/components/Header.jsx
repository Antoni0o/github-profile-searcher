import styled from 'styled-components'
import { BsGithub } from 'react-icons/bs'


const Header = () => {
  return (
    <LogoWrapper>
      <h2><BsGithub /></h2>
      <h1>Github Profile Searcher</h1>
    </LogoWrapper>
  )
}

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: -6rem;

  h2 {
    font-size: 248px;
    margin-bottom: -0.2em;
  }

  h1 {
    font-size: 4.8rem;
  }
  
`

export default Header;