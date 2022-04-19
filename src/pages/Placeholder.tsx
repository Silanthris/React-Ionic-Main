import { IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonItem, IonLabel, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';

import '../components/util/css/Page.css';
import { Link, useLocation, useParams } from 'react-router-dom'
import { getJson, getBigJson } from "../components/util/json"
import { useEffect, useState } from 'react';


import Cmr from "../components/Cmr"
import CmrList from '../components/CmrList';
import { constructOutline } from 'ionicons/icons';





const Placeholder: React.FC = () => {

  const location = useLocation<any>();

  const [cmrCheck, setCmrCheck] = useState(false);

  const [userId, setUserId] = useState<any>("false");

  setUserId(location.state.id)

  console.log("=========")
  console.log(location.state.id)
  console.log("=========")

  const jsonItem = getJson();
  const bigJsonItem = getBigJson();



  


  const CmrClick = () => {

    setCmrCheck(true)

  };


  const words = bigJsonItem[0].loadingDate.split('T');
  console.log(words);


  console.log(bigJsonItem)
  console.log(jsonItem)

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton color="danger" onClick={() => {setCmrCheck(false)}}> Hol </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>



        {cmrCheck ? (
          <Cmr userId={userId} />

        ) : (
          <div>
            <CmrList userId={userId} CmrClick={CmrClick} />
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


