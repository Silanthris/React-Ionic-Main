import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonBackButton,
  IonInput,
  IonItem,
  IonLabel,
  IonButton,
} from "@ionic/react";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { updateUserById } from "../dataservice";
//import { createUser, getUserById, updateUserById } from "../dataservice";
import { createUser, getUserById } from "../dataservice";

const EditUser: React.FC<any> = () => {
  const { id } = useParams<any>();
  const [currentUser, setCurrentUser] = useState<any>(null);

  const [name, setName] = useState<any>(null);
  const [user_name, setUserName] = useState<any>(null);
  // const [email, setEmail] = useState<any>(null);
  const history = useHistory();

  useEffect(() => {
    if (id) {
      getUserById(id).then((c: any) => {
        setCurrentUser(c.values[0]);
        setName(c.values[0]?.name);
        setUserName(c.values[0]?.user_name);
        //setEmail(c.values[0]?.email);
      });
    }
  }, [id]);

  /**
   *
   */
  const updateUser = async () => {
    if (id) {
      await updateUserById(id, { name });
    } else {
      console.log("calling createUser");
      await createUser({ name, user_name });
    }
    history.goBack();
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>{id ? `edit :${id}` : "create"}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <IonItem>
          <IonLabel> Name</IonLabel>
          <IonInput type="text" value={name} onIonChange={(e: any) => setName(e.target.value)}></IonInput>
        </IonItem>
        {/*
        <IonItem>
          <IonLabel>User Name</IonLabel>
          <IonInput type="text" value={user_name} onIonChange={(e: any) => setUserName(e.target.value)}></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel>Email</IonLabel>
          <IonInput type="text" value={email} onIonChange={(e: any) => setEmail(e.target.value)}></IonInput>
        </IonItem>*/}
        <p>{currentUser?.last_modified}</p>
        <IonButton style={{ margin: 8 }} onClick={updateUser}>
          {id ? "UPDATE User" : "CREATE User"}
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default EditUser;
