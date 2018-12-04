import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route ,Switch} from "react-router-dom";
import Header from "./containers/header";
import Content from "./containers/content";
import Sign from "./components/sign";
import store from "./store";
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
        <React.Fragment>
          <Header/>
          <Route exact path="/" component={Content} />
          <Route exact path="/sign" component={Sign} />
          </React.Fragment>
        </BrowserRouter>
      </Provider>
    );
  }
}
export default App;
