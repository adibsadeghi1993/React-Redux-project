import "./App.css";
import Header from "./containers/Header";
import { Switch, Route,NavLink,Redirect,Link } from "react-router-dom";
import ProductList from "./containers/ProductList";
import ProductDetailes from "./containers/ProductDetailes";
import NotFound from "./containers/NotFound";


function App() {
  return (
    <div className="app">
      <Header/>
      <Switch>
      <Route path="/" exact  component={ProductList}  />
      <Route path="/product/:product"  component={ProductDetailes}  />
      <Route   component={NotFound}  />
      </Switch>
      
    </div>
  );
}

export default App;
