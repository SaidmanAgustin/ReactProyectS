import './App.css';
import {BrowserRouter as Router, Switch, Router, Route} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Blog from './components/paginas/Blog';
import Inicio from './components/paginas/Inicio';
import Viajes from './components/paginas/Viajes';


function App() {
  return (
 <div className= 'App'>
  <Router>

    <NavBar />
    <Switch>
      <Route path='/Inicio' exact component={Inicio}/>
      <Route path='/blog'  component={Blog}/>
      <Route path='/Viajes' component={Viajes}/>
    </Switch>

  </Router>
 </div>

  );
}

export default App;
