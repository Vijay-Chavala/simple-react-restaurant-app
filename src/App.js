import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home/Home";
function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
