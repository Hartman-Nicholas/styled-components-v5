import GlobalStyle from "components/GlobalStyle";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "components/pages/Login";
import Home from "components/pages/Home";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route path="/login">
            {" "}
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
