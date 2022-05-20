import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {NavbarComponents} from './components/Index';
import Login from './auth/Login';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<NavbarComponents/>}></Route>
          <Route exact path='/login' element={<Login/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
