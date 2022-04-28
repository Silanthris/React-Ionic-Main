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
import { useSelector, useDispatch } from 'react-redux'

import { incrementByAmount } from "../components/redux/slices/counterSlice"


const List: React.FC = () => {

  const cmrData3 = useSelector((state : any) => state.counter.value)


  const location = useLocation<any>();
  let history = useHistory();

  const [cmrCheck, setCmrCheck] = useState(false);

  const [userToken, setUserToken] = useState<any>();
  const [cmrCode2, setCmrCode2] = useState<any>();


  const [cmrData, setCmrData] = useState<Array<Object>>([]);

  const jsonItem = getJson();
  const bigJsonItem = getBigJson();




  const CmrClick = (cmrCode: any) => {

    console.log("cmr")
    console.log(cmrCode)

    history.push({

      pathname: '/file',
      state: { id: location.state.id, cmrCode: cmrCode }

    })

    

  };

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





        </IonToolbar>

      </IonHeader>

      <IonContent fullscreen>

          <div>
            <CmrList id={location.state.id} CmrClick={CmrClick} />
          </div>

      </IonContent>

    </IonPage>
  );
};

export default List;


