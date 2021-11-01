import { BsGithub } from 'react-icons/bs'

import LogoWrapper from './LogoWrapper';

const Header = () => {
  return (
    <LogoWrapper>
      <span><BsGithub /></span>
      <h1>Github Profile Searcher</h1>
    </LogoWrapper>
  )
}

export default Header;