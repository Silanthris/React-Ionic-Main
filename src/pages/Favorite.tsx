import { IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenu, IonMenuButton, IonPage, IonRow, IonSlide, IonSlides, IonTitle, IonToolbar } from '@ionic/react';

import '../components/util/css/Page.css';
import { Link, useHistory, useLocation, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';


import Cargo from "../components/Cmr/Cargo"
import Documents from '../components/Cmr/Documents';
import Principal from "../components/Cmr/Principal"
import Cmr from "../components/Cmr/Cmr"
import Instructions from '../components/Cmr/Instructions';
import Carrier from '../components/Cmr/Carrier';
import Tobe from '../components/Cmr/Tobe';
import CmrFile from '../components/CmrFile';
import BlFile from '../components/BlFile';


import { getCmrbyId, getUserById, getUtility } from '../dataservice';
import { ReactComponent as BizCargo } from '../components/images/BizCargo.svg';
import { ReactComponent as IconHome } from '../components/images/icon_home.svg';
import { ReactComponent as IconDocs } from '../components/images/icon_view_docs.svg';
import { ReactComponent as IconDocument } from '../components/images/icon_list_docs.svg';
import { ReactComponent as IconSair } from '../components/images/icon_sair.svg';
import { ReactComponent as IconFav } from '../components/images/favourite.svg';
import { ReactComponent as IconSwipe } from '../components/images/icon_view_swipe.svg';
import { ReactComponent as IconPdf } from '../components/images/icon_view_pdf.svg';
import { ReactComponent as IconScroll } from '../components/images/icon_view_scroll.svg';
import { use } from 'i18next';

import { useSelector, useDispatch } from 'react-redux'
import { fileContent } from "../components/redux/slices/counterSlice"
import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material';
import { changeId } from '../components/redux/slices/idSlice';

const Favorite: React.FC = () => {

    const dispatch = useDispatch()

    let history = useHistory();

    const location = useLocation<any>();

    const [idUser, setIdUser] = useState<string>("");

    const [TypeCheck, setTypeCheck] = useState(false);

    const [cmrData, setCmrData] = useState<Array<any>>([]);

    const [cmrData2, setCmrData2] = useState<Array<any>>([]);

    const [cmrDataBd, setCmrDataBd] = useState([]);

    useEffect(() => {

        getUtility().then((c: any) => {
            const utility = c;

            console.log("databse id uytility favorite")

            console.log(utility.values[0].idUser)

            setIdUser(utility.values[0].idUser)

            getCmrbyId(utility.values[0].idUser).then((c: any) => {



                setCmrData(c);
                setCmrData2(c);

                console.log("yasuosss")
                console.log(cmrData)
                console.log(c)

            })

        });

    }, []);


    useEffect(() => {

        console.log("cmnrdfata")
        console.log(cmrData)

    }, [cmrData]);


    console.log(idUser)

    console.log("id user File")

    const handleIcon = (type: boolean) => {
        return (event: React.MouseEvent) => {
            setTypeCheck(type)
        }
    }


    return (
        <IonPage>

            <IonHeader >

                <IonToolbar style={{ '--background': 'rgb(29,146,191)' }} >

                    <IonRow style={{ 'display': 'flex' }}>

                        <IonCol size='6' style={{ height: '50px', padding: '0px' }} >

                            <BizCargo style={{ width: "100px", height: "45px", paddingLeft: "15px", paddingBottom: "0px" }} />

                        </IonCol>

                        <IonCol size='2' style={{ height: '50px' }}  >

                            <div style={{ background: 'rgb(29,146,191)', height: '40px', width: '40px' }}  >

                                <IconFav style={{ height: '40px', width: '40px', fill: 'white' }} />

                            </div>

                        </IonCol>

                        <IonCol size='2' style={{ height: '50px' }} >

                            <div style={{ background: 'rgb(29,146,191)', height: '40px', width: '40px' }}  >

                                <IconScroll onClick={handleIcon(true)} style={{ height: '40px', width: '40px' }} />

                            </div>

                        </IonCol>

                        <IonCol size='2' style={{ height: '50px' }} >

                            <div style={{ background: 'rgb(29,146,191)', height: '40px', width: '40px' }}  >

                                <IconSwipe onClick={handleIcon(false)} style={{ height: '40px', width: '40px' }} />

                            </div>

                        </IonCol>



                    </IonRow>

                </IonToolbar>

            </IonHeader>

            <IonContent style={{ '--ion-background-color': 'rgb(245,245,246)' }}>

                

            </IonContent>


            <Box style={{ position: "fixed", width: "100%", bottom: "0", right: "0" }}  >
                <BottomNavigation

                    style={{ background: 'rgb(229,229,229)' }}

                >

                    <BottomNavigationAction href='/list/dashboard' style={{ paddingLeft: "0px", paddingRight: "0px" }} className="	.Mui-selected" label="Entrar" icon={<IconHome />} />

                    <BottomNavigationAction href='/list/file' style={{ paddingLeft: "0px", paddingRight: "0px" }} label="Perfis" icon={<IconDocs />} />

                    <BottomNavigationAction href='/list' style={{ paddingLeft: "0px", paddingRight: "0px" }} className="	.Mui-selected" label="Entrar" icon={<IconDocument />} />

                    <BottomNavigationAction href='/' style={{ paddingLeft: "0px", paddingRight: "0px" }} label="Perfis" icon={<IconSair />} />


                </BottomNavigation>
            </Box>



        </IonPage>
    );
};

export default Favorite;


/*
 {cmrData.map((json: any) => (

                    <>

                        <IonCard  className="card" style={{ '--background': 'white', 'height': '145px' }}>

                            <IonGrid style={{ 'padding': '0px' }} >

                                <IonRow>

                                    <IonCol size='4'

                                        style={{
                                            'background': 'rgb(29,146,191)', 'color': 'white', 'text-align': 'center', 'alignItems': 'center', 'display': 'flex', 'justifyContent': 'center'

                                        }}>


                                    </IonCol>

                                    <IonCol size='6'>

                                    </IonCol>


                                </IonRow>


                            </IonGrid>

                            <IonCardContent style={{ 'padding': '0px' }} >
                                <IonCardTitle style={{ 'color': 'black', 'text-align': 'left', 'padding-left': '20px', 'font-family': 'arial', 'fontStyle': 'italic', 'fontSize': '15px', 'padding-top': '5px' }} >Empresa Imperativa LDA</IonCardTitle>
                                <IonGrid>
                                    <IonRow>
                                        <IonCol className="ion-align-self-center" style={{ 'color': 'lightgrey', 'padding': '0px', 'fontFamily': 'arial', 'padding-left': '10px' }} size="4"> Loading </IonCol>
                                        <IonCol style={{ 'color': 'black', 'padding': '0px', 'fontSize': '10px', 'fontFamily': 'arial' }} className="ion-align-self-center" size="8"> 2022/05/04 12:00 </IonCol>
                                    </IonRow>
                                    <IonRow>
                                        <IonCol className="ion-align-self-center" style={{ 'color': 'lightgrey', 'padding': '0px', 'fontFamily': 'arial', 'padding-left': '10px' }} size="4"> Origin  </IonCol>
                                        <IonCol style={{ 'color': 'black', 'padding': '0px', 'fontSize': '10px', 'fontFamily': 'arial' }} className="ion-align-self-center" size="8">  </IonCol>
                                    </IonRow>
                                    <IonRow>
                                        <IonCol className="ion-align-self-center" style={{ 'color': 'lightgrey', 'padding': '0px', 'fontFamily': 'arial', 'padding-left': '10px' }} size="4"> Delviery </IonCol>
                                        <IonCol style={{ 'color': 'black', 'padding': '0px', 'fontSize': '10px', 'fontFamily': 'arial' }} className="ion-align-self-center" size="8"> 2022/05/05 18:00 </IonCol>
                                    </IonRow>
                                    <IonRow>
                                        <IonCol className="ion-align-self-center" style={{ 'color': 'lightgrey', 'padding': '0px', 'fontFamily': 'arial', 'padding-left': '10px' }} size="4"> Destination </IonCol>
                                        <IonCol style={{ 'color': 'black', 'padding': '0px', 'fontSize': '10px', 'fontFamily': 'arial' }} className="ion-align-self-center" size="8">  </IonCol>
                                    </IonRow>
                                </IonGrid>

                            </IonCardContent>
                        </IonCard>
                    </>
                ))}
*/