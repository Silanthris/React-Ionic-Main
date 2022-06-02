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
    CmrClick: any,
    SearchTerm: any
}


const CmrList: React.FC<Props> = ({ CmrClick, SearchTerm }) => {

    console.log(SearchTerm)

    const idUser = useSelector((state: any) => state.id.value)


    const [cmrData2, setCmrData2] = useState<Array<any>>([]);

    const [cmrDataFiltered, setCmrDataFiltered] = useState<Array<any>>([]);


    const filterPosts = (posts: any[], query: any) => {

        console.log("test Filter")

        console.log(query)

        console.log(posts)

        if (query !== '') {
            console.log("Query Existe")
            const results = posts.filter((post) => {
                console.log(post)
                return post.origin.toLowerCase().startsWith(query.toLowerCase());
                // Use the toLowerCase() method to make it case-insensitive
            });
            setCmrDataFiltered(results);
        } else {
            console.log("Query Nao Existe")
            setCmrDataFiltered(posts);
            // If the text field is empty, show all users
        }

    };

    useEffect(() => {

        getUserById(idUser).then((c: any) => {
            const user = c.values[0];

            console.log(user.token)
            console.log(user.refreshToken)

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
                        console.log(response)
                        const temp = response.content
                        setCmrData2(temp)
                        setCmrDataFiltered(temp)

                    }
                }).catch((err) => {
                    alert('Login Errado CmrList');
                });

        });

    }, []);

    useEffect(() => {

        console.log("Data Filtered")

        filterPosts(cmrData2, SearchTerm)

        console.log(cmrDataFiltered)

    }, [SearchTerm])



    return (


        <>

            {cmrDataFiltered.map((json2) => (

                <>


                    <IonCard onClick={() => { CmrClick(json2.code); }} className="card" style={{ '--background': 'white', 'height': '145px' }}>

                        <IonGrid style={{ 'padding': '0px' }} >

                            <IonRow>

                                <IonCol size='4' style={{ 'background': 'rgb(29,146,191)', 'color': 'white', 'text-align': 'center' }}>
                                    CMR {json2.carrierBookingReference}
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
                                    <IonCol style={{ 'color': 'black', 'padding': '0px', 'fontSize': '10px', 'fontFamily': 'arial' }} className="ion-align-self-center" size="8"> 2022/05/04 12:00 </IonCol>
                                </IonRow>
                                <IonRow>
                                    <IonCol className="ion-align-self-center" style={{ 'color': 'lightgrey', 'padding': '0px', 'fontFamily': 'arial', 'padding-left': '10px' }} size="4"> Origin  </IonCol>
                                    <IonCol style={{ 'color': 'black', 'padding': '0px', 'fontSize': '10px', 'fontFamily': 'arial' }} className="ion-align-self-center" size="8"> {json2.origin} </IonCol>
                                </IonRow>
                                <IonRow>
                                    <IonCol className="ion-align-self-center" style={{ 'color': 'lightgrey', 'padding': '0px', 'fontFamily': 'arial', 'padding-left': '10px' }} size="4"> Delviery </IonCol>
                                    <IonCol style={{ 'color': 'black', 'padding': '0px', 'fontSize': '10px', 'fontFamily': 'arial' }} className="ion-align-self-center" size="8"> 2022/05/05 18:00 </IonCol>
                                </IonRow>
                                <IonRow>
                                    <IonCol className="ion-align-self-center" style={{ 'color': 'lightgrey', 'padding': '0px', 'fontFamily': 'arial', 'padding-left': '10px' }} size="4"> Destination </IonCol>
                                    <IonCol style={{ 'color': 'black', 'padding': '0px', 'fontSize': '10px', 'fontFamily': 'arial' }} className="ion-align-self-center" size="8"> {json2.destination} </IonCol>
                                </IonRow>
                            </IonGrid>

                        </IonCardContent>
                    </IonCard>
                </>
            ))}


        </>

    );
};

export default CmrList;