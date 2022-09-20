import React, { useEffect, useState } from "react";
import { IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { add, trash, brush } from "ionicons/icons";
import logo from '../pages/blk2.png';




import { useSelector, useDispatch } from 'react-redux'

import { Box } from "@mui/material";

type Props = {
    cmrData: any
}


const Cargo: React.FC<Props> = ({ cmrData }) => {



    return (

        <>

            <Box style={{ width: "90%" }}>



                <IonCard className="card" style={{ '--background': 'white', 'height': '230px' }}>

                    <IonGrid style={{ 'padding': '0px' }} >

                        <IonRow>

                            <IonCol size='1' style={{ 'background': 'rgb(29,146,191)', 'color': 'white', 'text-align': 'left' }}>

                            </IonCol>

                            <IonCol size='11' style={{ 'background': 'rgb(29,146,191)', 'color': 'white', 'text-align': 'left' }}>
                                Cargo
                            </IonCol>


                        </IonRow>


                    </IonGrid>

                    <IonCardContent style={{ 'padding': '0px' }} >

                        <IonGrid>

                            <IonRow style={{ 'border-style': 'solid', 'border-color': 'lightgrey', 'border-width': '1px', 'padding': '5px', 'margin-top': '5px' }}>
                                <IonCol style={{ 'color': 'black', 'padding': '0px', 'fontSize': '6px', 'fontFamily': 'arial', }} className="ion-align-self-center" size="2"> Marks and numbers </IonCol>

                                <IonCol style={{ 'color': 'black', 'padding': '0px', 'fontSize': '14px', 'fontFamily': 'arial', 'text-align': 'center' }} className="ion-align-self-center" size="10"> 127.02 </IonCol>
                            </IonRow>
                            <IonRow style={{ 'border-style': 'solid', 'border-color': 'lightgrey', 'border-width': '1px', 'padding': '5px', 'margin-top': '5px' }}>
                                <IonCol style={{ 'color': 'black', 'padding': '0px', 'fontSize': '6px', 'fontFamily': 'arial', }} className="ion-align-self-center" size="2"> Method of Packaging </IonCol>

                                <IonCol style={{ 'color': 'black', 'padding': '0px', 'fontSize': '14px', 'fontFamily': 'arial', 'text-align': 'center' }} className="ion-align-self-center" size="10"> Package </IonCol>
                            </IonRow>
                            <IonRow style={{ 'border-style': 'solid', 'border-color': 'lightgrey', 'border-width': '1px', 'padding': '5px', 'margin-top': '5px' }}>
                                <IonCol style={{ 'color': 'black', 'padding': '0px', 'fontSize': '6px', 'fontFamily': 'arial', }} className="ion-align-self-center" size="2"> Nature of Goods </IonCol>

                                <IonCol style={{ 'color': 'black', 'padding': '0px', 'fontSize': '14px', 'fontFamily': 'arial', 'text-align': 'center' }} className="ion-align-self-center" size="10"> Package </IonCol>
                            </IonRow>
                            <IonRow style={{ 'border-style': 'solid', 'border-color': 'lightgrey', 'border-width': '1px', 'padding': '5px', 'margin-top': '5px' }}>
                                <IonCol style={{ 'color': 'black', 'padding': '0px', 'fontSize': '6px', 'fontFamily': 'arial', }} className="ion-align-self-center" size="2"> Stat Number </IonCol>

                                <IonCol style={{ 'color': 'black', 'padding': '0px', 'fontSize': '14px', 'fontFamily': 'arial', 'text-align': 'center' }} className="ion-align-self-center" size="10"> 19027831 </IonCol>
                            </IonRow>
                            <IonRow style={{ 'border-style': 'solid', 'border-color': 'lightgrey', 'border-width': '1px', 'padding': '5px', 'margin-top': '5px' }}>
                                <IonCol style={{ 'color': 'black', 'padding': '0px', 'fontSize': '6px', 'fontFamily': 'arial', }} className="ion-align-self-center" size="2"> Gross Weight </IonCol>

                                <IonCol style={{ 'color': 'black', 'padding': '0px', 'fontSize': '14px', 'fontFamily': 'arial', 'text-align': 'center' }} className="ion-align-self-center" size="10"> 120 kg </IonCol>
                            </IonRow>



                        </IonGrid>

                    </IonCardContent>
                </IonCard>


            </Box>
        </>

    );
};

export default Cargo;


