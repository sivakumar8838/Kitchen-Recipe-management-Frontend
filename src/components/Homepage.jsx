import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';

function Homepage() {
  const [home, setHome] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get('https://kitchen-recipe-management-agpb.onrender.com/api/Recipe');
        setHome(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRecipes();
  }, []);


  const handleRecipes = async (id) => {
    
    const response = await axios.get(`https://kitchen-recipe-management-agpb.onrender.com/api/Recipe/${id}`);
    navigate(`/Recipes/${id}`);
  }

  return (
    <div className='div'>
        <div className="recipe-container">
          {home.map((recipe) => (
            <section key={recipe._id} className="card5" onClick={() => handleRecipes(recipe._id)}>
              <img className='img' height={200} width={250} src={recipe.img} alt={recipe.name} />
              <p className='p'>{recipe.name}</p>
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
