import { useState } from 'react';
import { BsSearch } from 'react-icons/bs'
import axios from 'axios'; 
 
import Header from "./components/Header.jsx";
import InputArea from "./components/InputArea.jsx";
import Profile from "./components/Profile.jsx";
import Globals from './GlobalStyles.js';

function App() {
  const [user, setUser] = useState('');
  const [error, setError] = useState('');
  const [userData, setUserData] = useState();

  return (
    <>
      <Globals />
      <Header />
      <InputArea>
        <form 
          onSubmit={ (e) => {
            e.preventDefault();
            axios.get(`https://api.github.com/users/${user}`)
            .then((res) => setUserData(res))
            .catch((err) => setError(err.message))
          }}
        >
          <input 
            type="text" 
            name="search" 
            id="search" 
            placeholder="Search the profile here"
            value={user}
            onChange={(e) => {setUser(e.target.value)}}
          />
          <button type="submit">
            <BsSearch/>
          </button>
        </form>
        <legend>{error}</legend>
      </InputArea>
      {
        !error &&
         userData && 
           <Profile 
             name={userData.data.name}
             username={userData.data.username}
             followers={userData.data.followers}
             following={userData.data.following}
             publicRepos={userData.data.public_repos}
             bio={userData.data.bio}
             avatarUrl={userData.data.avatar_url}
             url={userData.data.html_url}
           />
       }
    </>
  );
}

export default App;
