
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Register from './components/RegisterFrom';
import Login from './components/LoginFom';
import ResetPassword from './components/ResetPassword';
import Homepage from './components/Homepage';

function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/rese_password" element={<ResetPassword />} />
          <Route path='/' element={<Login  />} />
          <Route path='/register' element={<Register />} />
          <Route path='/Home' element={<Homepage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
