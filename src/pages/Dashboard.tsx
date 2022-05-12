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


import { add, build, personAdd, trash, wifi } from "ionicons/icons";
import { personCircle, settingsOutline } from "ionicons/icons";


import './Home.css';
import { Grid, Paper, styled } from '@mui/material';

const Dashboard: React.FC = () => {


  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: 'dark',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));



  return (


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

                <IonCardContent className="ion-text-center">
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

                  <BottomNavigationAction label="Perfis" icon={<AccountBoxIcon />} />

                </BottomNavigation>
              </Box>

            </IonCol>

          </IonRow>

        </IonGrid>
      </div>
    </IonPage>
  );
};

export default Dashboard;