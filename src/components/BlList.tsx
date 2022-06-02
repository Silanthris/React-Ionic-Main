import { IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonItem, IonLabel, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';

import '../components/util/css/Page.css';
import { Link } from 'react-router-dom'
import { getJson, getBigJson } from "../components/util/json"
import { useEffect, useState } from 'react';
import { getUserById } from '../dataservice';

import "../components/util/css/List.css"

import { useSelector, useDispatch } from 'react-redux'

import { incrementByAmount } from "../components/redux/slices/counterSlice"


type Props = {
    BlClick: any
}


const BlList: React.FC<Props> = ({ BlClick }) => {

    const idUser = useSelector((state: any) => state.id.value)


    const [blData, setBlData] = useState<Array<any>>([]);


    useEffect(() => {



        getUserById(idUser).then((c: any) => {
            const user = c.values[0];
            console.log(user)

            // setUserToken(user.token);


            fetch('https://try.bizcargo.com/api/bl/bl-documents?active=true&completed=false&daysFilter=0&page=0&size=10&sort=created_date,DESC&template=false', {
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
                        setBlData(temp)
                    }
                }).catch((err) => {
                    alert('Sem Resposta BlList');
                });



        });

    }, []);


    return (


        <>

            {blData.map((json2) => (

                <>


                    <IonCard onClick={() => { BlClick(json2.code); }} className="card" style={{ '--background': 'white', 'height': '145px' }}>

                        <IonGrid style={{ 'padding': '0px' }} >

                            <IonRow>

                                <IonCol size='4' style={{ 'background': 'rgb(14,14,156)', 'color': 'white', 'text-align': 'center' }}>
                                    Bl {json2.journey}
                                </IonCol>

                                <IonCol size='8'>

                                </IonCol>

                            </IonRow>


                        </IonGrid>

                        <IonCardContent style={{ 'padding': '0px' }} >
                            <IonCardTitle style={{ 'color': 'black', 'text-align': 'left', 'padding-left': '20px', 'font-family': 'arial', 'fontStyle': 'italic', 'fontSize': '15px', 'padding-top': '5px' }} >Empresa Imperativa LDA</IonCardTitle>
                            <IonGrid>
                                <IonRow>
                                    <IonCol className="ion-align-self-center" style={{ 'color': 'lightgrey', 'padding': '0px', 'fontFamily': 'arial', 'padding-left': '10px' }} size="4"> Loading </IonCol>
                                    <IonCol style={{ 'color': 'black', 'padding': '0px', 'fontSize': '10px', 'fontFamily': 'arial' }} className="ion-align-self-center" size="8"> {json2.portOfLoading} </IonCol>
                                </IonRow>
                                <IonRow>
                                    <IonCol className="ion-align-self-center" style={{ 'color': 'lightgrey', 'padding': '0px', 'fontFamily': 'arial', 'padding-left': '10px' }} size="4"> Discharge  </IonCol>
                                    <IonCol style={{ 'color': 'black', 'padding': '0px', 'fontSize': '10px', 'fontFamily': 'arial' }} className="ion-align-self-center" size="8"> {json2.portOfDischarge} </IonCol>
                                </IonRow>
                                <IonRow>
                                    <IonCol className="ion-align-self-center" style={{ 'color': 'lightgrey', 'padding': '0px', 'fontFamily': 'arial', 'padding-left': '10px' }} size="4"> Journey </IonCol>
                                    <IonCol style={{ 'color': 'black', 'padding': '0px', 'fontSize': '10px', 'fontFamily': 'arial' }} className="ion-align-self-center" size="8"> {json2.journey} </IonCol>
                                </IonRow>
                                <IonRow>
                                    <IonCol className="ion-align-self-center" style={{ 'color': 'lightgrey', 'padding': '0px', 'fontFamily': 'arial', 'padding-left': '10px' }} size="4"> Voyage </IonCol>
                                    <IonCol style={{ 'color': 'black', 'padding': '0px', 'fontSize': '10px', 'fontFamily': 'arial' }} className="ion-align-self-center" size="8"> {json2.voyage} </IonCol>
                                </IonRow>
                            </IonGrid>
                        </IonCardContent>
                    </IonCard>
                </>
            ))}

        </>

    );
};
export default BlList;
