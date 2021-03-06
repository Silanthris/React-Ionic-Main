import { IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonItem, IonLabel, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';

import '../components/util/css/Page.css';
import { Link } from 'react-router-dom'
import { getJson, getBigJson } from "../components/util/json"
import { useEffect, useState } from 'react';
import { getUserById } from '../dataservice';


type Props = {
    CmrClick: any,
    id: any,
    cmrData: any
}


const CmrList: React.FC<Props> = ({ CmrClick, id, cmrData }) => {


    const [cmrData2, setCmrData2] = useState<Array<any>>([]);




    const jsonItem = getJson();
    const bigJsonItem = getBigJson();


    useEffect(() => {


        getUserById(id).then((c: any) => {
            const user = c.values[0];

            // setUserToken(user.token);


            fetch('https://try.bizcargo.com/api/cmr/cmr-documents?active=true&completed=false&daysFilter=0&page=0&size=10&sort=created_date,DESC&template=false', {
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
                        const temp = response.content
                        setCmrData2(temp)

                    }
                }).catch((err) => {
                    alert('Login Errado');
                });



        });

    }, []);


    const words = bigJsonItem[0].loadingDate.split('T');


    return (

        <IonContent fullscreen>



            {cmrData2.map((json2) => (


                <IonCard onClick={() => { CmrClick(json2.code); }}>
                    <IonCardHeader>
                        <IonCardSubtitle> CMR:  {json2.carrierBookingReference} </IonCardSubtitle>
                        <IonCardTitle>{json2.createdBy}</IonCardTitle>
                    </IonCardHeader>

                    <IonCardContent>

                        <IonGrid>
                            <IonRow>
                                <IonCol className="ion-align-self-center" size="12"> Loading: </IonCol>
                            </IonRow>
                            <IonRow>
                                <IonCol className="ion-align-self-center" size="12">Origin:  {json2.origin}  </IonCol>
                            </IonRow>
                            <IonRow>
                                <IonCol className="ion-align-self-center" size="12">Destination: {json2.destination}</IonCol>
                            </IonRow>
                        </IonGrid>

                    </IonCardContent>
                </IonCard>

            ))}



            {bigJsonItem.map((json) => (


                <IonCard onClick={() => { CmrClick(); }}>
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
