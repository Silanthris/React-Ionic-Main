import { IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonItem, IonLabel, IonMenuButton, IonPage, IonRow, IonSlide, IonSlides, IonTitle, IonToolbar } from '@ionic/react';

import '../components/util/css/Page.css';
import { Link } from 'react-router-dom'
import { getJson, getBigJson } from "../components/util/json"
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
import Bl from './Bl/Bl';



const BlFile = ({ TypeCheck }: any) => {

    const slideOpts = {
        initialSlide: 0,
        speed: 300
    };

    return (

        <>

                <Bl />

        </>

    );
};
export default BlFile;
