import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Recipes() {
  const [recipe, setRecipe] = useState([]);

  const currentUrl = window.location.href;

  // const handlecilk = async (e) => {
  //   e.preventDefault();

  //   const slicedUrl = currentUrl.slice(-24);

  //   const response = await axios.get(`https://kitchen-recipe-management-agpb.onrender.com/api/Recipe/${slicedUrl}`);
  //   setRecipe(response.data);
  //   console.log(response.data);

  // };
  

  useEffect(() =>{
    const handlecilk = async () => {
      const slicedUrl = currentUrl.slice(-24);
    
    try {
      const response = await axios.get(`https://kitchen-recipe-management-agpb.onrender.com/api/Recipe/${slicedUrl}`);
      setRecipe(response.data);
      console.log(response.data);
  
      
    } catch (error) {
      console.error(error);
    }
  };

  handlecilk();
    
  }, [])

  return (
    <div>
      {/* <button onClick={handlecilk}>cilk</button> */}
      <div className="recipe-container">
      {Array.isArray(recipe) && recipe.map((recipe) => (
  <section className="card5">
    <img className='img' height={200} width={250} src={recipe.img} alt={recipe.name} />
    <div className="card5__content">
      <p className="card5__title">{recipe.name}</p>
      <p className="card5__description">{recipe.description}</p>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </div>
  </section>
))}

</div>

    </div>
  );
}

export default Recipes;
