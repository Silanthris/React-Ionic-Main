import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

import {
    IonButton,
    IonButtons,
    IonCard,
    IonCardContent,
    IonCol,
    IonFooter,
    IonGrid,
    IonIcon,
    IonItem,
    IonLabel,
    IonRow,
    IonText,
} from "@ionic/react";


import React, { useEffect, useState } from "react";
import { ReactComponent as BizCargo } from '../components/images/BizCargo.svg';
import { ReactComponent as IconHome } from '../components/images/icon_home.svg';
import { ReactComponent as IconDocs } from '../components/images/icon_view_docs.svg';
import { ReactComponent as IconDocument } from '../components/images/icon_list_docs.svg';
import { ReactComponent as IconSair } from '../components/images/icon_sair.svg';
import { ReactComponent as IconSwipe } from '../components/images/icon_view_swipe.svg';
import { ReactComponent as IconPdf } from '../components/images/icon_view_pdf.svg';
import { ReactComponent as IconScroll } from '../components/images/icon_view_scroll.svg';

import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Button from '@mui/material/Button';

import AccountBoxIcon from '@mui/icons-material/AccountBox';
import HomeIcon from '@mui/icons-material/Home';

import bigimage from "../components/images/banner_login.png"

import iconDocument from "../components/images/icon_documentos.png"

import iconTarefas from "../components/images/icon_tarefas.png"

import ConfAcesso from '../components/ConfAcesso';


import { useHistory } from 'react-router';
import { ConfType } from '../Enums/Enums';

import { useSelector, useDispatch } from 'react-redux'


const Dashboard: React.FC<any> = () => {

    console.log("dashboardddd")

    let history = useHistory();

    const idUser = useSelector((state: any) => state.id.value)

    const [ConfCheck, setConfCheck] = useState(false);

    const handleClick = () => {
        return (event: React.MouseEvent) => {
            event.preventDefault();
            history.push({ pathname: '/list' })
        }
    }

    const handleClickFav = () => {
        return (event: React.MouseEvent) => {
            event.preventDefault();
            history.push({ pathname: '/list/fav' })
        }
    }

    const handleClick2 = () => {
        return (event: React.MouseEvent) => {
            event.preventDefault();
            setConfCheck(true)
        }
    }


    return (

        <IonPage>

            <IonContent>


                {ConfCheck ? (


                    <ConfAcesso id={idUser} setConfCheck={setConfCheck} confType={ConfType.update} />


                ) : (


                    <div>

                        <IonPage style={{ background: 'rgb(245,245,246)' }}>


                            <div>
                                <img style={{ width: "100%" }} src={bigimage} alt="avatar" />


                                <IonGrid>

                                    <IonRow>



                                        <IonCol size="6">
                                            <IonCard
                                                style={{ background: "white", position: "relative" }}

                                            >

                                                <div className="ion-text-center ion-margin-top">
                                                    <IonRow>
                                                        <IonCol>
                                                            <img style={{ height: "40px", width: "40px" }} src={iconDocument}></img>
                                                        </IonCol>
                                                    </IonRow>
                                                </div>

                                                <IonCardContent onClick={handleClick()} className="ion-text-center">
                                                    <div style={{ color: "grey" }}>
                                                        <b>Documentos</b>
                                                    </div>
                                                </IonCardContent>
                                            </IonCard>
                                        </IonCol>

                                        <IonCol size="6">
                                            <IonCard
                                                style={{ background: "white", position: "relative" }}
                                                onClick={handleClick2()}
                                            >

                                                <div className="ion-text-center ion-margin-top">
                                                    <IonRow>
                                                        <IonCol>
                                                            <img style={{ height: "40px", width: "40px" }} src={iconTarefas}></img>
                                                        </IonCol>
                                                    </IonRow>
                                                </div>

                                                <IonCardContent className="ion-text-center">
                                                    <div style={{ color: "grey" }}>
                                                        <b>Perfil</b>
                                                    </div>
                                                </IonCardContent>
                                            </IonCard>
                                        </IonCol>



                                    </IonRow>


                                    <IonRow>
                                        <IonCol >

                                        </IonCol>

                                    </IonRow>

                                </IonGrid>
                            </div>
                        </IonPage>

                    </div>

                )}

            </IonContent>


        </IonPage>
    );
};

export default Dashboard;

/*             <Box style={{ position: "fixed", width: "100%", bottom: "0", right: "0", background: 'grey' }}  >
                                                <BottomNavigation

                                                    style={{ background: 'rgb(229,229,229)' }}
                                                    showLabels

                                                >
                                                    <BottomNavigationAction href='/list/dashboard' style={{ paddingLeft: "0px", paddingRight: "0px" }} className="	.Mui-selected" label="Entrar" icon={<IconHome />} />

                                                    <BottomNavigationAction href='/list/file' style={{ paddingLeft: "0px", paddingRight: "0px" }} label="Perfis" icon={<IconDocs />} />

                                                    <BottomNavigationAction href='/list' style={{ paddingLeft: "0px", paddingRight: "0px" }} className="	.Mui-selected" label="Entrar" icon={<IconDocument />} />

                                                    <BottomNavigationAction href='/' style={{ paddingLeft: "0px", paddingRight: "0px" }} label="Perfis" icon={<IconSair />} />

                                                </BottomNavigation>
                                            </Box>

                                            */