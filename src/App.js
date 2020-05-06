import React from 'react';
import './App.css';
import store from "./store";
import { Provider } from "react-redux";
import HomeComponent from "./Components/Home.component";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import CharacterDetailsComponent from "./Components/CharacterDetails.component";
import HeaderComponent from "./Components/shared/header.component";
import NewCharacter from "./Components/NewCharacter.componet";
import EditCharacter from "./Components/EditCharacter.component";

function App() {
  return (
   <React.Fragment>

     <Provider store={store} >
         <Router >
             <HeaderComponent/>
             <Switch>
                 <Route exact path="/" component={HomeComponent} />
                 <Route exact path="/nuevo-personaje/" component={NewCharacter} />
                 <Route exact path="/editar-personaje/:id" component={EditCharacter} />
                 <Route exact path="/detalles/:id" component={CharacterDetailsComponent} />
             </Switch>
         </Router>
     </Provider>
   </React.Fragment>
  );
}

export default App;
