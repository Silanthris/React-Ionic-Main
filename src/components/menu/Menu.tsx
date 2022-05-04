import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import { archiveOutline, archiveSharp, bookmarkOutline, heartOutline, heartSharp, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, trashOutline, trashSharp, warningOutline, warningSharp } from 'ionicons/icons';
import { useState } from 'react';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

import { useSelector, useDispatch } from 'react-redux'
import { changeChoice } from '../redux/slices/menuchoiceSlice';


const Menu: React.FC = () => {
  const location = useLocation();

  /*
             
             */


  const entire = useState<String>("entire");
  const principal = useState<String>("principal");
  const cargo = useState<String>("cargo");
  const instructions = useState<String>("instructions");
  const carrier = useState<String>("carrier");
  const dispatch = useDispatch()

  const appPages: AppPage[] = [
    {
      title: 'All',
      url: `/cmr/file/entire`,
      iosIcon: archiveOutline,
      mdIcon: archiveSharp
    },
    {
      title: 'Principal',
      url: `/cmr/file/${principal[0]}`,
      iosIcon: mailOutline,
      mdIcon: mailSharp
    },
    {
      title: 'Cargo',
      url: `/cmr/file/${cargo[0]}`,
      iosIcon: paperPlaneOutline,
      mdIcon: paperPlaneSharp
    },
    {
      title: 'Instructions',
      url: `/cmr/file/${instructions[0]}`,
      iosIcon: paperPlaneOutline,
      mdIcon: paperPlaneSharp
    },
    {
      title: 'Carrier',
      url: `/cmr/file/${carrier[0]}`,
      iosIcon: paperPlaneOutline,
      mdIcon: paperPlaneSharp
    }

  ];


  const menus = async (menu: any) => {

   


  };


  return (
    <IonMenu contentId="main" swipe-gesture="false" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>CMR</IonListHeader>



          {appPages.map((appPage, index) => {
            return (

              <>
                <IonMenuToggle key={index} autoHide={false} onChange={() => console.log(index)} >
                  <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                    <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                    <IonLabel  >{appPage.title}</IonLabel>
                  </IonItem>
                </IonMenuToggle>

              </>
            );

          })}




        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;

