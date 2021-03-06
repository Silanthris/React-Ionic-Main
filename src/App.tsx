import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet, IonSplitPane } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Home from "./pages/Home";
import Menu from './components/menu/Menu';

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import EditUser from "./pages/EditUser";
import { initdb } from "./dataservice";
import Register from "./pages/Register";
import Placeholder from "./pages/Placeholder";

const App: React.FC = () => {
  initdb().catch(() => window.alert("ERROR INITIALIZING"));

  return (
    <IonApp>

      <IonReactRouter>

        <IonSplitPane contentId="main">

          <Menu />


          <IonRouterOutlet id="main">



            <Route path="/cmr/:name" exact={true}>
              <Placeholder />
            </Route>





            <Route exact path="/home">
              <Home />
            </Route>



            <Route exact path="/">
              <Redirect to="/home" />
            </Route>

            <Route exact path="/edit-user/:id">
              <EditUser />
            </Route>

            <Route exact path="/create-user">
              <EditUser />
            </Route>

            <Route exact path="/register">
              <Register />
            </Route>

            <Route exact path="/">
              <Redirect to="/home" />
            </Route>

            <Route exact path="/placeholder">
              <Placeholder />
            </Route>

          </IonRouterOutlet>


        </IonSplitPane>

      </IonReactRouter>

    </IonApp>
  );
};

export default App;
