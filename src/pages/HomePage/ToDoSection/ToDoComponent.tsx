import styled, { css } from 'styled-components';
import { DndContext, closestCenter, DragEndEvent } from '@dnd-kit/core';
import { arrayMove, SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { useState } from 'react';
import { SortableItem } from './ToDoDraggableItem';
import { IoSave } from 'react-icons/io5';
import { EditableItem } from '../../Components/EditableItem';
import { MdEdit, MdEditOff } from 'react-icons/md';

const data = [
  { id: 'Fazer lição de casa', chore: 'Fazer lição de casa', isDone: false },
  { id: 'Fazer projeto', chore: 'Fazer projeto', isDone: false },
  { id: 'Limpar a cozinha', chore: 'Limpar a cozinha', isDone: false },
];

type dataI = typeof data;

interface RenderEditableItemsI {
  isEditing: boolean;
  toDoItems: dataI;
  handleSave: (text: string) => void;
}

export default function ToDoComponent() {
  const [toDoItems, setLanguages] = useState(data);
  const [newTask, setNewTask] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (active.id !== over.id) {
      setLanguages((items) => {
        const activateIndex = items.findIndex((item) => item.chore === active.id);
        const overIndex = items.findIndex((item) => item.chore === over.id);

        return arrayMove(items, activateIndex, overIndex);
      });
    }
  }

  function addTask(e: React.FormEvent) {
    e.preventDefault();
    if (newTask !== '') {
      setLanguages([...toDoItems, { id: newTask, chore: newTask, isDone: false }]);
      setNewTask('');
    }
    return;
  }

  function handleSaveEditingItem(text: string) {
    console.log(text);
  }
  /*   function deleteTask(task: string) {
    console.log('a');
    setLanguages((items) => {
      const activateIndex = items.findIndex((item) => item.chore === task);
      items.filter((item, index) => index !== activateIndex);
      return items;
    });
  } */

  return (
    <ToDoContainer>
      <HeaderToDo>
        <h1>To-do</h1>
        <p>
          Take a breath. <br />
          Start doing.
        </p>
      </HeaderToDo>

      <PencilIco>
        {isEditing ? (
          <MdEditOff onClick={() => setIsEditing(!isEditing)} id="MdEdit" />
        ) : (
          <MdEdit onClick={() => setIsEditing(!isEditing)} id="MdEdit" />
        )}
      </PencilIco>

      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={toDoItems} strategy={verticalListSortingStrategy}>
          <ListItems>
            <AlternativelyRenderItems isEditing={isEditing} toDoItems={toDoItems} handleSave={handleSaveEditingItem} />

            <form onSubmit={addTask}>
              <input value={newTask} onChange={(e) => setNewTask(e.target.value)} id="new-task-input" type="text" placeholder="Add new task here!" />
              <button id="save-task-button">
                <IoSave />
              </button>
            </form>
          </ListItems>
        </SortableContext>
      </DndContext>

      <button id="delete-all-button">erase all</button>
    </ToDoContainer>
  );
}

function AlternativelyRenderItems({ isEditing, toDoItems, handleSave }: RenderEditableItemsI) {
  if (isEditing) {
    return (
      <>
        {toDoItems.map((item) => (
          <EditableItem key={item.id} text={item.chore} handleSave={handleSave} />
        ))}
      </>
    );
  }

  return (
    <>
      {toDoItems.map((item) => (
        <SortableItem key={item.id} id={item.id} content={item.chore} />
      ))}
    </>
  );
}

export const ToDoContainerStyles = css`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 270px;
  background-color: white;
  border-top: 20px solid orange;
  -webkit-box-shadow: 0px 0px 16px 1px rgba(0, 0, 0, 0.26);
  -moz-box-shadow: 0px 0px 16px 1px rgba(0, 0, 0, 0.26);
  box-shadow: 0px 0px 16px 1px rgba(0, 0, 0, 0.26);
  padding: 12px;
  gap: 10px;

  ul {
    width: 100%;
  }

  #delete-all-button {
    box-sizing: border-box;
    background-color: black;
    color: white;
    border-radius: 5px;
    padding: 10px;
    font-weight: 600;
    width: 80%;
    cursor: pointer;
  }
`;

const ToDoContainer = styled.div`
  ${ToDoContainerStyles}
`;

export const HeaderToDoStyles = css`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 10px;
  h1,
  p {
    text-align: center;
    line-height: 1.2em;
  }
  h1 {
    font-size: 2em;
  }
`;

const HeaderToDo = styled.div`
  ${HeaderToDoStyles}
`;

const ListItems = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  form {
    margin-top: 5px;
    display: flex;
    gap: 5px;
  }

  li {
    display: flex;
    align-items: center;
    gap: 5px;
    height: 20px;
  }

  #new-task-input {
    border-radius: 5px;
    border: 1px solid #808080;
    padding: 5px;
    font-size: 0.8em;
    width: 100%;
  }
  #save-task-button {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    padding: 0px;
    color: black;
    width: min-content;
    font-size: 1.2em;
    cursor: pointer;
  }
`;

const PencilIco = styled.button`
  display: flex;
  justify-content: end;
  width: 100%;
  background-color: white;

  #MdEdit {
    font-size: 1.1em;
    filter: opacity(90%);
    cursor: pointer;
  }
`;
