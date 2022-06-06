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


import { getUserById } from '../dataservice';
import { ReactComponent as BizCargo } from '../components/images/BizCargo.svg';
import { ReactComponent as IconHome } from '../components/images/icon_home.svg';
import { ReactComponent as IconDocs } from '../components/images/icon_view_docs.svg';
import { ReactComponent as IconDocument } from '../components/images/icon_list_docs.svg';
import { ReactComponent as IconSair } from '../components/images/icon_sair.svg';
import { ReactComponent as IconSwipe } from '../components/images/icon_view_swipe.svg';
import { ReactComponent as IconPdf } from '../components/images/icon_view_pdf.svg';
import { ReactComponent as IconScroll } from '../components/images/icon_view_scroll.svg';
import { use } from 'i18next';

import { useSelector, useDispatch } from 'react-redux'
import { fileContent } from "../components/redux/slices/counterSlice"
import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material';

const File: React.FC = () => {

    const dispatch = useDispatch()
    let history = useHistory();
    const location = useLocation<any>();
    const idUser = useSelector((state: any) => state.id.value)
    const [TypeCheck, setTypeCheck] = useState(false);

    const [type, setType] = useState<String>("");

    setType(useSelector((state: any) => state.type.value))

    const slideOpts = {
        initialSlide: 0,
        speed: 300
    };

    const handleClick1 = () => {
        return (event: React.MouseEvent) => {
            history.push({ pathname: '/list/dashboard' })
        }
    }

    const handleClick2 = () => {
        return (event: React.MouseEvent) => {
            history.push({ pathname: '/list/file' })
        }
    }

    const handleClick3 = () => {
        return (event: React.MouseEvent) => {
            history.push({ pathname: '/list' })
        }
    }

    const handleClick4 = () => {
        return (event: React.MouseEvent) => {
            history.push({ pathname: '/' })
        }
    }

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

                        <IonCol size='6' style={{ height: '50px' }} >

                            <BizCargo style={{ width: "100px", height: "45px", paddingLeft: "15px", paddingBottom: "3px" }} />

                        </IonCol>

                        <IonCol size='2' style={{ height: '50px' }}  >

                            <div style={{ background: 'rgb(29,146,191)', height: '40px', width: '40px' }}  >

                                <IconPdf style={{ height: '40px', width: '40px' }} />

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


                {type === "Bl" &&
                    <>
                        <BlFile TypeCheck={TypeCheck} />
                    </>
                }

                {type === "Cmr" &&
                    <>
                        <CmrFile TypeCheck={TypeCheck} />
                    </>
                }


            </IonContent>


            <Box style={{ position: "fixed", width: "100%", bottom: "0", right: "0" }}  >
                <BottomNavigation

                    style={{ background: 'rgb(229,229,229)' }}

                >
                    <BottomNavigationAction onClick={handleClick1()} style={{ paddingLeft: "0px", paddingRight: "0px" }} className="	.Mui-selected" label="Entrar" icon={<IconHome />} />

                    <BottomNavigationAction onClick={handleClick2()} style={{ paddingLeft: "0px", paddingRight: "0px" }} label="Perfis" icon={<IconDocs />} />

                    <BottomNavigationAction onClick={handleClick3()} style={{ paddingLeft: "0px", paddingRight: "0px" }} className="	.Mui-selected" label="Entrar" icon={<IconDocument />} />

                    <BottomNavigationAction onClick={handleClick4()} style={{ paddingLeft: "0px", paddingRight: "0px" }} label="Perfis" icon={<IconSair />} />


                </BottomNavigation>
            </Box>



        </IonPage>
    );
};

export default File;
