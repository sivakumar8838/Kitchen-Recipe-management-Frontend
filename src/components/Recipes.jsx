import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Recipes.css'
import Navibar from './Navibar';

function Recipes() {
  const [recipe, setRecipe] = useState([]);

  const currentUrl = window.location.href;

  const handlecilk = async (e) => {
    if (e) {
      e.preventDefault();
    }

    const slicedUrl = currentUrl.slice(-24);

    try {
      const response = await axios.get(`https://kitchen-recipe-management-agpb.onrender.com/api/Recipe/${slicedUrl}`);
      setRecipe(response.data);
      console.log(recipe)
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handlecilk();
  }, []);

  return (
    <div className='v'>
      <div className="recipe-container">
         <Navibar/>
            <section className='card6'>
            <h1>{recipe.name}</h1>

              <img alt={recipe.name} src={recipe.img} className='img2'/>
              <div >
                <h2> category</h2><p className='h'>{recipe.category}</p>
                <h2>description</h2>

                <p>{recipe.description}</p>
                <h2>Ingredients</h2>
   {recipe.ingredients && recipe.ingredients.length > 0 && (
  <div className='p'>
    <ol>
      {recipe.ingredients.map((ingredient, index) => (
        <p key={index}>{ingredient}</p>
      ))}
    </ol>
  </div>
)}

{recipe.instructions && recipe.instructions.length > 0 && (
  <div>
    <h2>Instructions</h2>
    <ol className='i'>
      {recipe.instructions.map((instruction, index) => (
        <p key={index}>{instruction}</p>
      ))}
    </ol>
  </div>
)}
              </div>

            </section>
        </div>
    </div>
  );
}
export default Recipes;