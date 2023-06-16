import { IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonItem, IonLabel, IonMenuButton, IonPage, IonRow, IonSlide, IonSlides, IonTitle, IonToolbar } from '@ionic/react';

import '../components/util/css/Page.css';
import { useEffect, useState } from 'react';
import { createCmr, getCmrbyCode, getUserById } from '../dataservice';

import "../components/util/css/List.css"

import { ReactComponent as IconHome } from '../components/images/icon_home.svg';
import { ReactComponent as IconDocs } from '../components/images/icon_view_docs.svg';
import { ReactComponent as IconDocument } from '../components/images/icon_list_docs.svg';
import { ReactComponent as IconSair } from '../components/images/icon_sair.svg';
import { ReactComponent as IconFav } from '../components/images/favourite.svg';
import { ReactComponent as IconSwipe } from '../components/images/icon_view_swipe.svg';
import { ReactComponent as IconPdf } from '../components/images/icon_view_pdf.svg';
import { ReactComponent as IconScroll } from '../components/images/icon_view_scroll.svg';
import { ReactComponent as BizCargo } from '../components/images/BizCargo.svg';

import Cargo from "../components/Cmr/Cargo"
import Documents from '../components/Cmr/Documents';
import Principal from "../components/Cmr/Principal"
import Cmr from "../components/Cmr/Cmr"
import Instructions from '../components/Cmr/Instructions';
import Carrier from '../components/Cmr/Carrier';
import Tobe from '../components/Cmr/Tobe';

import { fileContent } from "../components/redux/slices/counterSlice"
import { useSelector, useDispatch } from 'react-redux'

const CmrFile = ({ }: any) => {

    const dispatch = useDispatch()

    const idUser = useSelector((state: any) => state.id.value)

    const [cmrData, setCmrData] = useState<any>([]);

    const [cmrDataB, setCmrDataB] = useState<any>([]);

    const [TypeCheck, setTypeCheck] = useState(false);

    const [CmrCode, setCmrCode] = useState<any>(null);

    const CmrCodeRedux = useSelector((state: any) => state.code.value)

    const slideOpts = {
        initialSlide: 0,
        speed: 300
    };


    const handleIcon = (type: boolean) => {
        return (event: React.MouseEvent) => {
            setTypeCheck(type)
        }
    }



    //createCmr({ id, code, file, fav });


    /*   useEffect(() => {
   
   
   
           getUserById(idUser).then((c: any) => {
               const user = c.values[0];
               console.log("file user")
               console.log(c)
               console.log(user)
   
               console.log("cmrcoderedux")
               console.log(CmrCodeRedux)
   
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
   */

    useEffect(() => {

        getCmrbyCode(CmrCodeRedux).then((c: any) => {
            const user = c.values[0];

            const filex = JSON.parse(c.values[0].file)


            console.log("file cmr bd data")

            console.log(filex)

            console.log(c)
            console.log(user)
            setCmrData(filex)
            console.log("cmrcoderedux")
            console.log(CmrCodeRedux)

        
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

            <IonContent style={{ '--ion-background-color': 'rgb(245,245,246)' }}>



                {TypeCheck ? (
                    <Cmr cmrData={cmrData} />
                ) : (
                    <div>
                        <IonSlides style={{ 'height': '100%' }} options={slideOpts}>

                            <IonSlide>
                                <Principal cmrData={cmrData} />
                            </IonSlide>

                            <IonSlide>
                                <Documents cmrData={cmrData} />
                            </IonSlide>

                            <IonSlide>
                                <Cargo cmrData={cmrData} />
                            </IonSlide>

                            <IonSlide>
                                <Instructions cmrData={cmrData} />
                            </IonSlide>

                            <IonSlide>
                                <Carrier cmrData={cmrData} />
                            </IonSlide>

                            <IonSlide>
                                <Tobe cmrData={cmrData} />
                            </IonSlide>

                        </IonSlides>

                    </div>
                )}




            </IonContent>




        </>

    );
};
export default CmrFile;
