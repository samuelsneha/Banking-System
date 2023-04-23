import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header.js";
import { Login } from './Components/Login';
import {Register} from './Components/Register';
import {  BrowserRouter as Router,
  Routes,
  Route,
  Link 
} from 'react-router-dom';

function App() {
  return (
    <>
        <Router>
        {/* <Header/>  */}
        <Routes>
            <Route exact path='/' element = {<Header/>} /> 
            <Route exact path='/login' element = {<Login/>} /> 
            <Route exact path='/register' element = {<Register/>} /> 
        </Routes>   
        {/* <Footer/> */}
        {/* <Login /> */}

        </Router>
    </>

  );
}

export default App;
