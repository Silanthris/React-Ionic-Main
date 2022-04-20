import { IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonItem, IonLabel, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';

import '../components/util/css/Page.css';
import { Link, useLocation, useParams } from 'react-router-dom'
import { getJson, getBigJson } from "../components/util/json"
import { useEffect, useState } from 'react';


import Cmr from "../components/Cmr"
import CmrList from '../components/CmrList';
import { constructOutline } from 'ionicons/icons';
import { getUserById } from '../dataservice';





const Placeholder: React.FC = () => {

  const location = useLocation<any>();

  const [cmrCheck, setCmrCheck] = useState(false);

  const [userToken, setUserToken] = useState<any>();

  const [cmrData, setCmrData] = useState<any>();

  const jsonItem = getJson();
  const bigJsonItem = getBigJson();


  useEffect(() => {
    getUserById(location.state.id).then((c: any) => {
      const user = c.values[0];
      console.log("Tentou111");
      console.log(user)
     // setUserToken(user.token);


      fetch('https://try.bizcargo.com/api/cmr/cmr-documents?active=true&completed=false&daysFilter=0&page=0&size=10&sort=created_date,DESC&template=false', {
        headers: {
          'Authorization': 'Bearer ' + user.token,
          'Accept': 'application/json',
          'Content-type': 'application/json'
        },
        method: 'GET'
      })
        .then(r => r.json())
        .then((response) => {
          if (response) {

            setCmrData(response)
            console.log("Tentou222");
            console.log(cmrData)

          }
        }).catch((err) => {
          alert('Login Errado');
        });



    });

  }, []);


  const cmrListApi = () => {

    console.log("Tentou");
    console.log(userToken);
    console.log("Tentou");


  };




  const CmrClick = () => {

    setCmrCheck(true)

  };


  const words = bigJsonItem[0].loadingDate.split('T');
  console.log(words);


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton color="danger" onClick={() => { setCmrCheck(false) }}> Hol </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>



        {cmrCheck ? (
          <Cmr />

        ) : (
          <div>
            <CmrList CmrClick={CmrClick} />
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


