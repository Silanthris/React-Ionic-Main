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


import { ReactComponent as BizCargo } from '../components/images/BizCargo.svg';

import { ReactComponent as IconHome } from '../components/images/icon_home.svg';

import { ReactComponent as IconSearch } from '../components/images/icon_search.svg';

import { ReactComponent as IconDocs } from '../components/images/icon_view_docs.svg';

import { ReactComponent as IconDocument } from '../components/images/icon_list_docs.svg';

import { ReactComponent as IconMore } from '../components/images/icon_more.svg';

import { ReactComponent as IconSair } from '../components/images/icon_sair.svg';


import { ReactComponent as IconPdf } from '../components/images/icon_view_pdf.svg';

import { ReactComponent as IconScroll } from '../components/images/icon_view_scroll.svg';

import { use } from 'i18next';

import { useSelector, useDispatch } from 'react-redux'

import { incrementByAmount } from "../components/redux/slices/counterSlice"

import { menuChoice } from '../Enums/Enums'
import { changeChoice } from '../components/redux/slices/menuchoiceSlice';
import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material';

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
        initialSlide: 0,
        speed: 400
    };


    return (
        <IonPage>

            <IonHeader >

                <IonToolbar style={{ '--background': 'rgb(29,146,191)' }} >


                    <BizCargo style={{ width: "100px", height: "45px", paddingLeft: "15px", paddingTop: "10px" }} />


                </IonToolbar>

            </IonHeader>

            <IonContent style={{ '--ion-background-color': 'rgb(245,245,246)' }}>


                <IonRow style={{ 'display': 'flex' }}>


                    <IonCol size='6' style={{ height: '50px' }} >

                        <h5 style={{ 'color': 'grey', 'margin': '5px' }}> CMR  <br />  <i style={{ 'color': 'grey', 'fontSize': '10px', 'top': '0px', 'verticalAlign': 'top' }}> Que a morte me leve </i>  </h5>
                        <br />


                    </IonCol>

                    <IonCol size='3' style={{ height: '50px' }}  >

                        <div style={{ background: 'rgb(29,146,191)', height: '50px', width: '50px' }}  >

                            <IconPdf style={{ height: '50px', width: '50px' }} />

                        </div>

                    </IonCol>

                    <IonCol size='3' style={{ height: '50px' }} >

                        <div style={{ background: 'rgb(29,146,191)', height: '50px', width: '50px' }}  >

                            <IconScroll style={{ height: '50px', width: '50px' }} />

                        </div>

                    </IonCol>


                </IonRow>


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


            <Box style={{ position: "fixed", width: "100%", bottom: "0", right: "0" }}  >
                <BottomNavigation

                    style={{ background: 'rgb(229,229,229)' }}

                >
                    <BottomNavigationAction style={{ paddingLeft: "0px", paddingRight: "0px" }} className="	.Mui-selected" label="Entrar" icon={<IconHome />} />

                    <BottomNavigationAction style={{ paddingLeft: "0px", paddingRight: "0px" }} label="Perfis" icon={<IconDocs />} />

                    <BottomNavigationAction style={{ paddingLeft: "0px", paddingRight: "0px" }} className="	.Mui-selected" label="Entrar" icon={<IconDocument />} />

                    <BottomNavigationAction style={{ paddingLeft: "0px", paddingRight: "0px" }} label="Perfis" icon={<IconSair />} />


                </BottomNavigation>
            </Box>



        </IonPage>
    );
};

export default File;