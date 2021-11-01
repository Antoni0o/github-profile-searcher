import styled from "styled-components";

import { variables } from "../../utils/theme";

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

export default ProfileWrapper;