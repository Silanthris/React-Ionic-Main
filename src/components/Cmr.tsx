import React from "react";
import { IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { add, trash, brush } from "ionicons/icons";
import logo from '../pages/blk2.png';
import { getJson, getBigJson } from "./util/json"



type Props = {
    
}


const Cmr: React.FC<Props> = ({  }) => {


    const bigJsonItem = getBigJson();

    return (


        <IonContent>


            <IonCard >
                <IonCardHeader>
                    <IonCardTitle>Consignor</IonCardTitle>
                </IonCardHeader>

                <IonCardContent>
                    <IonGrid>
                        <IonRow>
                            <IonCol size="12"> {bigJsonItem[0].parties[0].entityName}</IonCol>
                        </IonRow>
                    </IonGrid>
                </IonCardContent>
            </IonCard>

            <IonCard >
                <IonCardHeader>
                    <IonCardTitle>Consignee</IonCardTitle>
                </IonCardHeader>

                <IonCardContent>
                    <IonGrid>
                        <IonRow>
                            <IonCol size="12">{bigJsonItem[0].parties[1].entityName}</IonCol>
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
                            <IonCol size="12"> {bigJsonItem[0].destination}</IonCol>
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
                            <IonCol size="12"> {bigJsonItem[0].deliveryDate}</IonCol>
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


                                {bigJsonItem[0].cargo.map((json) => (


                                    json.marksAndNumbers


                                ))}


                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol size="6"> Number of ...:</IonCol>
                            <IonCol size="6"> {bigJsonItem[0].cargo.length}</IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol size="6"> Method of Packing:</IonCol>
                            <IonCol size="6">


                                {bigJsonItem[0].cargo.map((json) => (


                                    json.methodOfPacking


                                ))}


                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol size="6"> Nature of Goods:</IonCol>
                            <IonCol size="6">


                                {bigJsonItem[0].cargo.map((json) => (


                                    json.natureOfGoods


                                ))}


                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol size="6"> Stat Nr:</IonCol>
                            <IonCol size="6"> {bigJsonItem[0].deliveryDate}</IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol size="6"> Gross Weight:</IonCol>
                            <IonCol size="6">


                                {bigJsonItem[0].cargo.map((json) => (


                                    json.grossWeight


                                ))}


                            </IonCol>
                        </IonRow>

                        <IonRow>
                            <IonCol size="6">Gross Volume:</IonCol>
                            <IonCol size="6">


                                {bigJsonItem[0].cargo.map((json) => (


                                    json.grossVolume


                                ))}


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
                            <IonCol size="12"> {bigJsonItem[0].deliveryDate}</IonCol>
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
                            <IonCol size="12"> {bigJsonItem[0].deliveryDate}</IonCol>
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
                            <IonCol size="12"> {bigJsonItem[0].deliveryDate}</IonCol>
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
                            <IonCol size="12"> {bigJsonItem[0].drivers}</IonCol>
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
                            <IonCol size="12"> {bigJsonItem[0].drivers}</IonCol>
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
                            <IonCol size="12"> {bigJsonItem[0].drivers}</IonCol>
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


                                {bigJsonItem[0].cargo.map((json) => (


                                    json.marksAndNumbers


                                ))}


                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol size="6"> Sender:</IonCol>
                            <IonCol size="6"> {bigJsonItem[0].cargo.length}</IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol size="6"> Currency:</IonCol>
                            <IonCol size="6">


                                {bigJsonItem[0].currency.code}


                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol size="6">Consignee:</IonCol>
                            <IonCol size="6">


                                {bigJsonItem[0].cargo.map((json) => (


                                    json.natureOfGoods


                                ))}


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
                            <IonCol size="12"> {bigJsonItem[0].drivers}</IonCol>
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
                            <IonCol size="12"> {bigJsonItem[0].drivers}</IonCol>
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
                            <IonCol size="12"> {bigJsonItem[0].drivers}</IonCol>
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
                            <IonCol size="12"> {bigJsonItem[0].drivers}</IonCol>
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
                            <IonCol size="12"> {bigJsonItem[0].drivers}</IonCol>
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
                            <IonCol size="12"> {bigJsonItem[0].drivers}</IonCol>
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
                            <IonCol size="12"> {bigJsonItem[0].drivers}</IonCol>
                        </IonRow>
                    </IonGrid>
                </IonCardContent>
            </IonCard>

        </IonContent>

    );
};

export default Cmr;


