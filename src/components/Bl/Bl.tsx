import React, { useEffect, useState } from "react";
import { IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';



import { useSelector, useDispatch } from 'react-redux'

import { Box } from "@mui/material";


type Props = {
    blData: any
}

const Bl: React.FC<Props> = ({ blData }) => {


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



            <IonCard className="card" style={{ '--background': 'white', 'height': '230px' }}>

                <IonGrid style={{ 'padding': '0px' }} >

                    <IonRow>

                        <IonCol size='1' style={{ 'background': 'rgb(29,146,191)', 'color': 'white', 'text-align': 'left' }}>

                        </IonCol>

                        <IonCol size='11' style={{ 'background': 'rgb(29,146,191)', 'color': 'white', 'text-align': 'left' }}>
                            Third Party Freight Charges Bill To:
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

                        <IonRow style={{ 'border-style': 'solid', 'border-color': 'lightgrey', 'border-width': '1px', 'padding': '5px', 'margin-top': '5px', 'height': '70px' }}>
                            <IonCol style={{ 'color': 'black', 'padding': '0px', 'fontSize': '6px', 'fontFamily': 'arial', }} className="ion-align-self-center" size="2"> Special Instructions </IonCol>

                            <IonCol style={{ 'color': 'black', 'padding': '0px', 'fontSize': '14px', 'fontFamily': 'arial', 'text-align': 'center' }} className="ion-align-self-center" size="10"> 2022/05/04 12:00 </IonCol>
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
                            Bill of Lading Number:
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




            <IonCard className="card" style={{ '--background': 'white', 'height': '260px' }}>

                <IonGrid style={{ 'padding': '0px' }} >

                    <IonRow>

                        <IonCol size='1' style={{ 'background': 'rgb(29,146,191)', 'color': 'white', 'text-align': 'left' }}>

                        </IonCol>

                        <IonCol size='11' style={{ 'background': 'rgb(29,146,191)', 'color': 'white', 'text-align': 'left' }}>
                            Customer Order Information
                        </IonCol>

                    </IonRow>

                </IonGrid>

                <IonCardContent style={{ 'padding': '0px' }} >

                    <IonGrid>

                        <IonRow style={{ 'border-style': 'solid', 'border-color': 'lightgrey', 'border-width': '1px', 'padding': '5px', 'margin-top': '5px' }}>
                            <IonCol style={{ 'color': 'black', 'padding': '0px', 'fontSize': '6px', 'fontFamily': 'arial', }} className="ion-align-self-center" size="2"> Customer Order Number </IonCol>

                            <IonCol style={{ 'color': 'black', 'padding': '0px', 'fontSize': '14px', 'fontFamily': 'arial', 'text-align': 'center' }} className="ion-align-self-center" size="10"> Trailer Number </IonCol>
                        </IonRow>
                        <IonRow style={{ 'border-style': 'solid', 'border-color': 'lightgrey', 'border-width': '1px', 'padding': '5px', 'margin-top': '5px' }}>
                            <IonCol style={{ 'color': 'black', 'padding': '0px', 'fontSize': '6px', 'fontFamily': 'arial', }} className="ion-align-self-center" size="2"> # PKGS </IonCol>

                            <IonCol style={{ 'color': 'black', 'padding': '0px', 'fontSize': '14px', 'fontFamily': 'arial', 'text-align': 'center' }} className="ion-align-self-center" size="10"> Seal Number </IonCol>
                        </IonRow>
                        <IonRow style={{ 'border-style': 'solid', 'border-color': 'lightgrey', 'border-width': '1px', 'padding': '5px', 'margin-top': '5px' }}>
                            <IonCol style={{ 'color': 'black', 'padding': '0px', 'fontSize': '6px', 'fontFamily': 'arial', }} className="ion-align-self-center" size="2"> Weight </IonCol>

                            <IonCol style={{ 'color': 'black', 'padding': '0px', 'fontSize': '14px', 'fontFamily': 'arial', 'text-align': 'center' }} className="ion-align-self-center" size="10"> 2022/05/04 12:00 </IonCol>
                        </IonRow>

                        <IonRow style={{ 'border-style': 'solid', 'border-color': 'lightgrey', 'border-width': '1px', 'padding': '5px', 'margin-top': '5px', 'height': '30px' }}>
                            <IonCol style={{ 'color': 'black', 'padding': '0px', 'fontSize': '6px', 'fontFamily': 'arial', }} className="ion-align-self-center" size="2"> Pallet/Slip </IonCol>

                            <IonCol style={{ 'color': 'black', 'padding': '0px', 'fontSize': '14px', 'fontFamily': 'arial', 'text-align': 'center' }} className="ion-align-self-center" size="10"> 2022/05/04 12:00 </IonCol>
                        </IonRow>



                        <IonRow style={{ 'border-style': 'solid', 'border-color': 'lightgrey', 'border-width': '1px', 'padding': '5px', 'margin-top': '5px', 'height': '70px' }}>
                            <IonCol style={{ 'color': 'black', 'padding': '0px', 'fontSize': '6px', 'fontFamily': 'arial', }} className="ion-align-self-center" size="2"> Additional Shipper Info </IonCol>

                            <IonCol style={{ 'color': 'black', 'padding': '0px', 'fontSize': '14px', 'fontFamily': 'arial', 'text-align': 'center' }} className="ion-align-self-center" size="10"> 2022/05/04 12:00 </IonCol>
                        </IonRow>



                    </IonGrid>

                </IonCardContent>
            </IonCard>








            <IonCard className="card" style={{ '--background': 'white', 'height': '660px' }}>

                <IonGrid style={{ 'padding': '0px' }} >

                    <IonRow>

                        <IonCol size='1' style={{ 'background': 'rgb(29,146,191)', 'color': 'white', 'text-align': 'left' }}>

                        </IonCol>

                        <IonCol size='11' style={{ 'background': 'rgb(29,146,191)', 'color': 'white', 'text-align': 'left' }}>
                            Carrier Info
                        </IonCol>

                    </IonRow>

                </IonGrid>

                <IonCardContent style={{ 'padding': '0px' }} >

                    <IonGrid>





                        <IonRow style={{ 'border-style': 'solid', 'border-color': 'lightgrey', 'border-width': '1px', 'padding': '5px', 'margin-top': '5px' }}>

                            <IonRow style={{ 'padding': '5px', 'margin-top': '5px' }}>
                                <IonCol style={{ 'color': 'black', 'padding': '0px', 'fontSize': '6px', 'fontFamily': 'arial', }} className="ion-align-self-center" size="2"> Qty </IonCol>

                                <IonCol style={{ 'color': 'black', 'padding': '0px', 'fontSize': '14px', 'fontFamily': 'arial', 'text-align': 'center' }} className="ion-align-self-center" size="10"> Trailer Number </IonCol>
                            </IonRow>


                            <IonRow style={{ 'padding': '5px', 'margin-top': '5px' }}>
                                <IonCol style={{ 'color': 'black', 'padding': '0px', 'fontSize': '6px', 'fontFamily': 'arial', }} className="ion-align-self-center" size="2"> Type </IonCol>

                                <IonCol style={{ 'color': 'black', 'padding': '0px', 'fontSize': '14px', 'fontFamily': 'arial', 'text-align': 'center' }} className="ion-align-self-center" size="10"> Trailer Number </IonCol>
                            </IonRow>


                        </IonRow>

                        <IonRow style={{ 'border-style': 'solid', 'border-color': 'lightgrey', 'border-width': '1px', 'padding': '5px', 'margin-top': '5px' }}>

                            <IonRow style={{ 'padding': '5px', 'margin-top': '5px' }}>
                                <IonCol style={{ 'color': 'black', 'padding': '0px', 'fontSize': '6px', 'fontFamily': 'arial', }} className="ion-align-self-center" size="2"> Qty </IonCol>

                                <IonCol style={{ 'color': 'black', 'padding': '0px', 'fontSize': '14px', 'fontFamily': 'arial', 'text-align': 'center' }} className="ion-align-self-center" size="10"> Trailer Number </IonCol>
                            </IonRow>


                            <IonRow style={{ 'padding': '5px', 'margin-top': '5px' }}>
                                <IonCol style={{ 'color': 'black', 'padding': '0px', 'fontSize': '6px', 'fontFamily': 'arial', }} className="ion-align-self-center" size="2"> Type </IonCol>

                                <IonCol style={{ 'color': 'black', 'padding': '0px', 'fontSize': '14px', 'fontFamily': 'arial', 'text-align': 'center' }} className="ion-align-self-center" size="10"> Trailer Number </IonCol>
                            </IonRow>


                        </IonRow>


                        <IonRow style={{ 'border-style': 'solid', 'border-color': 'lightgrey', 'border-width': '1px', 'padding': '5px', 'margin-top': '5px' }}>
                            <IonCol style={{ 'color': 'black', 'padding': '0px', 'fontSize': '6px', 'fontFamily': 'arial', }} className="ion-align-self-center" size="2"> Weight </IonCol>

                            <IonCol style={{ 'color': 'black', 'padding': '0px', 'fontSize': '14px', 'fontFamily': 'arial', 'text-align': 'center' }} className="ion-align-self-center" size="10"> Seal Number </IonCol>
                        </IonRow>
                        <IonRow style={{ 'border-style': 'solid', 'border-color': 'lightgrey', 'border-width': '1px', 'padding': '5px', 'margin-top': '5px' }}>
                            <IonCol style={{ 'color': 'black', 'padding': '0px', 'fontSize': '6px', 'fontFamily': 'arial', }} className="ion-align-self-center" size="2"> H.M </IonCol>

                            <IonCol style={{ 'color': 'black', 'padding': '0px', 'fontSize': '14px', 'fontFamily': 'arial', 'text-align': 'center' }} className="ion-align-self-center" size="10"> 2022/05/04 12:00 </IonCol>
                        </IonRow>

                        <IonRow style={{ 'border-style': 'solid', 'border-color': 'lightgrey', 'border-width': '1px', 'padding': '5px', 'margin-top': '5px', 'height': '30px' }}>
                            <IonCol style={{ 'color': 'black', 'padding': '0px', 'fontSize': '6px', 'fontFamily': 'arial', }} className="ion-align-self-center" size="2"> Commodity Description </IonCol>

                            <IonCol style={{ 'color': 'black', 'padding': '0px', 'fontSize': '14px', 'fontFamily': 'arial', 'text-align': 'center' }} className="ion-align-self-center" size="10"> 2022/05/04 12:00 </IonCol>
                        </IonRow>

                        <IonRow style={{ 'border-style': 'solid', 'border-color': 'lightgrey', 'border-width': '1px', 'padding': '5px', 'margin-top': '5px' }}>

                            <IonRow style={{ 'padding': '5px', 'margin-top': '5px' }}>
                                <IonCol style={{ 'color': 'black', 'padding': '0px', 'fontSize': '6px', 'fontFamily': 'arial', }} className="ion-align-self-center" size="2"> NMFC </IonCol>

                                <IonCol style={{ 'color': 'black', 'padding': '0px', 'fontSize': '14px', 'fontFamily': 'arial', 'text-align': 'center' }} className="ion-align-self-center" size="10"> Trailer Number </IonCol>
                            </IonRow>


                            <IonRow style={{ 'padding': '5px', 'margin-top': '5px' }}>
                                <IonCol style={{ 'color': 'black', 'padding': '0px', 'fontSize': '6px', 'fontFamily': 'arial', }} className="ion-align-self-center" size="2"> Class </IonCol>

                                <IonCol style={{ 'color': 'black', 'padding': '0px', 'fontSize': '14px', 'fontFamily': 'arial', 'text-align': 'center' }} className="ion-align-self-center" size="10"> Trailer Number </IonCol>
                            </IonRow>

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
                            Rate Per
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
                            COD Amount:
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
                            Shipper Signature
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
                            Shipper Date
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
                            Trailer Loaded:
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
                            FreigHT cOUNTED:
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
                            Carrier Signature
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


    );
};

export default Bl;


