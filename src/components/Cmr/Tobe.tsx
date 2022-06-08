import React, { useEffect, useState } from "react";
import { IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { add, trash, brush } from "ionicons/icons";
import logo from '../pages/blk2.png';




import { useSelector, useDispatch } from 'react-redux'

import { Box } from "@mui/material";


type Props = {
    cmrData: any
}


const Tobe: React.FC<Props> = ({ cmrData }) => {

   

    console.log(cmrData)

    return (

        <>

            <Box style={{ width: "90%" }}>




                <IonCard className="card" style={{ '--background': 'white', 'height': '75px' }}>

                    <IonGrid style={{ 'padding': '0px' }} >

                        <IonRow>

                            <IonCol size='1' style={{ 'background': 'rgb(29,146,191)', 'color': 'white', 'text-align': 'left' }}>

                            </IonCol>

                            <IonCol size='11' style={{ 'background': 'rgb(29,146,191)', 'color': 'white', 'text-align': 'left' }}>
                                19.To be paid by
                            </IonCol>


                        </IonRow>


                    </IonGrid>

                    <IonCardContent style={{ 'padding': '0px' }} >

                        <IonGrid>
                            <IonRow>
                                <IonCol style={{ 'color': 'black', 'padding': '0px', 'fontSize': '14px', 'fontFamily': 'arial' }} className="ion-align-self-center" size="8"> 2022/05/04 12:00 </IonCol>
                            </IonRow>
                        </IonGrid>

                    </IonCardContent>
                </IonCard>

                <IonCard className="card" style={{ '--background': 'white', 'height': '75px' }}>

                    <IonGrid style={{ 'padding': '0px' }} >

                        <IonRow>

                            <IonCol size='1' style={{ 'background': 'rgb(29,146,191)', 'color': 'white', 'text-align': 'left' }}>

                            </IonCol>

                            <IonCol size='11' style={{ 'background': 'rgb(29,146,191)', 'color': 'white', 'text-align': 'left' }}>
                                20.Special Agreements
                            </IonCol>


                        </IonRow>


                    </IonGrid>

                    <IonCardContent style={{ 'padding': '0px' }} >

                        <IonGrid>
                            <IonRow>
                                <IonCol style={{ 'color': 'black', 'padding': '0px', 'fontSize': '14px', 'fontFamily': 'arial' }} className="ion-align-self-center" size="8"> 2022/05/04 12:00 </IonCol>
                            </IonRow>
                        </IonGrid>

                    </IonCardContent>
                </IonCard>

                <IonCard className="card" style={{ '--background': 'white', 'height': '75px' }}>

                    <IonGrid style={{ 'padding': '0px' }} >

                        <IonRow>

                            <IonCol size='1' style={{ 'background': 'rgb(29,146,191)', 'color': 'white', 'text-align': 'left' }}>

                            </IonCol>

                            <IonCol size='11' style={{ 'background': 'rgb(29,146,191)', 'color': 'white', 'text-align': 'left' }}>
                                21.Estabilished in
                            </IonCol>


                        </IonRow>


                    </IonGrid>

                    <IonCardContent style={{ 'padding': '0px' }} >

                        <IonGrid>
                            <IonRow>
                                <IonCol style={{ 'color': 'black', 'padding': '0px', 'fontSize': '14px', 'fontFamily': 'arial' }} className="ion-align-self-center" size="8"> 2022/05/04 12:00 </IonCol>
                            </IonRow>
                        </IonGrid>

                    </IonCardContent>
                </IonCard>


            </Box>
        </>

    );
};

export default Tobe;

