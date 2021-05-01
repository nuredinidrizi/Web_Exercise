import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import history from "./history";
import './App.css';
import Albums from "./pages/Albums.page";
import Photos from "./pages/Photos.page";

function App() {
  return (
    <div className="App">
          <BrowserRouter history={history}>
				    <Switch>
              <Route exact path="/" render={() => <Redirect to="/albums" />} />
              <Route exact path="/albums" component={Albums} />
              <Route exact path="/albums/:id" component={Photos} />
            </Switch>
          </BrowserRouter>
    </div>
  );
}

export default App;
