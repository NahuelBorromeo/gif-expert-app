import { useState } from "react";
import uuid from 'react-uuid';


export const AddCategory = ({ onNewCategory }) => {

  const [inputValue, setInputValue] = useState('');

  const onChangeValue = ({ target }) => {
    // console.log(target.value);
    setInputValue(target.value);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    const newInputValue = inputValue.trim();
    if (newInputValue.length <= 1) return;
    onNewCategory({
      'nombre': newInputValue,
      'id': uuid(),
    });
    setInputValue('');
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onChangeValue}
      />
    </form>
  )
};