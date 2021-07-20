
import Navbar from './navbar';
import Home from './Home';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import CreateList from './create';
import BlogDetails from './blogDetails';
import NotFound from './NotFound';




function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/bloglist/">
              <Home />   
            </Route>
            <Route path="/bloglist/create">
              <CreateList />  
            </Route>      
            <Route path="/bloglist/posts/:id">
              < BlogDetails />
            </Route>
          
            <Route path="*">
              < NotFound/>
            </Route>
            
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
            
