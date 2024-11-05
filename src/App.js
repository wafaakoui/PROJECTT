import './index.css';
import Navbar from './Navbr'; // Correct import for Navbar
import Signin from './SignIn'; // Import Signin component
import Signup from './SignUp'; // Import Signup component
import AboutUs from './AboutUs';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="others">
          <Switch>
            <Route path="/Signin" component={Signin} />
            <Route path="/Signup" component={Signup} />
            <Route path="/AboutUs" component={AboutUs} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
