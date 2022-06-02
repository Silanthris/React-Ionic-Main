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

    const handleClick1 = () => {
        return (event: React.MouseEvent) => {
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
                                                        <b>Tarefas</b>
                                                    </div>
                                                </IonCardContent>
                                            </IonCard>
                                        </IonCol>



                                    </IonRow>

                                    <IonRow>
                                        <IonCol >

                                            <Box style={{ position: "fixed", width: "100%", bottom: "0", right: "0", background: 'grey' }}  >
                                                <BottomNavigation

                                                    style={{ background: 'rgb(229,229,229)' }}
                                                    showLabels

                                                >
                                                    <BottomNavigationAction className="	.Mui-selected" label="Entrar" icon={<HomeIcon />} />

                                                    <BottomNavigationAction onClick={handleClick1()} label="Perfis" icon={<AccountBoxIcon />} />

                                                </BottomNavigation>
                                            </Box>

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