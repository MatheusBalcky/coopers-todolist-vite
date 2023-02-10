import styled from 'styled-components';
import { HeaderToDoStyles, ToDoContainerStyles } from './ToDoComponent';

export default function DoneComponent() {
  return (
    <DoneContainer>
      <HeaderDone>
        <h1>Done</h1>
        <p>
          Congratulations! <br />
          <b>You have done 5 tasks</b>
        </p>
      </HeaderDone>

      <ul>
        <ListItem>a</ListItem>
      </ul>

      <button id="delete-all-button">erase all</button>
    </DoneContainer>
  );
}

const DoneContainer = styled.div`
  ${ToDoContainerStyles};
  border-top: 20px solid #4ac959;
`;

const HeaderDone = styled.header`
  ${HeaderToDoStyles};
`;

const ListItem = styled.li`
  border: 1px solid black;
`;
