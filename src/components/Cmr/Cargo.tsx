import React, { useEffect, useState } from "react";
import { IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { add, trash, brush } from "ionicons/icons";
import logo from '../pages/blk2.png';




import { useSelector, useDispatch } from 'react-redux'

import { incrementByAmount } from "../redux/slices/counterSlice"


const Cargo: React.FC = () => {

    const cmrData = useSelector((state: any) => state.counter.value)


    console.log(cmrData)

    return (

        <>


            <IonCard >
                <IonCardHeader>
                    <IonCardTitle>Marks</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                    <IonGrid>
                        <IonRow color="primary"  >
                            <IonCol size="6"> {cmrData.Marks} </IonCol>
                            <IonCol size="6">  </IonCol>
                        </IonRow>
                    </IonGrid>
                </IonCardContent>
            </IonCard>
            <IonCard >
                <IonCardHeader>
                    <IonCardTitle>Number of Packages:</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                    <IonGrid>
                        <IonRow color="primary"  >
                            <IonCol size="6"> {cmrData.Marks} </IonCol>
                            <IonCol size="6">  </IonCol>
                        </IonRow>
                    </IonGrid>
                </IonCardContent>
            </IonCard>
            <IonCard >
                <IonCardHeader>
                    <IonCardTitle>Method of Packing:</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                    <IonGrid>
                        <IonRow color="primary"  >
                            <IonCol size="6"> {cmrData.Marks} </IonCol>
                            <IonCol size="6">  </IonCol>
                        </IonRow>
                    </IonGrid>
                </IonCardContent>
            </IonCard>
            <IonCard >
                <IonCardHeader>
                    <IonCardTitle>Nature of Goods:</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                    <IonGrid>
                        <IonRow color="primary"  >
                            <IonCol size="6"> {cmrData.Marks} </IonCol>
                            <IonCol size="6">  </IonCol>
                        </IonRow>
                    </IonGrid>
                </IonCardContent>
            </IonCard>
            <IonCard >
                <IonCardHeader>
                    <IonCardTitle>Stat Nr:</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                    <IonGrid>
                        <IonRow color="primary"  >
                            <IonCol size="6"> {cmrData.Marks} </IonCol>
                            <IonCol size="6">  </IonCol>
                        </IonRow>
                    </IonGrid>
                </IonCardContent>
            </IonCard>
            <IonCard >
                <IonCardHeader>
                    <IonCardTitle>Gross Weight:</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                    <IonGrid>
                        <IonRow color="primary"  >
                            <IonCol size="6"> {cmrData.Marks} </IonCol>
                            <IonCol size="6">  </IonCol>
                        </IonRow>
                    </IonGrid>
                </IonCardContent>
            </IonCard>
            <IonCard >
                <IonCardHeader>
                    <IonCardTitle>Gross Volume:</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                    <IonGrid>
                        <IonRow color="primary"  >
                            <IonCol size="6"> {cmrData.Marks} </IonCol>
                            <IonCol size="6">  </IonCol>
                        </IonRow>
                    </IonGrid>
                </IonCardContent>
            </IonCard>


        </>

    );
};

export default Cargo;


