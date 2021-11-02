import styled from "styled-components";

import { variables } from "../../utils/theme";

const ProfileWrapper = styled.section`
  display: flex;

  margin: 32em 15%;
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
        display: flex;
        flex-direction: column;
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
  }

  @media(max-width: 1024px) {
    margin: 32em 5%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    .image {
      margin: auto;
    }
    .infos {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 4%;
      .social {
        align-items: center;
        justify-content: center;
        .name {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin-right: 0;
          span {
            font-size: ${variables.p}
          }   
        }
        .other {
          justify-content: center;
          align-items: center;
          text-align: center;
          gap: 5%;
        }
      }
      
      .bio {
        text-align: center;
        margin: 5%;
        margin-top: 48em;
      }
    }
  }
`

export default ProfileWrapper;