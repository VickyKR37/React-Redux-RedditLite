import { Switch, Route, BrowserRouter } from "react-router-dom";
import { Error } from "../error/error";

function Main() {
  return (
    <div>
      <Main>
        <Switch>
          <Route path='\searchBarAndButton' component={SearchBarAndButton} />
          <Route path='\comments' component={Comments} />
          <Route component={Error} />
        </Switch>
      </Main>
    </div>
  );
}
