import React, { useEffect, useState } from "react";
import { IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { add, trash, brush } from "ionicons/icons";
import logo from '../pages/blk2.png';


import { useSelector, useDispatch } from 'react-redux'



const Principal: React.FC = () => {

    const cmrData = useSelector((state: any) => state.counter.value)
    
    return (

        <>



            {cmrData.parties &&

                <>

                    {cmrData.parties.map((json23: any) => (

                        <IonCard >
                            <IonCardHeader>
                                <IonCardTitle>Consignor</IonCardTitle>
                            </IonCardHeader>

                            <IonCardContent>
                                <IonGrid>
                                    <IonRow>
                                        <IonCol size="12"> {json23.entityName}   </IonCol>
                                    </IonRow>
                                </IonGrid>
                            </IonCardContent>
                        </IonCard>

                    ))}


                </>

            }


            <IonCard >
                <IonCardHeader>
                    <IonCardTitle>Consignee</IonCardTitle>
                </IonCardHeader>


                <IonCardContent>
                    <IonGrid>
                        <IonRow>
                            <IonCol size="12"></IonCol>
                        </IonRow>
                    </IonGrid>
                </IonCardContent>
            </IonCard>




            <IonCard >
                <IonCardHeader>
                    <IonCardTitle>Delivery Place</IonCardTitle>
                </IonCardHeader>

                <IonCardContent>
                    <IonGrid>
                        <IonRow>
                            <IonCol size="12"> {cmrData.destination}</IonCol>
                        </IonRow>
                    </IonGrid>
                </IonCardContent>
            </IonCard>
            <IonCard >
                <IonCardHeader>
                    <IonCardTitle>Loading Date</IonCardTitle>
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

export default Principal;


