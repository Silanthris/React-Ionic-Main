import { IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonItem, IonLabel, IonMenuButton, IonPage, IonRow, IonSlide, IonSlides, IonTitle, IonToolbar } from '@ionic/react';

import '../components/util/css/Page.css';
import { useEffect, useState } from 'react';
import { getUserById } from '../dataservice';

import "../components/util/css/List.css"

import { useSelector, useDispatch } from 'react-redux'

import Bl from './Bl/Bl';

import Bl1 from './Bl/Bl1';
import Bl2 from './Bl/Bl2';
import Bl3 from './Bl/Bl3';
import Bl4 from './Bl/Bl4';
import Bl5 from './Bl/Bl5';
import Bl6 from './Bl/Bl6';



const BlFile = ({ TypeCheck }: any) => {

    const slideOpts = {
        initialSlide: 0,
        speed: 300
    };


    const dispatch = useDispatch()

    const idUser = useSelector((state: any) => state.id.value)
    const BlCodeRedux = useSelector((state: any) => state.code.value)

    const [blData, setBlData] = useState<any>([]);

    useEffect(() => {

        getUserById(idUser).then((c: any) => {
            console.log(idUser)
            const user = c.values[0];
            console.log("aqui blfile")
            console.log(user)

            fetch(`https://try.bizcargo.com/api/bl/bl-documents/${BlCodeRedux}/6?type=active`, {
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
                        console.log("API Bl FILE")
                        console.log(response)
                        const tempResponse = response
                        setBlData(tempResponse)
                    }
                }).catch((err) => {
                    alert('Problemas Ficheiro Bl');
                });

        });

    }, []);



    return (

        <>


            {TypeCheck ? (
                <Bl blData={blData} />
            ) : (
                <div>
                    <IonSlides style={{ 'height': '100%' }} options={slideOpts}>

                        <IonSlide>
                            <Bl1 blData={blData}/>
                        </IonSlide>

                        <IonSlide>
                            <Bl2 blData={blData}/>
                        </IonSlide>

                        <IonSlide>
                            <Bl3 blData={blData}/>
                        </IonSlide>

                        <IonSlide>
                            <Bl4 blData={blData}/>
                        </IonSlide>

                        <IonSlide>
                            <Bl5 blData={blData}/>
                        </IonSlide>

                        <IonSlide>
                            <Bl6 blData={blData}/>
                        </IonSlide>

                    </IonSlides>

                </div>
            )}


        </>
    );
};
export default BlFile;
