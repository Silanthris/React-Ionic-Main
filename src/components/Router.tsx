import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet, IonSplitPane } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

import Menu from './menu/Menu';
import File from "../pages/File"
import List from "../pages/List"
import Dashboard from "../pages/Dashboard";

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


const Router: React.FC = () => {

    console.log("rotuer router router")

    return (

        <IonReactRouter>

            <Route path="/list">
                <List />
            </Route>

            <Route path="/list/dashboard">
                <Dashboard />
            </Route>

            <Route path="/list/file" >
                <File />
            </Route>

        </IonReactRouter>

    );



};

export default Router;