import { BsFillEyeFill } from "react-icons/bs";

import ProfileWrapper from "./ProfileWrapper";

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

export default Profile;