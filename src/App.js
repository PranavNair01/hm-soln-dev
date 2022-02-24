import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Home from './Home';
import Options from './Options';
import Editor from './Editor';
import Editor2 from './Editor2';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <div className="container-fluid">
                <div className="row">
                  <Sidebar />
                  <Home />
                </div>
              </div>
            </Route>
            <Route exact path="/options/:id">
              <Options />
            </Route>
            <Route exact path="/editor/:id/:opt">
              <main className="mx-4">
                <h2>Solution 1</h2>
                <Editor />
                <hr />
                <h2>Solution 2</h2>
                <Editor2 />
              </main>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
