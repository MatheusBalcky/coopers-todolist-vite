import styled from 'styled-components';
import grafismoLateral from '../../../assets/grafismos-lateral-esquerda.svg';
import DoneComponent from './DoneComponent';
import ToDoComponent from './ToDoComponent';

export default function ToDoSection() {
  return (
    <MainContainer>
      <ToDoComponent />
      <DoneComponent />
      <BackgroundPicture>
        <img src={grafismoLateral} alt="Grafismo lateral, background da seção do to-do list" />
      </BackgroundPicture>
    </MainContainer>
  );
}

// & CSS STYLED COMPONENTS...

const MainContainer = styled.div`
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
`;

const BackgroundPicture = styled.div`
  filter: opacity(90%);
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  position: absolute;
  left: -410px;
  z-index: -1;
  img {
    height: 70%;
  }
`;
