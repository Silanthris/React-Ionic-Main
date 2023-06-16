import { IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonItem, IonLabel, IonMenuButton, IonPage, IonRow, IonSlide, IonSlides, IonTitle, IonToolbar } from '@ionic/react';

import '../components/util/css/Page.css';
import { useEffect, useState } from 'react';
import { getBlbyCode, getUserById } from '../dataservice';

import "../components/util/css/List.css"

import { useSelector, useDispatch } from 'react-redux'

import Bl from './Bl/Bl';

import Bl1 from './Bl/Bl1';
import Bl2 from './Bl/Bl2';
import Bl3 from './Bl/Bl3';
import Bl4 from './Bl/Bl4';
import Bl5 from './Bl/Bl5';
import Bl6 from './Bl/Bl6';

import { ReactComponent as IconHome } from '../components/images/icon_home.svg';
import { ReactComponent as IconDocs } from '../components/images/icon_view_docs.svg';
import { ReactComponent as IconDocument } from '../components/images/icon_list_docs.svg';
import { ReactComponent as IconSair } from '../components/images/icon_sair.svg';
import { ReactComponent as IconFav } from '../components/images/favourite.svg';
import { ReactComponent as IconSwipe } from '../components/images/icon_view_swipe.svg';
import { ReactComponent as IconPdf } from '../components/images/icon_view_pdf.svg';
import { ReactComponent as IconScroll } from '../components/images/icon_view_scroll.svg';
import { ReactComponent as BizCargo } from '../components/images/BizCargo.svg';



const BlFile = ({ }: any) => {

    const slideOpts = {
        initialSlide: 0,
        speed: 300
    };


    const dispatch = useDispatch()

    const idUser = useSelector((state: any) => state.id.value)
    const BlCodeRedux = useSelector((state: any) => state.code.value)

    const [blData, setBlData] = useState<any>([]);
    const [TypeCheck, setTypeCheck] = useState(false);


    const handleIcon = (type: boolean) => {
        return (event: React.MouseEvent) => {
            setTypeCheck(type)
        }
    }


    /*
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
    
    */

    useEffect(() => {

        getBlbyCode(BlCodeRedux).then((c: any) => {
            const user = c.values[0];

            const filex = JSON.parse(c.values[0].file)


            console.log("file cmr bd data")

            console.log(filex)

            console.log(c)
            console.log(user)
            setBlData(filex)
            console.log("cmrcoderedux")
            console.log(BlCodeRedux)


        });

    }, []);



    return (

        <>

            <IonHeader >

                <IonToolbar style={{ '--background': 'rgb(29,146,191)' }} >

                    <IonRow style={{ 'display': 'flex' }}>

                        <IonCol size='6' style={{ height: '50px', padding: '0px' }} >

                            <BizCargo style={{ width: "100px", height: "45px", paddingLeft: "15px", paddingBottom: "0px" }} />

                        </IonCol>

                        <IonCol size='2' style={{ height: '50px' }}  >

                            <div style={{ background: 'rgb(29,146,191)', height: '40px', width: '40px' }}  >



                            </div>

                        </IonCol>

                        <IonCol size='2' style={{ height: '50px' }} >

                            <div style={{ background: 'rgb(29,146,191)', height: '40px', width: '40px' }}  >

                                <IconScroll onClick={handleIcon(true)} style={{ height: '40px', width: '40px' }} />

                            </div>

                        </IonCol>

                        <IonCol size='2' style={{ height: '50px' }} >

                            <div style={{ background: 'rgb(29,146,191)', height: '40px', width: '40px' }}  >

                                <IconSwipe onClick={handleIcon(false)} style={{ height: '40px', width: '40px' }} />

                            </div>

                        </IonCol>



                    </IonRow>

                </IonToolbar>

            </IonHeader>


            {TypeCheck ? (
                <Bl blData={blData} />
            ) : (
                <div>
                    <IonSlides style={{ 'height': '100%' }} options={slideOpts}>

                        <IonSlide>
                            <Bl1 blData={blData} />
                        </IonSlide>

                        <IonSlide>
                            <Bl2 blData={blData} />
                        </IonSlide>

                        <IonSlide>
                            <Bl3 blData={blData} />
                        </IonSlide>

                        <IonSlide>
                            <Bl4 blData={blData} />
                        </IonSlide>

                        <IonSlide>
                            <Bl5 blData={blData} />
                        </IonSlide>

                        <IonSlide>
                            <Bl6 blData={blData} />
                        </IonSlide>

                    </IonSlides>

                </div>
            )}


        </>
    );
};
export default BlFile;

