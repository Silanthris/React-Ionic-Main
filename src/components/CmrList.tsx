import { IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonItem, IonLabel, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';

import '../components/util/css/Page.css';
import { Link } from 'react-router-dom'
import { getJson, getBigJson } from "../components/util/json"
import { useEffect, useState } from 'react';

const CmrList: React.FC = ( {setCmrCheck} : any ) => {


    const jsonItem = getJson();
    const bigJsonItem = getBigJson();


    const CmrClick = () => {

        setCmrCheck(true)
    
      };
    

    const words = bigJsonItem[0].loadingDate.split('T');
    console.log(words);


    console.log(bigJsonItem)
    console.log(jsonItem)

    return (

            <IonContent fullscreen>

                {bigJsonItem.map((json) => (


                    <IonCard onClick={setCmrCheck(true)} routerLink='/Pdf'>
                        <IonCardHeader>
                            <IonCardSubtitle> CMR:  {json.carrierBookingReference} </IonCardSubtitle>
                            <IonCardTitle>{json.createdBy.entity.name}</IonCardTitle>
                        </IonCardHeader>

                        <IonCardContent>

                            <IonGrid>
                                <IonRow>
                                    <IonCol className="ion-align-self-center" size="12"> Loading: {words[0]} {words[1]}</IonCol>
                                </IonRow>
                                <IonRow>
                                    <IonCol className="ion-align-self-center" size="12">Origin:  {json.origin}  </IonCol>
                                </IonRow>
                                <IonRow>
                                    <IonCol className="ion-align-self-center" size="12">Destination: {json.destination}</IonCol>
                                </IonRow>
                            </IonGrid>

                        </IonCardContent>
                    </IonCard>

                ))}

            </IonContent>
    );
};

export default CmrList;
