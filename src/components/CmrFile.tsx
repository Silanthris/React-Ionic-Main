import { IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonItem, IonLabel, IonMenuButton, IonPage, IonRow, IonSlide, IonSlides, IonTitle, IonToolbar } from '@ionic/react';

import '../components/util/css/Page.css';
import { useEffect, useState } from 'react';
import { getUserById } from '../dataservice';

import "../components/util/css/List.css"

import Cargo from "../components/Cmr/Cargo"
import Documents from '../components/Cmr/Documents';
import Principal from "../components/Cmr/Principal"
import Cmr from "../components/Cmr/Cmr"
import Instructions from '../components/Cmr/Instructions';
import Carrier from '../components/Cmr/Carrier';
import Tobe from '../components/Cmr/Tobe';

import { fileContent } from "../components/redux/slices/counterSlice"
import { useSelector, useDispatch } from 'react-redux'

const CmrFile = ({ TypeCheck }: any) => {

    const dispatch = useDispatch()

    const idUser = useSelector((state: any) => state.id.value)

    const [cmrData, setCmrData] = useState<any>([]);

    const [CmrCode, setCmrCode] = useState<any>(null);

    const CmrCodeRedux = useSelector((state: any) => state.code.value)

    const slideOpts = {
        initialSlide: 0,
        speed: 300
    };


    
    

    useEffect(() => {



        getUserById(idUser).then((c: any) => {
            const user = c.values[0];
            console.log(idUser)
            console.log("aqui cmrfile")
            console.log(user)


            fetch(`https://try.bizcargo.com/api/cmr/cmr-documents/${CmrCodeRedux}/1?type=active`, {
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
                        console.log("API CMR FILE")
                        console.log(response)
                        const tempResponse = response
                        setCmrData(tempResponse)
                        dispatch(fileContent(cmrData))

                    }
                }).catch((err) => {
                    alert('Problemas ficheiro Cmr');
                });

        });

    }, []);



    return (


        <>


            {TypeCheck ? (
                <Cmr cmrData={cmrData}/>
            ) : (
                <div>
                    <IonSlides style={{ 'height': '100%' }} options={slideOpts}>

                        <IonSlide>
                            <Principal cmrData={cmrData}/>
                        </IonSlide>

                        <IonSlide>
                            <Documents cmrData={cmrData}/>
                        </IonSlide>

                        <IonSlide>
                            <Cargo cmrData={cmrData}/>
                        </IonSlide>

                        <IonSlide>
                            <Instructions cmrData={cmrData}/>
                        </IonSlide>

                        <IonSlide>
                            <Carrier cmrData={cmrData}/>
                        </IonSlide>

                        <IonSlide>
                            <Tobe cmrData={cmrData}/>
                        </IonSlide>

                    </IonSlides>

                </div>
            )}


        </>

    );
};
export default CmrFile;
