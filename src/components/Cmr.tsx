import React, { useEffect, useState } from "react";
import { IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { add, trash, brush } from "ionicons/icons";
import logo from '../pages/blk2.png';
import { getJson, getBigJson } from "./util/json"
import { getUserById } from "../dataservice";


import { useSelector, useDispatch } from 'react-redux'

import { incrementByAmount } from "../components/redux/slices/counterSlice"

type Props = {
    id: any,
    cmrCode: any
}


const Cmr: React.FC<Props> = ({ id, cmrCode }) => {

    const dispatch = useDispatch()

    const [cmrData2, setCmrData2] = useState<any>([]);

    console.log("cmrCode")
    console.log(cmrCode)

    console.log(id)

    useEffect(() => {


        getUserById(id).then((c: any) => {
            const user = c.values[0];

            console.log("Tentou11123333");
            console.log(c.values)
            console.log("Tentou111");
            console.log(user)
            console.log(user.token)
            // setUserToken(user.token);


            fetch(`https://try.bizcargo.com/api/cmr/cmr-documents/${cmrCode}/1?type=active`, {
                headers: {
                    'Authorization': 'Bearer ' + user.token,
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
                method: 'GET'
            })
                .then(response => response.json())
                .then((response) => {
                    if (response) {
                        console.log("responseee");
                        console.log(response)
                        const atuamae = response
                        setCmrData2(atuamae)
                        dispatch(incrementByAmount(atuamae))

                    }
                }).catch((err) => {
                    alert('Login Errado');
                });



        });

    }, []);

    console.log("yasuo")

    console.log(cmrData2)

    console.log(cmrData2.parties)





    useEffect(() => {
        if (cmrData2.parties) {
            console.log(cmrData2.parties[0]);
        }

    }, [cmrData2])

    // {cmrData2.parties[1].entityName}



    return (


        <IonContent>




            {cmrData2.parties &&

                <>

                    {cmrData2.parties.map((json23: any ) => (

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
                            <IonCol size="12"> {cmrData2.destination}</IonCol>
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
                            <IonCol size="12"> {cmrData2.deliveryDate}</IonCol>
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
                            <IonCol size="6"> {cmrData2.deliveryDate}</IonCol>
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
                            <IonCol size="12"> {cmrData2.deliveryDate}</IonCol>
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
                            <IonCol size="12"> {cmrData2.deliveryDate}</IonCol>
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
                            <IonCol size="12"> {cmrData2.deliveryDate}</IonCol>
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
                            <IonCol size="12"> {cmrData2.drivers}</IonCol>
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
                            <IonCol size="12"> {cmrData2.drivers}</IonCol>
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
                            <IonCol size="12"> {cmrData2.drivers}</IonCol>
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
                            <IonCol size="6"> {cmrData2.cargo}</IonCol>
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
                            <IonCol size="12"> {cmrData2.drivers}</IonCol>
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
                            <IonCol size="12"> {cmrData2.drivers}</IonCol>
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
                            <IonCol size="12"> {cmrData2.drivers}</IonCol>
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
                            <IonCol size="12"> {cmrData2.drivers}</IonCol>
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
                            <IonCol size="12"> {cmrData2.drivers}</IonCol>
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
                            <IonCol size="12"> {cmrData2.drivers}</IonCol>
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
                            <IonCol size="12"> {cmrData2.drivers}</IonCol>
                        </IonRow>
                    </IonGrid>
                </IonCardContent>
            </IonCard>

        </IonContent>

    );
};

export default Cmr;


