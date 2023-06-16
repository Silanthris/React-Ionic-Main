import { IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenu, IonMenuButton, IonPage, IonRow, IonSlide, IonSlides, IonTitle, IonToolbar } from '@ionic/react';

import '../components/util/css/Page.css';
import { Link, useHistory, useLocation, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';


import Cargo from "../components/Cmr/Cargo"
import Documents from '../components/Cmr/Documents';
import Principal from "../components/Cmr/Principal"
import Cmr from "../components/Cmr/Cmr"
import Instructions from '../components/Cmr/Instructions';
import Carrier from '../components/Cmr/Carrier';
import Tobe from '../components/Cmr/Tobe';
import CmrFile from '../components/CmrFile';
import BlFile from '../components/BlFile';


import { createCmr, getUserById, getUtility } from '../dataservice';
import { ReactComponent as BizCargo } from '../components/images/BizCargo.svg';
import { ReactComponent as IconHome } from '../components/images/icon_home.svg';
import { ReactComponent as IconDocs } from '../components/images/icon_view_docs.svg';
import { ReactComponent as IconDocument } from '../components/images/icon_list_docs.svg';
import { ReactComponent as IconSair } from '../components/images/icon_sair.svg';
import { ReactComponent as IconFav } from '../components/images/favourite.svg';
import { ReactComponent as IconSwipe } from '../components/images/icon_view_swipe.svg';
import { ReactComponent as IconPdf } from '../components/images/icon_view_pdf.svg';
import { ReactComponent as IconScroll } from '../components/images/icon_view_scroll.svg';
import { use } from 'i18next';

import { useSelector, useDispatch } from 'react-redux'
import { fileContent } from "../components/redux/slices/counterSlice"
import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material';
import { changeId } from '../components/redux/slices/idSlice';

const File: React.FC = () => {

    const dispatch = useDispatch()

    let history = useHistory();

    const location = useLocation<any>();

    const [idUser, setIdUser] = useState<string>("");

    const [TypeCheck, setTypeCheck] = useState(false);

    useEffect(() => {

        getUtility().then((c: any) => {
            const utility = c;
            console.log("databse id uytility")
            console.log(utility.values[0].idUser)
            setIdUser(utility.values[0].idUser)
    
        });

    }, []);

    const type = useSelector((state: any) => state.type.value)

    const handleIcon = (type: boolean) => {
        return (event: React.MouseEvent) => {
            setTypeCheck(type)
        }
    }


    return (
        <IonPage>



            <IonContent style={{ '--ion-background-color': 'rgb(245,245,246)' }}>



                {type === "Bl" &&
                    <>
                        <BlFile  TypeCheck={TypeCheck} />
                    </>
                }

                {type === "Cmr" &&
                    <>
                        <CmrFile TypeCheck={TypeCheck} />
                    </>
                }



            </IonContent>

            <Box style={{ position: "fixed", width: "100%", bottom: "0", right: "0" }}  >
                <BottomNavigation

                    style={{ background: 'rgb(229,229,229)' }}

                >
                    <BottomNavigationAction href='/list/dashboard'  style={{ paddingLeft: "0px", paddingRight: "0px" }} className="	.Mui-selected" label="Entrar" icon={<IconHome />} />
               
                    <BottomNavigationAction href='/list' style={{ paddingLeft: "0px", paddingRight: "0px" }} className="	.Mui-selected" label="Entrar" icon={<IconDocument />} />

                    <BottomNavigationAction href='/' style={{ paddingLeft: "0px", paddingRight: "0px" }} label="Perfis" icon={<IconSair />} />

                </BottomNavigation>
            </Box>



        </IonPage>
    );
};

export default File;



 //    <BottomNavigationAction href='/list/file' style={{ paddingLeft: "0px", paddingRight: "0px" }} label="Perfis" icon={<IconDocs />} />