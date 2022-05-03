import React, { useEffect, useState } from "react";
import { IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { add, trash, brush } from "ionicons/icons";
import logo from '../pages/blk2.png';




import { useSelector, useDispatch } from 'react-redux'

import { incrementByAmount } from "../redux/slices/counterSlice"


const Instructions: React.FC = () => {

    const cmrData = useSelector((state: any) => state.counter.value)

    return (

        <>

<IonCard >
                <IonCardHeader>
                    <IonCardTitle>Driver's Instruction</IonCardTitle>
                </IonCardHeader>

                <IonCardContent>
                    <IonGrid>
                        <IonRow>
                            <IonCol size="12"> {cmrData.deliveryDate}</IonCol>
                        </IonRow>
                    </IonGrid>
                </IonCardContent>
            </IonCard>

            <IonCard >
                <IonCardHeader>
                    <IonCardTitle>Instruction for payment</IonCardTitle>
                </IonCardHeader>

                <IonCardContent>
                    <IonGrid>
                        <IonRow>
                            <IonCol size="12"> {cmrData.deliveryDate}</IonCol>
                        </IonRow>
                    </IonGrid>
                </IonCardContent>
            </IonCard>

        </>

    );
};

export default Instructions;


