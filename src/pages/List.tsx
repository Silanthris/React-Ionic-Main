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

import { changeCode } from "../components/redux/slices/codeSlice"


const List: React.FC = () => {



  const idUser = useSelector((state: any) => state.id.value)

  console.log("id redux")
  console.log(idUser)

  const dispatch = useDispatch()

  const location = useLocation<any>();
  let history = useHistory();

  const [cmrCheck, setCmrCheck] = useState(false);

  const [userToken, setUserToken] = useState<any>();
  const [cmrCode2, setCmrCode2] = useState<any>();


  const [cmrData, setCmrData] = useState<Array<Object>>([]);

  const jsonItem = getJson();
  const bigJsonItem = getBigJson();

  const CmrClick = (cmrCode: any) => {

    dispatch(changeCode(cmrCode))

    history.push({

      pathname: '/file',
      state: { cmrCode: cmrCode }

    })


  };

  return (
    <IonPage>
      <IonHeader>

        <IonToolbar>

        </IonToolbar>

      </IonHeader>

      <IonContent fullscreen>

          <div>
            <CmrList CmrClick={CmrClick} />
          </div>

      </IonContent>

    </IonPage>
  );
};

export default List;


