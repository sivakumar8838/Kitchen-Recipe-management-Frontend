import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Recipes.css'

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
    } catch (error) {
      console.error(error);
    }
  };
  

  useEffect(() => {
    handlecilk();
  }, []);

  return (
    <div>
      <div className="recipe-container">
         
            <section className='card6'>
            <h1>{recipe.name}</h1>

              <img alt={recipe.name} src={recipe.img} className='img2'/>
              <div >
                <h2> category</h2><p>{recipe.category}</p>
                <h2>description</h2>

                <p>{recipe.description}</p>
                <h2>ingredients </h2>
                <p>
                {recipe.ingredients}</p>
                <h2>instructions</h2>
                <p> {recipe.instructions} </p>
              </div>
              {/* <div className="recipe-container">
          {home.map((recipe) => (
            <section key={recipe._id} className="card5" onClick={() => handleRecipes(recipe._id)}>
              <img className='img' height={200} width={250} src={recipe.img} alt={recipe.name} />
              <p className='p'>{recipe.name}</p>
              <div className="card5__content">
                <p className="card5__title">{recipe.name}</p>
                <p className="card5__description">{recipe.description}</p>
              </div> */}
            </section>
        </div>
    </div>
  );
}

export default Recipes;
