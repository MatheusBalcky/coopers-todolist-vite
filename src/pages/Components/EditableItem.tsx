import React, { useState } from 'react';
import styled from 'styled-components';

interface Props {
  text: string;
  handleSave: (text: string) => void;
}

export function EditableItem({ text, handleSave }: Props) {
  const [isEditing, setEditing] = useState(false);
  const [value, setValue] = useState(text);

  function handleEdit() {
    setEditing(true);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  function handleBlur() {
    handleSave(value);
    setEditing(false);
    setValue(text);
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Enter') {
      handleBlur();
    }
  }

  function handleDelete() {
    console.log('deletando item');
  }

  return (
    <>
      {isEditing ? (
        <ListItem>
          <EditableInput autoFocus type="text" value={value} onChange={handleChange} onBlur={handleBlur} onKeyDown={handleKeyDown} />
        </ListItem>
      ) : (
        <ListItem>
          <span onClick={handleEdit}>{text}</span>
          <ButtonDelete onClick={handleDelete}>delete</ButtonDelete>
        </ListItem>
      )}
    </>
  );
}

const EditableInput = styled.input`
  color: black;
`;

const ButtonDelete = styled.button`
  color: black;
  cursor: pointer;
  background-color: white;
  color: #9f9f9f;
  font-size: 0.65em;
  font-weight: bold;
`;

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
`;
