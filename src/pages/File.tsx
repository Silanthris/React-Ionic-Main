import { IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenu, IonMenuButton, IonPage, IonRow, IonSlide, IonSlides, IonTitle, IonToolbar } from '@ionic/react';

import '../components/util/css/Page.css';
import { Link, useHistory, useLocation, useParams } from 'react-router-dom'
import { getJson, getBigJson } from "../components/util/json"
import { useEffect, useState } from 'react';

import MitmyNidLogo from "../components/images/MMN_V_RGB.png";

import Cargo from "../components/Cmr/Cargo"
import Principal from "../components/Cmr/Principal"
import Cmr from "../components/Cmr"
import Instructions from '../components/Cmr/Instructions';
import Carrier from '../components/Cmr/Carrier';

import { constructOutline } from 'ionicons/icons';

import { getUserById } from '../dataservice';

import { use } from 'i18next';

import { useSelector, useDispatch } from 'react-redux'

import { incrementByAmount } from "../components/redux/slices/counterSlice"

import { menuChoice } from '../Enums/Enums'
import { changeChoice } from '../components/redux/slices/menuchoiceSlice';

const File: React.FC = () => {

    const cmrData3 = useSelector((state: any) => state.counter.value)

    const idUser = useSelector((state: any) => state.id.value)

    const cmrCode = useSelector((state: any) => state.code.value)

    const menuChoice = useSelector((state: any) => state.choice.value)

    const [menuUrl, setMenuUrl] = useState<menuChoice>(menuChoice.all);

    const { name } = useParams<any>();

    const [cmrData2, setCmrData2] = useState<any>([]);

    const location = useLocation<any>();

    console.log(name)

    const dispatch = useDispatch()


    useEffect(() => {



        switch (name) {
            case 'principal':
                setMenuUrl(menuChoice.principal)
                break;
            case 'cargo':
                setMenuUrl(menuChoice.cargo)
                break;
            case 'instructions':
                setMenuUrl(menuChoice.instructions)
                break;
            case 'carrier':
                setMenuUrl(menuChoice.instructions)
                break;
            case 'entire':
                setMenuUrl(menuChoice.all)
                break;
            default:
                setMenuUrl(menuChoice.all)
        }

    }, [name]);


    useEffect(() => {




        getUserById(idUser).then((c: any) => {
            const user = c.values[0];


            fetch(`https://try.bizcargo.com/api/cmr/cmr-documents/${cmrCode}/1?type=active`, {
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

                        const atuamae = response
                        setCmrData2(atuamae)
                        dispatch(incrementByAmount(atuamae))

                    }
                }).catch((err) => {
                    alert('Login Errado');
                });



        });


    }, []);

    const slideOpts = {
        initialSlide: 1,
        speed: 400
    };


    return (
        <IonPage>
            <IonHeader>

                <IonToolbar>

                    <img style={{ width: 40 }} src={MitmyNidLogo} />

                    <IonButtons slot="end">
                        <IonMenuButton autoHide={false} />
                    </IonButtons>

                </IonToolbar>

            </IonHeader>

            <IonContent fullscreen>

                <IonSlides pager={true} options={slideOpts}>

                    <IonSlide>
                        <div style={{ display: 'block' }}>
                            <Cmr />
                        </div>

                    </IonSlide>
                    <IonSlide>
                        <Cargo />
                    </IonSlide>
                    <IonSlide>
                        <Principal />
                    </IonSlide>
                    <IonSlide>
                        <Instructions />
                    </IonSlide>
                    <IonSlide>
                        <Carrier />
                    </IonSlide>

                </IonSlides>


            </IonContent>





        </IonPage>
    );
};

export default File;