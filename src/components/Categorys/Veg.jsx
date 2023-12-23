import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navibar from '../Navibar';
function Veg() {
  const [biryaniRecipes, setBiryaniRecipes] = useState([]);
  const navigate=useNavigate()
   const handleBiryani = async () => {
     try {
       const response = await axios.get(`https://kitchen-recipe-management-agpb.onrender.com/api/Recipe/category/${'Veg'}`);
       setBiryaniRecipes(response.data);
     } catch (error) {
       console.error(error);
     }
   };
   const handleRecipes = async (id) => {
     
     const response = await axios.get(`https://kitchen-recipe-management-agpb.onrender.com/api/Recipe/${id}`);
     navigate(`/Recipes/${id}`);
   }
   useEffect(() => {
     handleBiryani();
   }, []);
 
  return (
    <div className="recipe-container">
      <Navibar/>
    {biryaniRecipes.map((recipe) => (
      <section key={recipe._id} className="card5" onClick={() => handleRecipes(recipe._id)}>
        <img className='img' height={200} width={250} src={recipe.img} alt={recipe.name} />
        <div className="card5__content">
          <p className="card5__title">{recipe.name}</p>
          <p className="card5__description">{recipe.description}</p>
        </div>
      </section>
    ))}
  </div>
);
}

export default Veg