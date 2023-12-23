
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Register from './components/RegisterFrom';
import Login from './components/LoginFom';
import ResetPassword from './components/ResetPassword';
import Homepage from './components/Homepage';
import Recipes from './components/Recipes';
import Chicken from './components/Categorys/Chicken';
import Paneer from './components/Categorys/Paneer';
import Biryani from './components/Categorys/Biryani';
import Veg from './components/Categorys/Veg';
import UserRecipe from './components/UserRecipe';

function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/rese_password" element={<ResetPassword />} />
          <Route path='/' element={<Login  />} />
          <Route path='/register' element={<Register />} />
          <Route path='/Home' element={<Homepage />} />
          <Route path='/Recipes/:id' element={<Recipes />} />
          <Route path='/chicken' element={<Chicken />} />
          <Route path='/paneer' element={<Paneer />} />
          <Route path='/Biryani' element={<Biryani />} />
          <Route path='/veg' element={<Veg />} />
          <Route path='/create' element={<UserRecipe />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;