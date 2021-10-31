import { useState } from 'react';
import axios from 'axios'; 
import { createGlobalStyle } from "styled-components";
import { BsSearch } from 'react-icons/bs'
 
import Header from "./components/Header.jsx";
import InputArea from "./components/InputArea.jsx";
import Profile from "./components/Profile.jsx";

import { variables } from './utils/theme.js';

function App() {
  const [user, setUser] = useState('');
  const [userData, setUserData] = useState();

  return (
    <>
      <Globals />
      <Header />
      <InputArea>
        <form 
          onSubmit={(e) => {
            e.preventDefault();
            axios.get(`https://api.github.com/users/${user}`)
                 .then((res) => setUserData(res.data))
          }}
        >
          <input 
            type="text" 
            name="search" 
            id="search" 
            placeholder="Search the profile here"
            value={user}
            onChange={(e) => {setUser(e.target.value);}}
          />
          <button type="submit">
            <BsSearch/>
          </button>
        </form>
      </InputArea>
      { console.log(userData) }
      {
       userData && 
        <Profile 
          name={userData.name}
          username={userData.username}
          followers={userData.followers}
          following={userData.following}
          publicRepos={userData.public_repos}
          bio={userData.bio}
          avatarUrl={userData.avatar_url}
          url={userData.html_url}
        />
      }
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
