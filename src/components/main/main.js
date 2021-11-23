import { Switch, Route } from "react-router-dom";

function Main() {
  return (
    <div>
      <Main>
        <Switch>
          <Route path='\searchBarAndButton' component={SearchBarAndButton} />
          <Route path='\comments' component={Comments} />
        </Switch>
      </Main>
    </div>
  );
}
