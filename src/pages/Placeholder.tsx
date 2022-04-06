import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
  useIonViewWillEnter,
} from "@ionic/react";

import React, { useState } from "react";
import { queryAllUsers, getUserById, deleteUserById } from "../dataservice";
import { CurrentUser } from "../components/CurrentUser";
import { UserList } from "../components/UserList";
import { useHistory } from "react-router";
import Login from "../components/Login";
import { AnyRecord } from "dns";

const Placeholder: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen className="ion-padding ">
        LOGGED
      </IonContent>
    </IonPage>
  );
};

export default Placeholder;
