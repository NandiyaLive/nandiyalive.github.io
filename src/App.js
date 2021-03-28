import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Works from './Works';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  const preloader = document.querySelector('.preloader');
  setInterval(() => {
    preloader.style.display = 'none';
  }, 2000);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/works" component={Works} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
