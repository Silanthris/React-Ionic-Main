import { IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonItem, IonLabel, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';

import '../components/util/css/Page.css';
import { Link } from 'react-router-dom'
import { getJson, getBigJson } from "../components/util/json"
import { useEffect, useState } from 'react';
import { getUserById, getUtility, updateCmrByCodeaddFav, createCmr, updateCmrByCodedelFav, deleteCmrnotFav, getAllCmr, getCmrbyId } from '../dataservice';

import "../components/util/css/List.css"

import { useSelector, useDispatch } from 'react-redux'
import StarIcon from '@mui/icons-material/Star';
import { fileContent } from "../components/redux/slices/counterSlice"
import { JsonTrigger } from '@capacitor-community/sqlite';


type Props = {
    CmrClick: any,
    SearchTerm: any
}



const CmrList: React.FC<Props> = ({ CmrClick, SearchTerm }) => {

    const [cmrData2, setCmrData2] = useState<Array<any>>([]);

    const [cmrDataFiltered, setCmrDataFiltered] = useState<Array<any>>([]);

    const [cmrDataBd, setCmrDataBd] = useState<Array<Object>>([]);

    const [idUser1, setIdUser] = useState<String>("");

    const searchIt = (posts: Array<any>, str: string) => {
        console.log("entrou")
        var results: any[] = [];
        for (var i in posts) {
            const keys = Object.keys(posts[i]);
            for (var k in keys) {
                if (String(posts[i][keys[k]]).toLowerCase().includes(str.toLowerCase())) {
                    results.push(posts[i]);
                    break;
                }
            }
        }
        return results;
    };

    useEffect(() => {

        //  deleteCmrnotFav();

        getUtility().then((c: any) => {
            const utility = c;
            console.log("databse id uytility")
            console.log(utility.values[0].idUser)
            setIdUser(utility.values[0].idUser)

            console.log("id")

            console.log(utility.values[0].idUser)

            getUserById(utility.values[0].idUser).then((c: any) => {
                const user = c.values[0];

                const idUser = user.id

                console.log(idUser1)
                console.log("aqui cmrlist")

                console.log(user)

                console.log("aqui cmrlist user token")
                console.log(user.token)

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

                            console.log("cmrdata2")

                            console.log(temp)

                            for (var i = 0; i < temp.length; i++) {

                                var code = temp[i].code

                                var file = JSON.stringify(temp[i])

                                var fav = 0

                                createCmr({ idUser, code, file, fav });

                            }
                            getCmrbyId(idUser).then((c: any) => {

                                console.log(c)

                                setCmrDataBd(c)

                                console.log("get cmr c")

                                console.log(cmrDataBd)
                                
                            });

                        }
                    }).catch((err) => {
                        console.log(err)
                        alert('Problemas a listar cmr');
                    });

            });

        });



    }, []);

    /*
        <IonCol onClick={() => { FavClickOff(json2) }} size='2'>
                                        <StarIcon style={{ color: 'rgb(29,146,191)' }}  />
                                    </IonCol>
    */
    useEffect(() => {



        setCmrDataFiltered(searchIt(cmrData2, SearchTerm))



    }, [SearchTerm])
    /*
        useEffect(() => {
    
            const getbdData = async () => {
                setCmrDataBd(await getCmr(idUser))
            };
    
            getbdData();
    
            console.log(" useeff getbddata")
    
            console.log(cmrDataBd)
    
        }, [cmrData2])
    */
    const FavClickOff = (json: any) => {


        const code = json.code

        const type = "cmr"

        console.log("fav click off !!!!!!!!!!!!!!!!!!!!")
        console.log(json)

        updateCmrByCodeaddFav({ code });


    };

    const FavClickOn = (json: any) => {

        const code = json.code

        const type = "cmr"

        console.log("fav click off !!!!!!!!!!!!!!!!!!!!")
        console.log(json)

        updateCmrByCodedelFav({ code });

    };


    return (

        <>




            {cmrDataBd.map((json2) => (

                <>

                    <IonCard onClick={() => { CmrClick(); }} className="card" style={{ '--background': 'white', 'height': '145px' }}>

                        <IonGrid style={{ 'padding': '0px' }} >

                            <IonRow>

                                <IonCol size='4'

                                    style={{
                                        'background': 'rgb(29,146,191)', 'color': 'white', 'text-align': 'center', 'alignItems': 'center', 'display': 'flex', 'justifyContent': 'center'

                                    }}>


                                </IonCol>

                                <IonCol size='6'>

                                </IonCol>



                                {json2 === "0" &&
                                    <>
                                        <IonCol onClick={() => { FavClickOff(json2) }} size='2'>

                                            <StarIcon style={{ color: 'grey' }} />

                                        </IonCol>
                                    </>
                                }

                                {json2 === "1" &&
                                    <>
                                        <IonCol onClick={() => { FavClickOn(json2) }} size='2'>

                                            <StarIcon style={{ color: 'blue' }} />

                                        </IonCol>
                                    </>
                                }



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
                                    <IonCol style={{ 'color': 'black', 'padding': '0px', 'fontSize': '10px', 'fontFamily': 'arial' }} className="ion-align-self-center" size="8">  </IonCol>
                                </IonRow>
                                <IonRow>
                                    <IonCol className="ion-align-self-center" style={{ 'color': 'lightgrey', 'padding': '0px', 'fontFamily': 'arial', 'padding-left': '10px' }} size="4"> Delviery </IonCol>
                                    <IonCol style={{ 'color': 'black', 'padding': '0px', 'fontSize': '10px', 'fontFamily': 'arial' }} className="ion-align-self-center" size="8"> 2022/05/05 18:00 </IonCol>
                                </IonRow>
                                <IonRow>
                                    <IonCol className="ion-align-self-center" style={{ 'color': 'lightgrey', 'padding': '0px', 'fontFamily': 'arial', 'padding-left': '10px' }} size="4"> Destination </IonCol>
                                    <IonCol style={{ 'color': 'black', 'padding': '0px', 'fontSize': '10px', 'fontFamily': 'arial' }} className="ion-align-self-center" size="8">  </IonCol>
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