import { Switch, Route } from "react-router-dom";

function Main() {
  return (
    <div>
      <Main>
        <Switch>
          <Route path='src\components\searchBarAndButton\searchBarAndButton.js' component={SearchBarAndButton} />
          <Route path='src\components\comments\comments.js' component={Comments} />
        </Switch>
      </Main>
    </div>
  );
}
