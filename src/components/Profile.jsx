import styled from "styled-components";
import { BsFillEyeFill } from "react-icons/bs"

import { variables } from "../utils/theme";

const Profile = ({ username, name, followers, following, publicRepos, bio, avatarUrl, url }) => {
  return (
    <ProfileWrapper>
      <div className="image">
        <img src={ avatarUrl } alt={ name } />
        <a href={url} target="_blank" rel="noreferrer noopener"> <span> <BsFillEyeFill/> </span> See More</a>
      </div>

      <div className="infos">
        <div className="social">
          <div className="name">
            <h2>{name}</h2>
            <span>{username}</span>
          </div>
          <div className="other">
            <div className="followers">
              <h3>Followers</h3>
              <span>{followers}</span>
            </div>
            <div className="following">
              <h3>Following</h3>
              <span>{following}</span>
            </div>
            <div className="repos">
              <h3>Repositories</h3>
              <span>{publicRepos}</span>
            </div>
          </div>
        </div>
        {bio && 
          <div className="bio">
              <h2>Bio</h2>
              <p>{bio}</p>
          </div>
        }
      </div>

    </ProfileWrapper>
  )
}

const ProfileWrapper = styled.section`
  display: flex;

  margin: 32em 64em;
  padding-bottom: 24em;

  border: 1px solid ${variables.border};
  border-radius: 1rem;

  .image {
    display: flex;
    flex-direction: column;
    margin-left: 24em;
    align-items: center;
    img {
      outline: 1px solid ${variables.border};
      border: 7px solid ${variables.background};
      margin-top: -64em;
      width: 248px;
      height: 248px;
      border-radius: 50%;
    }

    a {
      transition: .5s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.4em;

      margin-top: 2em;
      padding: 1rem 2rem;

      background-color: ${variables.button};
      border-radius: 1rem;
      border: none;
      cursor: pointer;

      font-size: ${variables.p};
      color: ${variables.text};
      text-decoration: none;

      &:hover {
        filter: brightness(0.8)
      }

      span {
        font-size: ${variables.h3}
      }
    }
  }
  
  .infos {
    margin: 24em;

    span, p {
        font-size: ${variables.p};
        color: ${variables.border};
        filter: brightness(2.4)
    }

    .social {
      display: flex;
      flex-direction: column;
      
      .name {
        display: block;
        margin-right: 144em;
        h2 {
          font-size: ${variables.h2};
        }
      }

      .other {
        display: flex;
        justify-content: start;
        align-items: start;
        gap: 24em;

        margin: 24em 0;

        text-align: start;
      }
    }

    .bio {
    }
  }

`

export default Profile;