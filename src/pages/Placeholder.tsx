import { IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonItem, IonLabel, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';

import '../components/util/css/Page.css';
import { Link } from 'react-router-dom'
import { getJson, getBigJson } from "../components/util/json"
import { useEffect, useState } from 'react';


import Cmr from "../components/Cmr"
import CmrList from '../components/CmrList';

const Placeholder: React.FC = () => {

  const [cmrCheck, setCmrCheck] = useState(false);

  const jsonItem = getJson();
  const bigJsonItem = getBigJson();



 


  const words = bigJsonItem[0].loadingDate.split('T');
  console.log(words);


  console.log(bigJsonItem)
  console.log(jsonItem)

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>

        {cmrCheck ? (
          <Cmr />
        ) : (
          <div>
            <CmrList setCmrCheck={setCmrCheck} />
          </div>
        )}




      </IonContent>

      <IonFooter className="ion-no-border">
        <IonToolbar>
          <IonTitle>List</IonTitle>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default Placeholder;


