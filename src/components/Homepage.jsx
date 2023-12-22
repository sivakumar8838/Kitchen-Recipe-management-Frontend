import axios from 'axios';
import React, { useState } from 'react';
import './Home.css';

function Homepage() {
  const [home, setHome] = useState([]);

  const handlerecipes = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get('https://kitchen-recipe-management-agpb.onrender.com/api/Recipe');
      console.log(response.data);
      setHome(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='div'>
      <button onClick={handlerecipes}>Load Recipes</button>

      <div className="recipe-container">
  {home.map((recipe) => (
    <section key={recipe._id} className="card5">

      {/* <svg
        viewBox="0 0 16 16"
        className="bi bi-image-fill"
        fill="currentColor"
        height="40"
        width="40"
        xmlns=""
      > */}
      <img className='img' height={200}  width={250}src={recipe.img}lt={recipe.name}/>
      <p className='p'>{recipe.name}</p>
      {/* </svg> */}
      <div className="card5__content">
        <p className="card5__title">{recipe.name}</p>
        <p className="card5__description">{recipe.description}</p>
      </div>
    </section>
  ))}
</div>

    </div>
  );
}

export default Homepage;
