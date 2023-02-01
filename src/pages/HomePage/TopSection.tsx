import styled from 'styled-components';
import BgAsideHeaderSection from '../../assets/bg-aside-headersection.svg';
import RoomPhoto from '../../assets/room-photo.png';
import LogoCoopers from '../../assets/logo-coopers.svg';

export default function TopSection() {
  return (
    <TopSectionContainer>
      <BackgroundAside dir={BgAsideHeaderSection}>
        <img src={RoomPhoto} alt="Imagem de uma sala organizada e bonita" />
      </BackgroundAside>
      <Header>
        <h1 id="logo-header">
          <img id="logo-coopers-svg" src={LogoCoopers} alt="Logo do website que se chama COOPERS" />
        </h1>

        <button id="login-button">entrar</button>
      </Header>

      <SectionMainArticle>
        <article>
          <p id="big-paragraph">
            <b>Organize</b> <br />
            your daily jobs
          </p>

          <p id="small-paragraph">The only way to get things done</p>

          <button id="goto-todo-button">Go to To-do list</button>
        </article>
      </SectionMainArticle>
    </TopSectionContainer>
  );
}

// & CSS STYLED-COMPONENTS...

const TopSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  height: 750px;
`;

const BackgroundAside = styled.div`
  @media (max-width: 670px) {
    display: none;
  }
  position: absolute;
  width: 50%;
  height: 100%;
  right: 0px;
  top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${(props) => props.dir});
  background-position: right;
  background-size: contain;
  background-repeat: no-repeat;

  img {
    animation: float 3s ease-in-out infinite;
    width: 50%;
  }

  @keyframes float {
    0% {
      box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
      transform: translatey(0px);
    }
    50% {
      box-shadow: 0 15px 15px 0px rgba(0, 0, 0, 0.2);
      transform: translatey(-5px);
    }
    100% {
      box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
      transform: translatey(0px);
    }
  }
`;

const Header = styled.header`
  z-index: 1;

  @media (max-width: 400px) {
    flex-direction: column;
    gap: 20px;
  }

  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 15px 35px;

  #login-button {
    padding: 5px 35px;
    background-color: black;
    color: white;
    transition: 0.2s all;
    &:hover {
      filter: opacity(70%);
    }
  }

  #logo-coopers-svg {
    width: 200px;
  }
`;

const SectionMainArticle = styled.article`
  display: flex;
  height: 650px;

  article {
    @media (max-width: 670px) {
      align-items: center;
      width: 100%;
      #big-paragraph,
      #small-paragraph {
        text-align: center;
      }
    }

    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 30px;
    width: 60%;
    padding: 25px 35px;

    button {
      box-sizing: border-box;
      padding: 10px 25px;
      max-width: 200px;
      border-radius: 10px;
      background-color: #4ac959;
      color: white;
      font-weight: 600;
      transition: 0.2s all;
      &:hover {
        filter: opacity(70%);
      }
    }

    #big-paragraph {
      font-size: 3.5em;
      color: #4ac959;
      b {
        color: black;
      }
    }

    #small-paragraph {
      font-weight: 600;
    }
  }
`;
