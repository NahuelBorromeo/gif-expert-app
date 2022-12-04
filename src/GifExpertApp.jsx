import { useState } from 'react';
import { AddCategory, GifGrid } from './components';
import uuid from 'react-uuid';


export function GifExpertApp() {
  const [categories, setCategories] = useState([{
    'nombre': 'Inuyasha',
    'id': uuid()
  }]);

  const onNewCategory = (newCategory) => {
    let newCategories = [newCategory, ...categories];
    setCategories(newCategories);
  };

  const onDeleteCategory = (deleteCategory) => {
    const newCategories = categories.filter(category => {
      return category.id !== deleteCategory.id
    });
    setCategories(newCategories);
  }

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory
        onNewCategory={onNewCategory}
      />

      {
        categories.map((category) => (
          <div key={uuid()}>
            <GifGrid
              category={category}
              onDeleteCategory={onDeleteCategory}
            />
          </div>
        ))
      }
    </>
  );
}
