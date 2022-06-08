import React, { useEffect, useState } from "react";
import { IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';



import { useSelector, useDispatch } from 'react-redux'

import { Box } from "@mui/material";


type Props = {
    blData: any
}

const Bl3: React.FC<Props> = ({ blData }) => {


    return (

        <Box>



            <IonCard className="card" style={{ '--background': 'white', 'height': '260px' }}>

                <IonGrid style={{ 'padding': '0px' }} >

                    <IonRow>

                        <IonCol size='1' style={{ 'background': 'rgb(29,146,191)', 'color': 'white', 'text-align': 'left' }}>

                        </IonCol>

                        <IonCol size='11' style={{ 'background': 'rgb(29,146,191)', 'color': 'white', 'text-align': 'left' }}>
                            Carrier Name:
                        </IonCol>


                    </IonRow>


                </IonGrid>

                <IonCardContent style={{ 'padding': '0px' }} >

                    <IonGrid>

                        <IonRow style={{ 'border-style': 'solid', 'border-color': 'lightgrey', 'border-width': '1px', 'padding': '5px', 'margin-top': '5px' }}>
                            <IonCol style={{ 'color': 'black', 'padding': '0px', 'fontSize': '6px', 'fontFamily': 'arial', }} className="ion-align-self-center" size="2"> Carrier Name </IonCol>

                            <IonCol style={{ 'color': 'black', 'padding': '0px', 'fontSize': '14px', 'fontFamily': 'arial', 'text-align': 'center' }} className="ion-align-self-center" size="10"> Trailer Number </IonCol>
                        </IonRow>
                        <IonRow style={{ 'border-style': 'solid', 'border-color': 'lightgrey', 'border-width': '1px', 'padding': '5px', 'margin-top': '5px' }}>
                            <IonCol style={{ 'color': 'black', 'padding': '0px', 'fontSize': '6px', 'fontFamily': 'arial', }} className="ion-align-self-center" size="2"> Trailer Number </IonCol>

                            <IonCol style={{ 'color': 'black', 'padding': '0px', 'fontSize': '14px', 'fontFamily': 'arial', 'text-align': 'center' }} className="ion-align-self-center" size="10"> Seal Number </IonCol>
                        </IonRow>
                        <IonRow style={{ 'border-style': 'solid', 'border-color': 'lightgrey', 'border-width': '1px', 'padding': '5px', 'margin-top': '5px' }}>
                            <IonCol style={{ 'color': 'black', 'padding': '0px', 'fontSize': '6px', 'fontFamily': 'arial', }} className="ion-align-self-center" size="2"> Seal Numbe </IonCol>

                            <IonCol style={{ 'color': 'black', 'padding': '0px', 'fontSize': '14px', 'fontFamily': 'arial', 'text-align': 'center' }} className="ion-align-self-center" size="10"> 2022/05/04 12:00 </IonCol>
                        </IonRow>

                        <IonRow style={{ 'border-style': 'solid', 'border-color': 'lightgrey', 'border-width': '1px', 'padding': '5px', 'margin-top': '5px', 'height': '30px' }}>
                            <IonCol style={{ 'color': 'black', 'padding': '0px', 'fontSize': '6px', 'fontFamily': 'arial', }} className="ion-align-self-center" size="2"> SCAC </IonCol>

                            <IonCol style={{ 'color': 'black', 'padding': '0px', 'fontSize': '14px', 'fontFamily': 'arial', 'text-align': 'center' }} className="ion-align-self-center" size="10"> 2022/05/04 12:00 </IonCol>
                        </IonRow>



                        <IonRow style={{ 'border-style': 'solid', 'border-color': 'lightgrey', 'border-width': '1px', 'padding': '5px', 'margin-top': '5px', 'height': '70px' }}>
                            <IonCol style={{ 'color': 'black', 'padding': '0px', 'fontSize': '6px', 'fontFamily': 'arial', }} className="ion-align-self-center" size="2"> Pro number </IonCol>

                            <IonCol style={{ 'color': 'black', 'padding': '0px', 'fontSize': '14px', 'fontFamily': 'arial', 'text-align': 'center' }} className="ion-align-self-center" size="10"> 2022/05/04 12:00 </IonCol>
                        </IonRow>



                    </IonGrid>

                </IonCardContent>
            </IonCard>




            <IonCard className="card" style={{ '--background': 'white', 'height': '155px' }}>

                <IonGrid style={{ 'padding': '0px' }} >

                    <IonRow>

                        <IonCol size='1' style={{ 'background': 'rgb(29,146,191)', 'color': 'white', 'text-align': 'left' }}>

                        </IonCol>

                        <IonCol size='11' style={{ 'background': 'rgb(29,146,191)', 'color': 'white', 'text-align': 'left' }}>
                            Freight Charge Terms
                        </IonCol>


                    </IonRow>


                </IonGrid>

                <IonCardContent style={{ 'padding': '0px' }} >

                    <IonGrid>

                        <IonRow style={{ 'border-style': 'solid', 'border-color': 'lightgrey', 'border-width': '1px', 'padding': '5px', 'margin-top': '5px' }}>
                            <IonCol style={{ 'color': 'black', 'padding': '0px', 'fontSize': '6px', 'fontFamily': 'arial', }} className="ion-align-self-center" size="2"> Pre-Paid </IonCol>

                            <IonCol style={{ 'color': 'black', 'padding': '0px', 'fontSize': '14px', 'fontFamily': 'arial', 'text-align': 'center' }} className="ion-align-self-center" size="10"> Trailer Number </IonCol>
                        </IonRow>

                        <IonRow style={{ 'border-style': 'solid', 'border-color': 'lightgrey', 'border-width': '1px', 'padding': '5px', 'margin-top': '5px', 'height': '30px' }}>
                            <IonCol style={{ 'color': 'black', 'padding': '0px', 'fontSize': '6px', 'fontFamily': 'arial', }} className="ion-align-self-center" size="2"> Collect </IonCol>

                            <IonCol style={{ 'color': 'black', 'padding': '0px', 'fontSize': '14px', 'fontFamily': 'arial', 'text-align': 'center' }} className="ion-align-self-center" size="10"> 2022/05/04 12:00 </IonCol>
                        </IonRow>

                        <IonRow style={{ 'border-style': 'solid', 'border-color': 'lightgrey', 'border-width': '1px', 'padding': '5px', 'margin-top': '5px' }}>
                            <IonCol style={{ 'color': 'black', 'padding': '0px', 'fontSize': '6px', 'fontFamily': 'arial', }} className="ion-align-self-center" size="2"> 3rd Party </IonCol>

                            <IonCol style={{ 'color': 'black', 'padding': '0px', 'fontSize': '14px', 'fontFamily': 'arial', 'text-align': 'center' }} className="ion-align-self-center" size="10"> 2022/05/04 12:00 </IonCol>
                        </IonRow>

                    </IonGrid>

                </IonCardContent>
            </IonCard>

        </Box>


    );
};

export default Bl3;


