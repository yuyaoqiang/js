import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";
import Header from "./containers/header";
import Content from "./containers/content";
import Detail from "./containers/detail";
import List from "./containers/list/mallList";
import Sign from "./components/sign";
import store from "./store";

const history = createBrowserHistory();
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <React.Fragment>
            <Header />
            <Route exact path="/" component={Content} />
            <Route exact path="/sign" component={Sign} />
            <Route exact path="/detail" component={Detail} />
          </React.Fragment>
        </Router>
      </Provider>
    );
  }
}
export default App;
