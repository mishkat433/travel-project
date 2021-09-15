import React, { createContext, useState } from 'react'
import Header from './components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import News from "./components/News/News.jsx";
import BackImage from "./Image/Rectangle1.png";
import "bootstrap/dist/css/bootstrap.min.css";
import Info from './components/Information/Info';
import Destination from './components/Destination/Destination';
import Blog from './components/Blog/Blog';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Details from './components/Details/Details';


export const userContex= createContext()

function App(props) {
  const [gohobbor, setgohobbor] = useState({})
   
  return (
    <div className="backImage" style={{ backgroundImage: `linear-gradient(rgb(0 0 0 / 55%), rgb(0 0 0 / 57%)),url(${BackImage})` }}>
      
      <userContex.Provider value={[gohobbor, setgohobbor]}>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <News></News>
          </Route>
          <Route path="/destination">
            <Destination></Destination>
          </Route>
          <Route path="/info">
            <Info></Info>
          </Route>
            <PrivateRoute path="/blog">
              <Blog></Blog>
            </PrivateRoute>
            <PrivateRoute path="/details">
              <Details></Details>
            </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
         
        </Switch>
      </Router>
      </userContex.Provider>
    </div>
  )
}
export default App;


// className = "backImage" style = {{ backgroundImage: `linear-gradient(rgb(0 0 0 / 55%), rgb(0 0 0 / 57%)),url(${BackImage})` }}