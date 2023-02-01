import styled from 'styled-components';
import BgResumeTodo from '../../assets/bg-resume-todo.svg';
import TopSection from './TopSection';

export default function HomePage() {
  return (
    <>
      <TopSection />

      <TodoResumeSection dir={BgResumeTodo}>
        <h1>To-do List</h1>

        <p>Drag and drop to set your main priorities, check when done and create what's new.</p>
      </TodoResumeSection>
    </>
  );
}

// & CSS STYLED-COMPONENTS...

const TodoResumeSection = styled.section`
  background-image: url(${(props) => props.dir});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 100px 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 17vw;
  gap: 15px;
  margin-top: -50px;

  h1,
  p {
    color: white;
    text-align: center;
  }

  h1 {
    font-size: 2em;
    border-bottom: 3px solid #4ac959;
    padding: 5px;
  }

  p {
    line-height: 1.5em;
  }
`;
