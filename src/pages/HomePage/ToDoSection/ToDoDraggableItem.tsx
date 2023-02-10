import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import styled from 'styled-components';
import { IoEllipseOutline } from 'react-icons/io5';

interface SortableItemI {
  key: string;
  id: string;
  content: string;
}

export function SortableItem(props: SortableItemI) {
  const { id } = props;
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <Item ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <button id="done-task-button">
        <IoEllipseOutline id="IoEllipseOutline" />
      </button>
      <p>{props.id}</p>
    </Item>
  );
}

const Item = styled.li`
  #IoEllipseOutline {
    font-size: 1.3em;
    cursor: pointer;
  }

  #done-task-button {
    background-color: white;
    font-size: 0.65em;
    color: lightgray;
    display: flex;
    align-items: center;
  }
  #done-task-button {
    font-size: 1.1em;
    color: black;
  }
`;
