import React, { useEffect, useState } from "react";
import { IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';



import { useSelector, useDispatch } from 'react-redux'

import { incrementByAmount } from "../components/redux/slices/counterSlice"

const Cmr: React.FC = () => {

    const cmrData = useSelector((state: any) => state.counter.value)

    return (


        <IonContent>


            <div>




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

                <IonCard >

                    <IonCardContent>
                        <IonGrid>
                            <IonRow>
                                <IonCol size="6"> Marks:</IonCol>
                                <IonCol size="6">

                                </IonCol>
                            </IonRow>
                            <IonRow>
                                <IonCol size="6"> Number of ...:</IonCol>
                                <IonCol size="6"> </IonCol>
                            </IonRow>
                            <IonRow>
                                <IonCol size="6"> Method of Packing:</IonCol>
                                <IonCol size="6">   </IonCol>
                            </IonRow>
                            <IonRow>
                                <IonCol size="6"> Nature of Goods:</IonCol>
                                <IonCol size="6">




                                </IonCol>
                            </IonRow>
                            <IonRow>
                                <IonCol size="6"> Stat Nr:</IonCol>
                                <IonCol size="6"> {cmrData.deliveryDate}</IonCol>
                            </IonRow>
                            <IonRow>
                                <IonCol size="6"> Gross Weight:</IonCol>
                                <IonCol size="6">




                                </IonCol>
                            </IonRow>

                            <IonRow>
                                <IonCol size="6">Gross Volume:</IonCol>
                                <IonCol size="6">





                                </IonCol>
                            </IonRow>

                        </IonGrid>
                    </IonCardContent>
                </IonCard>

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


                <IonCard >
                    <IonCardHeader>
                        <IonCardTitle>Cash on Delivery</IonCardTitle>
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
                        <IonCardTitle>Carrier Info</IonCardTitle>
                    </IonCardHeader>

                    <IonCardContent>
                        <IonGrid>
                            <IonRow>
                                <IonCol size="12"> {cmrData.drivers}</IonCol>
                            </IonRow>
                        </IonGrid>
                    </IonCardContent>
                </IonCard>


                <IonCard >
                    <IonCardHeader>
                        <IonCardTitle>Sucessive Carriers</IonCardTitle>
                    </IonCardHeader>

                    <IonCardContent>
                        <IonGrid>
                            <IonRow>
                                <IonCol size="12"> {cmrData.drivers}</IonCol>
                            </IonRow>
                        </IonGrid>
                    </IonCardContent>
                </IonCard>

                <IonCard >
                    <IonCardHeader>
                        <IonCardTitle>Carriers Observations</IonCardTitle>
                    </IonCardHeader>

                    <IonCardContent>
                        <IonGrid>
                            <IonRow>
                                <IonCol size="12"> {cmrData.drivers}</IonCol>
                            </IonRow>
                        </IonGrid>
                    </IonCardContent>
                </IonCard>

                <IonCard >

                    <IonCardContent>
                        <IonGrid>
                            <IonRow>
                                <IonCol size="6">To be paid by:</IonCol>
                                <IonCol size="6">




                                </IonCol>
                            </IonRow>
                            <IonRow>
                                <IonCol size="6"> Sender:</IonCol>
                                <IonCol size="6"> {cmrData.cargo}</IonCol>
                            </IonRow>
                            <IonRow>
                                <IonCol size="6"> Currency:</IonCol>
                                <IonCol size="6">




                                </IonCol>
                            </IonRow>
                            <IonRow>
                                <IonCol size="6">Consignee:</IonCol>
                                <IonCol size="6">





                                </IonCol>
                            </IonRow>
                        </IonGrid>
                    </IonCardContent>
                </IonCard>

                <IonCard >
                    <IonCardHeader>
                        <IonCardTitle>Special Agreements</IonCardTitle>
                    </IonCardHeader>

                    <IonCardContent>
                        <IonGrid>
                            <IonRow>
                                <IonCol size="12"> {cmrData.drivers}</IonCol>
                            </IonRow>
                        </IonGrid>
                    </IonCardContent>
                </IonCard>


                <IonCard >
                    <IonCardHeader>
                        <IonCardTitle>Estabilished in:</IonCardTitle>
                    </IonCardHeader>

                    <IonCardContent>
                        <IonGrid>
                            <IonRow>
                                <IonCol size="12"> {cmrData.drivers}</IonCol>
                            </IonRow>
                        </IonGrid>
                    </IonCardContent>
                </IonCard>

                <IonCard >
                    <IonCardHeader>
                        <IonCardTitle>Signature Sender</IonCardTitle>
                    </IonCardHeader>

                    <IonCardContent>
                        <IonGrid>
                            <IonRow>
                                <IonCol size="12"> {cmrData.drivers}</IonCol>
                            </IonRow>
                        </IonGrid>
                    </IonCardContent>
                </IonCard>

                <IonCard >
                    <IonCardHeader>
                        <IonCardTitle>Signature Carrier</IonCardTitle>
                    </IonCardHeader>

                    <IonCardContent>
                        <IonGrid>
                            <IonRow>
                                <IonCol size="12"> {cmrData.drivers}</IonCol>
                            </IonRow>
                        </IonGrid>
                    </IonCardContent>
                </IonCard>


                <IonCard >
                    <IonCardHeader>
                        <IonCardTitle>Goods Received</IonCardTitle>
                    </IonCardHeader>

                    <IonCardContent>
                        <IonGrid>
                            <IonRow>
                                <IonCol size="12"> {cmrData.drivers}</IonCol>
                            </IonRow>
                        </IonGrid>
                    </IonCardContent>
                </IonCard>

                <IonCard >
                    <IonCardHeader>
                        <IonCardTitle>Registration</IonCardTitle>
                    </IonCardHeader>

                    <IonCardContent>
                        <IonGrid>
                            <IonRow>
                                <IonCol size="12"> {cmrData.drivers}</IonCol>
                            </IonRow>
                        </IonGrid>
                    </IonCardContent>
                </IonCard>

                <IonCard >
                    <IonCardHeader>
                        <IonCardTitle>Type:</IonCardTitle>
                    </IonCardHeader>

                    <IonCardContent>
                        <IonGrid>
                            <IonRow>
                                <IonCol size="12"> {cmrData.drivers}</IonCol>
                            </IonRow>
                        </IonGrid>
                    </IonCardContent>
                </IonCard>
            </div>
        </IonContent>

    );
};

export default Cmr;


