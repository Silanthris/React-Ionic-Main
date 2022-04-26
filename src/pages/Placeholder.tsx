import { IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonItem, IonLabel, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';

import '../components/util/css/Page.css';
import { Link, useLocation, useParams } from 'react-router-dom'
import { getJson, getBigJson } from "../components/util/json"
import { useEffect, useState } from 'react';


import Cmr from "../components/Cmr"
import CmrList from '../components/CmrList';
import { constructOutline } from 'ionicons/icons';
import { getUserById } from '../dataservice';
import { use } from 'i18next';





const Placeholder: React.FC = () => {

  const location = useLocation<any>();

  const [cmrCheck, setCmrCheck] = useState(false);

  const [userToken, setUserToken] = useState<any>();
  const [cmrCode2, setCmrCode2] = useState<any>();


  const [userId, setUserId] = useState<any>();

  const [cmrData, setCmrData] = useState<Array<Object>>([]);

  const jsonItem = getJson();
  const bigJsonItem = getBigJson();




  useEffect(() => {

    /*

    getUserById(location.state.id).then((c: any) => {
      const user = c.values[0];

      console.log("Tentou11123333");
      console.log(c.values)
      console.log("Tentou111");
      console.log(user)
      console.log(user.token)
     // setUserToken(user.token);


      fetch('https://try.bizcargo.com/api/cmr/cmr-documents?active=true&completed=false&daysFilter=0&page=0&size=10&sort=created_date,DESC&template=false', {
        headers: {
          'Authorization': 'Bearer ' + user.token,
          'Accept': 'application/json',
          'Content-type': 'application/json'
        },
        method: 'GET'
      })
        .then(response => response.json())
        .then((response) => {
          if (response) {
            console.log("responseee");
            console.log(response)
            console.log("Tentou222");
            console.log(response.content)
            setCmrData(response.content)
            console.log("Tentoucccccc222");
            console.log(cmrData)
           
            

          }
        }).catch((err) => {
          alert('Login Errado');
        });
        console.log("Tentoucccccc222");
        console.log(cmrData)

    });

*/

  }, []);


  const CmrClick = (cmrCode: any) => {

    setCmrCode2(cmrCode)
    setCmrCheck(true)

  };

 // console.log(cmrData)

  const words = bigJsonItem[0].loadingDate.split('T');


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
          <Cmr id={location.state.id} cmrCode={cmrCode2}  />

        ) : (
          <div>
            <CmrList id={location.state.id} cmrData={cmrData} CmrClick={CmrClick} />
          </div>
        )}




      </IonContent>

      <IonFooter className="ion-no-border">
        <IonToolbar>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default Placeholder;


