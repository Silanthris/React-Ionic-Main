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

import Cmr from "../components/Cmr/Cmr"
import BlList from '../components/BlList';
import CmrList from '../components/CmrList';
import { constructOutline } from 'ionicons/icons';
import { getUserById, getUtility } from '../dataservice';
import { use } from 'i18next';


import { useSelector, useDispatch } from 'react-redux'

import { changeCode } from "../components/redux/slices/codeSlice"

import { changeType } from "../components/redux/slices/typeSlice"

import { BottomNavigation, BottomNavigationAction, Box, Button, Collapse, FormControl, InputAdornment, InputLabel, MenuItem, Select, Slide, TextField } from '@mui/material';

import { changeId } from "../components/redux/slices/idSlice"

const List: React.FC = () => {

  const dispatch = useDispatch()

  const [SearchTerm, setSearchTerm] = useState<String>("");

  const [TypeCmr, setTypeCmr] = useState<String>("Cmr");

  const [TypeBl, setTypeBl] = useState<String>("Bl");

  const [idUser, setIdUser] = useState<String>("");



  useEffect(() => {

    getUtility().then((c: any) => {
      const utility = c;
      console.log("databse id uytility")
      console.log(utility.values[0].idUser)
      setIdUser(utility.values[0].idUser)

    });

  }, []);

  console.log(idUser)

  console.log("LIST ID")

  const [selectedOption, setSelectedOption] = useState("")

  let history = useHistory();

  const [SearchCheck, setSearchCheck] = useState(false);

  const CmrClick = (cmrCode: any) => {

    dispatch(changeCode(cmrCode))

    dispatch(changeType(TypeCmr))

    history.push({
      pathname: '/list/file'
    })

  };

  const BlClick = (blCode: any) => {

    dispatch(changeCode(blCode))

    dispatch(changeType(TypeBl))

    history.push({
      pathname: '/list/file'
    })


  };

  const handleSelect = (value: any) => {

    setSelectedOption(value)

    console.log(selectedOption)

  }

  return (
    <IonPage>

      <IonHeader >

        <IonToolbar style={{ '--background': 'rgb(29,146,191)' }} >

          <BizCargo style={{ width: "100px", height: "45px", paddingLeft: "15px" }} />

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
                        }} value={SearchTerm} onChange={(e) => handleSelect(e.target.value)} id="standard-basic" size='small' label="Procurar" variant="outlined" style={{ 'background': 'white' }} />


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
                          onChange={e => handleSelect(e.target.value)}
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          label="Type"
                          style={{ 'background': 'white' }}
                        >
                          <MenuItem value={"CMR"}>CMR</MenuItem>
                          <MenuItem value={"BL"}>Bl</MenuItem>
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

     
        {selectedOption === "CMR" &&
          <>
            <CmrList SearchTerm={SearchTerm} CmrClick={CmrClick} />
          </>
        }

        {selectedOption === "" &&
          <>
            <div>
              <CmrList SearchTerm={SearchTerm} CmrClick={CmrClick} />
            </div>

           
          </>
        }

        <Box style={{ position: "fixed", width: "100%", bottom: "0", right: "0" }}  >
          <BottomNavigation

            style={{ background: 'rgb(229,229,229)' }}

          >

            <BottomNavigationAction href='/list/dashboard' style={{ paddingLeft: "0px", paddingRight: "0px" }} className="	.Mui-selected" label="Entrar" icon={<IconHome />} />

            <BottomNavigationAction href='/list/file' style={{ paddingLeft: "0px", paddingRight: "0px" }} label="Perfis" icon={<IconDocs />} />

            <BottomNavigationAction href='/list' style={{ paddingLeft: "0px", paddingRight: "0px" }} className="	.Mui-selected" label="Entrar" icon={<IconDocument />} />

            <BottomNavigationAction href='/' style={{ paddingLeft: "0px", paddingRight: "0px" }} label="Perfis" icon={<IconSair />} />


          </BottomNavigation>
        </Box>

      </IonContent>

    </IonPage>
  );
};

export default List;


/*

   {selectedOption === "BL" &&
          <>
            <BlList SearchTerm={SearchTerm} BlClick={BlClick} /> 
          </>
        }


         <div>
              <BlList SearchTerm={SearchTerm} BlClick={BlClick} />
            </div>

            */