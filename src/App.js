import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import lambo from './pages/lambo'
import Mustang from './pages/mustang'
import home from './pages/home'

const App = () => {


  return (
    <div className="boxes">
       <Link to='/lambo'>lambo</Link>
            <Link to='/Mustang'>mustang</Link>

            <Switch>
                <Route exact path="/lambo">
                    <lambo/>
                </Route>
                <Route exact path="/Mustang">
                    <Mustang/>
                </Route>
            </Switch>
    </div>
  );
};

export default App;
