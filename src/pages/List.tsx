import { IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenu, IonMenuButton, IonPage, IonRow, IonSlide, IonSlides, IonTitle, IonToolbar } from '@ionic/react';

import '../components/util/css/Page.css';
import { Link, useHistory, useLocation, useParams } from 'react-router-dom'
import { getJson, getBigJson } from "../components/util/json"
import { useEffect, useState } from 'react';

import { ReactComponent as BizCargo } from '../components/images/BizCargo.svg';

import { ReactComponent as IconHome } from '../components/images/icon_home.svg';

import { ReactComponent as IconSearch } from '../components/images/icon_search.svg';

import { ReactComponent as IconDocs } from '../components/images/icon_view_docs.svg';

import { ReactComponent as IconDocument } from '../components/images/icon_list_docs.svg';

import { ReactComponent as IconMore } from '../components/images/icon_more.svg';

import { ReactComponent as IconSair } from '../components/images/icon_sair.svg';

import Cmr from "../components/Cmr"
import CmrList from '../components/CmrList';
import { constructOutline } from 'ionicons/icons';
import { getUserById } from '../dataservice';
import { use } from 'i18next';
import { useSelector, useDispatch } from 'react-redux'

import { changeCode } from "../components/redux/slices/codeSlice"

import { BottomNavigation, BottomNavigationAction, Box, Button, Collapse, FormControl, InputAdornment, InputLabel, MenuItem, Select, Slide, TextField } from '@mui/material';


const List: React.FC = () => {



  const idUser = useSelector((state: any) => state.id.value)

  console.log("id redux")
  console.log(idUser)

  const dispatch = useDispatch()

  const location = useLocation<any>();
  let history = useHistory();

  const [cmrCheck, setCmrCheck] = useState(false);

  const [userToken, setUserToken] = useState<any>();
  const [cmrCode2, setCmrCode2] = useState<any>();

  const [SearchCheck, setSearchCheck] = useState(false);


  const [cmrData, setCmrData] = useState<Array<Object>>([]);

  const jsonItem = getJson();
  const bigJsonItem = getBigJson();

  const CmrClick = (cmrCode: any) => {

    dispatch(changeCode(cmrCode))

    history.push({

      pathname: '/cmr/file/entire',
      state: { cmrCode: cmrCode }

    })


  };

  const handleClick1 = () => {
    return (event: React.MouseEvent) => {
      history.push({ pathname: '/cmr/dashboard' })
    }
  }

  const handleClick2 = () => {
    return (event: React.MouseEvent) => {
      history.push({ pathname: '/cmr/file' })
    }
  }

  const handleClick3 = () => {
    return (event: React.MouseEvent) => {
      history.push({ pathname: '/cmr/list' })
    }
  }

  const handleClick4 = () => {
    return (event: React.MouseEvent) => {
      history.push({ pathname: '/' })
    }
  }


  return (
    <IonPage>

      <IonHeader >

        <IonToolbar style={{ '--background': 'rgb(29,146,191)' }} >

          <BizCargo style={{ width: "100px", height: "45px", paddingLeft: "15px", paddingTop: "10px" }} />

          <IonButtons slot="end">

            <IonButton onClick={(e) => {
              setSearchCheck(!SearchCheck);
            }}>
              <IconSearch style={{ width: "75px", height: "35px", paddingLeft: "15px", paddingTop: "5px" }} />
            </IonButton>


          </IonButtons>

        </IonToolbar>

      </IonHeader>

      <IonContent style={{ '--ion-background-color': 'rgb(245,245,246)' }} fullscreen>

        <Collapse in={SearchCheck} mountOnEnter unmountOnExit>

          <Box  >


            <IonCard className="card" style={{ '--background': 'rgb(229,229,229)', 'height': '145px' }}>

              <IonCardContent style={{ 'padding': '0px' }} >

                <IonGrid>


                  <IonRow>

                    <IonCol size='1'>

                    </IonCol>

                    <IonCol size='10'>


                      <TextField
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <IconSearch style={{ width: "30px", height: "30px" }} />
                            </InputAdornment>
                          ),
                        }} id="standard-basic" size='small' label="Procurar" variant="outlined" style={{ 'background': 'white' }} />


                    </IonCol>

                    <IonCol size='1'>

                    </IonCol>


                  </IonRow>


                  <IonRow>

                    <IonCol size='1'>

                    </IonCol>

                    <IonCol size='10'>

                      <FormControl fullWidth size="small" >
                        <InputLabel id="demo-simple-select-label">Type</InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          label="Type"
                          style={{ 'background': 'white' }}
                        >
                          <MenuItem value={"CMR"}>CMR</MenuItem>
                          <MenuItem value={"CRM"}>CRM</MenuItem>
                          <MenuItem value={"RCM"}>RCM</MenuItem>
                        </Select>
                      </FormControl>

                    </IonCol>

                    <IonCol size='1'>

                    </IonCol>

                  </IonRow>

                  <IonRow>

                    <IonCol size='7'>

                    </IonCol>


                    <IonCol size='3'>

                      <Button
                        size='small'
                        style={{ 'background': 'rgb(29,146,191)' }}
                        variant="contained">Procurar</Button>

                    </IonCol>

                    <IonCol size='2'>

                    </IonCol>



                  </IonRow>

                </IonGrid>

              </IonCardContent>
            </IonCard>

          </Box>

        </Collapse>


        <div>
          <CmrList CmrClick={CmrClick} />
        </div>

        <Box style={{ position: "fixed", width: "100%", bottom: "0", right: "0" }}  >
          <BottomNavigation

            style={{ background: 'rgb(229,229,229)' }}

          >
            <BottomNavigationAction onClick={handleClick1()} style={{ paddingLeft: "0px", paddingRight: "0px" }} className="	.Mui-selected" label="Entrar" icon={<IconHome />} />

            <BottomNavigationAction onClick={handleClick2()} style={{ paddingLeft: "0px", paddingRight: "0px" }} label="Perfis" icon={<IconDocs />} />

            <BottomNavigationAction onClick={handleClick3()} style={{ paddingLeft: "0px", paddingRight: "0px" }} className="	.Mui-selected" label="Entrar" icon={<IconDocument />} />

            <BottomNavigationAction onClick={handleClick4()} style={{ paddingLeft: "0px", paddingRight: "0px" }} label="Perfis" icon={<IconSair />} />


          </BottomNavigation>
        </Box>

      </IonContent>

    </IonPage>
  );
};

export default List;


