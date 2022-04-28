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





const File: React.FC = () => {

    const cmrData3 = useSelector((state: any) => state.counter.value)


    const location = useLocation<any>();
    
    let history = useHistory();

    const [cmrCheck, setCmrCheck] = useState(false);

    const [userToken, setUserToken] = useState<any>();
    const [cmrCode2, setCmrCode2] = useState<any>();


    const [userId, setUserId] = useState<any>();

    const [cmrData, setCmrData] = useState<Array<Object>>([]);

    const jsonItem = getJson();
    const bigJsonItem = getBigJson();


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

                        <IonButtons slot="end">
                            <IonMenuButton autoHide={false} />
                        </IonButtons>

                </IonToolbar>

            </IonHeader>

            <IonContent fullscreen>

                <Cmr id={location.state.id} cmrCode={location.state.cmrCode} />

            </IonContent>

        </IonPage>
    );
};

export default File;