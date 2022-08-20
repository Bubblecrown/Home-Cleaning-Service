import logo from './logo.svg';
import './App.css';
import { Route, Router } from 'react-router-dom';
import GlobalStyles from './globalStyles';

// pages
import HomePage from './pages/HomePage';
import PricingPage from './pages/PricingPage';
import SingupPage from './pages/SingupPage';
// ens pages

function App() {
  return (
    <Router>
      <GlobalStyles></GlobalStyles>
      <Switch>
        <Route path='/Home' exact component={HomePage}/>
        <Route path='/Signup' exact component={SingupPage}/>
        <Route path='/Pricing' exact component={PricingPage}/>
      </Switch>
    </Router>
  );
}

export default App;
