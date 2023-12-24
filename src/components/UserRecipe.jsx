// UserRecipe.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import Navibar from './Navibar';
import './UserRecipes.css'

const UserRecipe = () => {
  const [recipes, setRecipes] = useState([]);
  const [newRecipe, setNewRecipe] = useState({
    name: '',
    category: '',
    description: '',
    ingredients: [],
    instructions: [],
  });
  const [expandedRecipe, setExpandedRecipe] = useState(null);


  useEffect(() => {
    // Fetch recipes on component mount
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    try {
      const response = await axios.get('https://kitchen-recipe-management-agpb.onrender.com/api/userRecipe'); 
      setRecipes(response.data);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  const handleCreateRecipe = async () => {
    try {
      const response = await axios.post('https://kitchen-recipe-management-agpb.onrender.com/api/userRecipe', newRecipe); 
      setRecipes([...recipes, response.data]);
      setNewRecipe({
        name: '',
        category: '',
        description: '',
        ingredients: [],
        instructions: [],
      });
    } catch (error) {
      console.error('Error creating recipe:', error);
    }
  };

  const handleDeleteRecipe = async (id) => {
    try {
      await axios.delete(`https://kitchen-recipe-management-agpb.onrender.com/api/userRecipe/${id}`); // Replace with your API endpoint
      setRecipes(recipes.filter((recipe) => recipe._id !== id));
    } catch (error) {
      console.error('Error deleting recipe:', error);
    }
  };

  return (
    <div><Navibar />
      <h1>User Recipes</h1>
      <h2>Create Recipe</h2>
      <form onSubmit={(e) => { e.preventDefault(); handleCreateRecipe(); }}> 
        <label>Name:
          <input type="text" className='input7'  placeholder='Enter your Name...' value={newRecipe.name} onChange={(e) => setNewRecipe({ ...newRecipe, name: e.target.value })}required /> <br />
        </label>
        <label>Category:
          <input type="text" className='input7'  placeholder='Enter your Category...' value={newRecipe.category} onChange={(e) => setNewRecipe({ ...newRecipe, category: e.target.value })} required/> <br />
        </label>
        <label>Description:
          <input type="text" className='input7'  placeholder='Enter your Description...' value={newRecipe.description} onChange={(e) => setNewRecipe({ ...newRecipe, description: e.target.value })} required /> <br />
        </label>
        <label>Ingredients: <br />
          <textarea cols='40' className='input8'  placeholder='Enter your Ingredients...' rows='5' type="text" value={newRecipe.ingredients} onChange={(e) => setNewRecipe({ ...newRecipe, ingredients: e.target.value.split(',') })} required/> <br />
        </label>
        <label>Instructions: <br />
          <textarea cols='40' className='input8'  placeholder='Enter your Instructions...' rows='5' type="text" value={newRecipe.instructions} onChange={(e) => setNewRecipe({ ...newRecipe, instructions: e.target.value.split(',') })} required/> <br />
        </label>
        <button type="submit" className='submit'>Create Recipe</button>
          </form>
          <div>
              <h2>My Recipes</h2>
              <ul>
        {recipes.map((recipe) => (
          <li key={recipe._id}>
            {recipe.name} - {recipe.category}
            <button onClick={() => setExpandedRecipe(expandedRecipe === recipe._id ? null : recipe._id)}>
              {expandedRecipe === recipe._id ? 'Hide Details' : 'Show Details'}
            </button>
            {expandedRecipe === recipe._id && (
              <div>
                <p>Description: {recipe.description}</p>
                <p>Ingredients: {recipe.ingredients.join(', ')}</p>
                        <p>Instructions: {recipe.instructions.join(', ')}</p>
                        <button onClick={() => handleDeleteRecipe(recipe._id)}>Delete</button>
              </div>
            )}
          </li>
        ))}
      </ul>
          </div>
    </div>
  );
};

export default UserRecipe;