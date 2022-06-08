import React, { useEffect, useState } from "react";
import { IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';



import { useSelector, useDispatch } from 'react-redux'

import { Box } from "@mui/material";


type Props = {
    blData: any
}

const Bl1: React.FC<Props> = ({ blData }) => {


    return (

        <Box>

            <IonCard className="card" style={{ '--background': 'white', 'height': '230px' }}>

                <IonGrid style={{ 'padding': '0px' }} >

                    <IonRow>

                        <IonCol size='1' style={{ 'background': 'rgb(29,146,191)', 'color': 'white', 'text-align': 'left' }}>

                        </IonCol>

                        <IonCol size='11' style={{ 'background': 'rgb(29,146,191)', 'color': 'white', 'text-align': 'left' }}>
                            Ship From
                        </IonCol>


                    </IonRow>


                </IonGrid>

                <IonCardContent style={{ 'padding': '0px' }} >

                    <IonGrid>

                        <IonRow style={{ 'border-style': 'solid', 'border-color': 'lightgrey', 'border-width': '1px', 'padding': '5px', 'margin-top': '5px' }}>
                            <IonCol style={{ 'color': 'black', 'padding': '0px', 'fontSize': '6px', 'fontFamily': 'arial', }} className="ion-align-self-center" size="2"> Name </IonCol>

                            <IonCol style={{ 'color': 'black', 'padding': '0px', 'fontSize': '14px', 'fontFamily': 'arial', 'text-align': 'center' }} className="ion-align-self-center" size="10"> 2022/05/04 12:00 </IonCol>
                        </IonRow>
                        <IonRow style={{ 'border-style': 'solid', 'border-color': 'lightgrey', 'border-width': '1px', 'padding': '5px', 'margin-top': '5px' }}>
                            <IonCol style={{ 'color': 'black', 'padding': '0px', 'fontSize': '6px', 'fontFamily': 'arial', }} className="ion-align-self-center" size="2"> Adress </IonCol>

                            <IonCol style={{ 'color': 'black', 'padding': '0px', 'fontSize': '14px', 'fontFamily': 'arial', 'text-align': 'center' }} className="ion-align-self-center" size="10"> 2022/05/04 12:00 </IonCol>
                        </IonRow>
                        <IonRow style={{ 'border-style': 'solid', 'border-color': 'lightgrey', 'border-width': '1px', 'padding': '5px', 'margin-top': '5px' }}>
                            <IonCol style={{ 'color': 'black', 'padding': '0px', 'fontSize': '6px', 'fontFamily': 'arial', }} className="ion-align-self-center" size="2"> City/State/Zip </IonCol>

                            <IonCol style={{ 'color': 'black', 'padding': '0px', 'fontSize': '14px', 'fontFamily': 'arial', 'text-align': 'center' }} className="ion-align-self-center" size="10"> 2022/05/04 12:00 </IonCol>
                        </IonRow>
                        <IonRow style={{ 'border-style': 'solid', 'border-color': 'lightgrey', 'border-width': '1px', 'padding': '5px', 'margin-top': '5px' }}>
                            <IonCol style={{ 'color': 'black', 'padding': '0px', 'fontSize': '6px', 'fontFamily': 'arial', }} className="ion-align-self-center" size="2"> SID# </IonCol>

                            <IonCol style={{ 'color': 'black', 'padding': '0px', 'fontSize': '14px', 'fontFamily': 'arial', 'text-align': 'center' }} className="ion-align-self-center" size="10"> 2022/05/04 12:00 </IonCol>
                        </IonRow>
                        <IonRow style={{ 'border-style': 'solid', 'border-color': 'lightgrey', 'border-width': '1px', 'padding': '5px', 'margin-top': '5px' }}>
                            <IonCol style={{ 'color': 'black', 'padding': '0px', 'fontSize': '6px', 'fontFamily': 'arial', }} className="ion-align-self-center" size="2"> FOB </IonCol>

                            <IonCol style={{ 'color': 'black', 'padding': '0px', 'fontSize': '14px', 'fontFamily': 'arial', 'text-align': 'center' }} className="ion-align-self-center" size="10"> 2022/05/04 12:00 </IonCol>
                        </IonRow>



                    </IonGrid>

                </IonCardContent>
            </IonCard>

            <IonCard className="card" style={{ '--background': 'white', 'height': '230px' }}>

                <IonGrid style={{ 'padding': '0px' }} >

                    <IonRow>

                        <IonCol size='1' style={{ 'background': 'rgb(29,146,191)', 'color': 'white', 'text-align': 'left' }}>

                        </IonCol>

                        <IonCol size='11' style={{ 'background': 'rgb(29,146,191)', 'color': 'white', 'text-align': 'left' }}>
                            Ship To
                        </IonCol>


                    </IonRow>


                </IonGrid>

                <IonCardContent style={{ 'padding': '0px' }} >

                    <IonGrid>

                        <IonRow style={{ 'border-style': 'solid', 'border-color': 'lightgrey', 'border-width': '1px', 'padding': '5px', 'margin-top': '5px' }}>
                            <IonCol style={{ 'color': 'black', 'padding': '0px', 'fontSize': '6px', 'fontFamily': 'arial', }} className="ion-align-self-center" size="2"> Name </IonCol>

                            <IonCol style={{ 'color': 'black', 'padding': '0px', 'fontSize': '14px', 'fontFamily': 'arial', 'text-align': 'center' }} className="ion-align-self-center" size="10"> 2022/05/04 12:00 </IonCol>
                        </IonRow>
                        <IonRow style={{ 'border-style': 'solid', 'border-color': 'lightgrey', 'border-width': '1px', 'padding': '5px', 'margin-top': '5px' }}>
                            <IonCol style={{ 'color': 'black', 'padding': '0px', 'fontSize': '6px', 'fontFamily': 'arial', }} className="ion-align-self-center" size="2"> Adress </IonCol>

                            <IonCol style={{ 'color': 'black', 'padding': '0px', 'fontSize': '14px', 'fontFamily': 'arial', 'text-align': 'center' }} className="ion-align-self-center" size="10"> 2022/05/04 12:00 </IonCol>
                        </IonRow>
                        <IonRow style={{ 'border-style': 'solid', 'border-color': 'lightgrey', 'border-width': '1px', 'padding': '5px', 'margin-top': '5px' }}>
                            <IonCol style={{ 'color': 'black', 'padding': '0px', 'fontSize': '6px', 'fontFamily': 'arial', }} className="ion-align-self-center" size="2"> City/State/Zip </IonCol>

                            <IonCol style={{ 'color': 'black', 'padding': '0px', 'fontSize': '14px', 'fontFamily': 'arial', 'text-align': 'center' }} className="ion-align-self-center" size="10"> 2022/05/04 12:00 </IonCol>
                        </IonRow>
                        <IonRow style={{ 'border-style': 'solid', 'border-color': 'lightgrey', 'border-width': '1px', 'padding': '5px', 'margin-top': '5px' }}>
                            <IonCol style={{ 'color': 'black', 'padding': '0px', 'fontSize': '6px', 'fontFamily': 'arial', }} className="ion-align-self-center" size="2"> SID# </IonCol>

                            <IonCol style={{ 'color': 'black', 'padding': '0px', 'fontSize': '14px', 'fontFamily': 'arial', 'text-align': 'center' }} className="ion-align-self-center" size="10"> 2022/05/04 12:00 </IonCol>
                        </IonRow>
                        <IonRow style={{ 'border-style': 'solid', 'border-color': 'lightgrey', 'border-width': '1px', 'padding': '5px', 'margin-top': '5px' }}>
                            <IonCol style={{ 'color': 'black', 'padding': '0px', 'fontSize': '6px', 'fontFamily': 'arial', }} className="ion-align-self-center" size="2"> FOB </IonCol>

                            <IonCol style={{ 'color': 'black', 'padding': '0px', 'fontSize': '14px', 'fontFamily': 'arial', 'text-align': 'center' }} className="ion-align-self-center" size="10"> 2022/05/04 12:00 </IonCol>
                        </IonRow>
                        <IonRow style={{ 'border-style': 'solid', 'border-color': 'lightgrey', 'border-width': '1px', 'padding': '5px', 'margin-top': '5px' }}>
                            <IonCol style={{ 'color': 'black', 'padding': '0px', 'fontSize': '6px', 'fontFamily': 'arial', }} className="ion-align-self-center" size="2"> Location </IonCol>

                            <IonCol style={{ 'color': 'black', 'padding': '0px', 'fontSize': '14px', 'fontFamily': 'arial', 'text-align': 'center' }} className="ion-align-self-center" size="10"> 2022/05/04 12:00 </IonCol>
                        </IonRow>



                    </IonGrid>

                </IonCardContent>
            </IonCard>

        </Box>


    );
};

export default Bl1;


