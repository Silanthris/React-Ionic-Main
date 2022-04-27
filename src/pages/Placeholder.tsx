import { IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenu, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';

import '../components/util/css/Page.css';
import { Link, useHistory, useLocation, useParams } from 'react-router-dom'
import { getJson, getBigJson } from "../components/util/json"
import { useEffect, useState } from 'react';


import Cmr from "../components/Cmr"
import CmrList from '../components/CmrList';
import { constructOutline } from 'ionicons/icons';
import { getUserById } from '../dataservice';
import { use } from 'i18next';





const Placeholder: React.FC = () => {

  const { name } = useParams<{ name: string; }>();

  console.log(name)

  const location = useLocation<any>();
  let history = useHistory();

  const [cmrCheck, setCmrCheck] = useState(false);

  const [userToken, setUserToken] = useState<any>();
  const [cmrCode2, setCmrCode2] = useState<any>();


  const [userId, setUserId] = useState<any>();

  const [cmrData, setCmrData] = useState<Array<Object>>([]);

  const jsonItem = getJson();
  const bigJsonItem = getBigJson();




  const CmrClick = (cmrCode: any) => {

    setCmrCode2(cmrCode)
    setCmrCheck(true)

    history.push({
      pathname: '/placeholder',
      search: "?query=id",
      state: { id: location.state.id, cmrCode: cmrCode2 }
    })

  };

  // console.log(cmrData)

  const words = bigJsonItem[0].loadingDate.split('T');


  return (
    <IonPage>
      <IonHeader>

        <IonToolbar>

          <IonButtons slot="start">
            <IonButton color="danger" onClick={() => { setCmrCheck(false) }}>
              <IonIcon name="heart"></IonIcon>
              Yasuo
            </IonButton>
          </IonButtons>


          {cmrCheck ? (

            <IonButtons slot="end">
              <IonMenuButton autoHide={false} />
            </IonButtons>

          ) : (
            <>

            </>
          )}




        </IonToolbar>

      </IonHeader>

      <IonContent fullscreen>




        {cmrCheck ? (
          <Cmr id={location.state.id} cmrCode={cmrCode2} />

        ) : (
          <div>
            <CmrList id={location.state.id} cmrData={cmrData} CmrClick={CmrClick} />
          </div>
        )}




      </IonContent>

    </IonPage>
  );
};

export default Placeholder;


