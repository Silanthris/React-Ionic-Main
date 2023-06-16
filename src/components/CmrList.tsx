import { IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonItem, IonLabel, IonMenuButton, IonPage, IonRow, IonSlide, IonSlides, IonTitle, IonToolbar } from '@ionic/react';

import '../components/util/css/Page.css';
import { Link } from 'react-router-dom'
import { getJson, getBigJson } from "../components/util/json"
import { useEffect, useState } from 'react';
import { getUserById, getUtility, updateCmrByCodeaddFav, createCmr, updateCmrByCodedelFav, deleteCmrnotFav, getAllCmr, getCmrbyId, getCmrbyCode, updateCmrbyCode } from '../dataservice';

import "../components/util/css/List.css"

import { useSelector, useDispatch } from 'react-redux'
import StarIcon from '@mui/icons-material/Star';
import { fileContent } from "../components/redux/slices/counterSlice"
import { JsonTrigger } from '@capacitor-community/sqlite';

import Cargo from "../components/Cmr/Cargo"
import Documents from '../components/Cmr/Documents';
import Principal from "../components/Cmr/Principal"
import Cmr from "../components/Cmr/Cmr"
import Instructions from '../components/Cmr/Instructions';
import Carrier from '../components/Cmr/Carrier';
import Tobe from '../components/Cmr/Tobe';


import { changeCode } from "../components/redux/slices/codeSlice"

import { changeType } from "../components/redux/slices/typeSlice"

type Props = {
    SearchTerm: any,
    CmrClick: any,
    setSearchTerm: any
}



const CmrList: React.FC<Props> = ({ SearchTerm, CmrClick, setSearchTerm }) => {

    const [cmrData2, setCmrData2] = useState<Array<any>>([]);

    const [cmrDataFiltered, setCmrDataFiltered] = useState<Array<any>>([]);

    const [cmrDataBd, setCmrDataBd] = useState<Array<any>>([]);

    const [cmrDataUpdate, setCmrDataUpdate] = useState<Array<any>>([]);

    const [idUser1, setIdUser] = useState<String>("");

    const [CheckFav, setCheckFav] = useState("");

    const [filterCheck, setFilterCheck] = useState(false);


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

        deleteCmrnotFav(0);

        // setCheckFav("perhaps")

        getUtility().then((c: any) => {

            const utility = c;

            setIdUser(utility.values[0].idUser)

            console.log(utility.values[0].idUser)
            /*
                        getCmrbyId(utility.values[0].idUser).then((d: any) => {
            
                            setCmrDataUpdate(d.values)
            
                            console.log("bd cmr update")
                            console.log(cmrDataUpdate)
            
                        })
            */
            getUserById(utility.values[0].idUser).then((c: any) => {
                const user = c.values[0];

                const idUser = user.id
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


                            getCmrbyId(idUser).then((d: any) => {


                                const bdCmr = d.values


                                for (var i = 0; i < temp.length; i++) {

                                    var code = temp[i].code

                                    fetch(`https://try.bizcargo.com/api/cmr/cmr-documents/${code}/1?type=active`, {
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

                                                var file = JSON.stringify(response)
                                                const loading = response.loadingDate
                                                const origin = response.origin
                                                const delivery = response.deliveryDate
                                                const destination = response.destination
                                                const carrierBookingReference = response.carrierBookingReference

                                                var fav = 0

                                                console.log("welelel id user")
                                                console.log(idUser)

                                                var checkfor = 0

                                                for (var j = 0; j < bdCmr.length; j++) {

                                                    console.log("codel ist1")
                                                    console.log(code)

                                                    var yasuo = JSON.stringify(bdCmr.code)

                                                    console.log(yasuo)

                                                    console.log("bdcmr 2")

                                                    console.log(bdCmr)

                                                    console.log(bdCmr[j].code)

                                                    if (code == bdCmr[j].code) {

                                                        console.log("codel ist2")
                                                        console.log(code)
                                                        console.log(bdCmr.code)

                                                        // update cmr aqui

                                                        updateCmrbyCode(file, loading, origin, delivery, destination, carrierBookingReference, code)
                                                        setCheckFav("yes")

                                                        //  file, loading, origin, delivery, destination, carrierBookingReference, code
                                                        checkfor = checkfor + 1

                                                    }

                                                }

                                                console.log("checkfor")
                                                console.log(checkfor)

                                                if (checkfor == 0) {
                                                    createCmr({ idUser, code, file, fav, loading, origin, delivery, destination, carrierBookingReference });
                                                    setCheckFav("yes")
                                                }



                                                // loading, origin, delivery, destination


                                            }
                                        }).catch((err) => {
                                            alert('Problemas ficheiro Cmr');
                                        });
                                }

                            })




                            /*  
                                getCmrbyId(idUser).then((c: any) => {
    
                                    console.log(c)
    
                                    setCmrDataBd(c)
    
                                });
                            */

                        }
                    }).catch((err) => {
                        console.log(err)
                        alert('Problemas a listar cmr de bvaixo');
                    });

            });



        });



    }, []);

    useEffect(() => {

        getUtility().then((c: any) => {

            const utility = c;

            setIdUser(utility.values[0].idUser)

            console.log(utility.values[0].idUser)

            getUserById(utility.values[0].idUser).then((c: any) => {
                const user = c.values[0];

                const idUser = user.id

                
                getCmrbyId(idUser).then((c: any) => {

                    console.log(" fav fav fav get get get")

                    console.log(c)

                    console.log("cmrdata 2")
                    console.log(cmrData2)

                    setCmrDataBd(c.values)


                })
                

            });

        });

    }, [CheckFav])


    /*
        <IonCol onClick={() => { FavClickOff(json2) }} size='2'>
                                        <StarIcon style={{ color: 'rgb(29,146,191)' }}  />
                                    </IonCol>
    */
    useEffect(() => {



        setCmrDataFiltered(searchIt(cmrDataBd, SearchTerm))


        setFilterCheck(!filterCheck)

    }, [SearchTerm])

    const FavClickOff = (idCmr: any) => {

        updateCmrByCodeaddFav({ idCmr });

        setCheckFav("welele")

    };

    const FavClickOn = (idCmr: any) => {

        updateCmrByCodedelFav({ idCmr });
        setCheckFav("welelele")

    };





    const slideOpts = {
        initialSlide: 0,
        speed: 300
    };


    return (

        <>




            {cmrDataBd.map((json2) => (

                <>

                    <IonCard className="card" style={{ '--background': 'white', 'height': '155px' }}>

                        <IonGrid style={{ 'padding': '0px' }} >

                            <IonRow>

                                <IonCol onClick={() => { CmrClick(json2.code); }} size='4'

                                    style={{
                                        'background': 'rgb(29,146,191)', 'color': 'white', 'text-align': 'center', 'alignItems': 'center', 'display': 'flex', 'justifyContent': 'center'

                                    }}>

                                    {json2.carrierBookingReference}
                                </IonCol>

                                <IonCol size='6'>

                                </IonCol>



                                {json2.fav == "0" &&
                                    <>
                                        <IonCol onClick={() => { FavClickOff(json2.idCmr) }} size='2'>

                                            <StarIcon style={{ color: 'grey' }} />

                                        </IonCol>
                                    </>
                                }

                                {json2.fav == "1" &&
                                    <>
                                        <IonCol onClick={() => { FavClickOn(json2.idCmr) }} size='2'>

                                            <StarIcon style={{ color: 'blue' }} />

                                        </IonCol>
                                    </>
                                }



                            </IonRow>


                        </IonGrid>

                        <IonCardContent onClick={() => { CmrClick(json2.code); }} style={{ 'padding': '0px' }} >
                            <IonCardTitle style={{ 'color': 'black', 'text-align': 'left', 'padding-left': '20px', 'font-family': 'arial', 'fontStyle': 'italic', 'fontSize': '15px', 'padding-top': '5px' }} >Empresa Imperativa LDA</IonCardTitle>
                            <IonGrid>
                                <IonRow>
                                    <IonCol className="ion-align-self-center" style={{ 'color': 'lightgrey', 'padding': '0px', 'fontFamily': 'arial', 'padding-left': '10px' }} size="4"> Loading </IonCol>
                                    <IonCol style={{ 'color': 'black', 'padding': '0px', 'fontSize': '10px', 'fontFamily': 'arial' }} className="ion-align-self-center" size="8">   {json2.loading} </IonCol>
                                </IonRow>
                                <IonRow>
                                    <IonCol className="ion-align-self-center" style={{ 'color': 'lightgrey', 'padding': '0px', 'fontFamily': 'arial', 'padding-left': '10px' }} size="4"> Origin  </IonCol>
                                    <IonCol style={{ 'color': 'black', 'padding': '0px', 'fontSize': '10px', 'fontFamily': 'arial' }} className="ion-align-self-center" size="8">   {json2.origin} </IonCol>
                                </IonRow>
                                <IonRow>
                                    <IonCol className="ion-align-self-center" style={{ 'color': 'lightgrey', 'padding': '0px', 'fontFamily': 'arial', 'padding-left': '10px' }} size="4"> Delivery </IonCol>
                                    <IonCol style={{ 'color': 'black', 'padding': '0px', 'fontSize': '10px', 'fontFamily': 'arial' }} className="ion-align-self-center" size="8">   {json2.delivery} </IonCol>
                                </IonRow>
                                <IonRow>
                                    <IonCol className="ion-align-self-center" style={{ 'color': 'lightgrey', 'padding': '0px', 'fontFamily': 'arial', 'padding-left': '10px' }} size="4"> Destination </IonCol>
                                    <IonCol style={{ 'color': 'black', 'padding': '0px', 'fontSize': '10px', 'fontFamily': 'arial' }} className="ion-align-self-center" size="8">   {json2.destination} </IonCol>
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


/* ~
 {filterCheck === true &&
                <>
                    {cmrDataFiltered.map((json2) => (

                        <>

                            <IonCard className="card" style={{ '--background': 'white', 'height': '145px' }}>

                                <IonGrid style={{ 'padding': '0px' }} >

                                    <IonRow>

                                        <IonCol onClick={() => { CmrClick(json2.code); }} size='4'

                                            style={{
                                                'background': 'rgb(29,146,191)', 'color': 'white', 'text-align': 'center', 'alignItems': 'center', 'display': 'flex', 'justifyContent': 'center'

                                            }}>

                                            {json2.carrierBookingReference}
                                        </IonCol>

                                        <IonCol size='6'>

                                        </IonCol>



                                        {json2.fav == "0" &&
                                            <>
                                                <IonCol onClick={() => { FavClickOff(json2.idCmr) }} size='2'>

                                                    <StarIcon style={{ color: 'grey' }} />

                                                </IonCol>
                                            </>
                                        }

                                        {json2.fav == "1" &&
                                            <>
                                                <IonCol onClick={() => { FavClickOn(json2.idCmr) }} size='2'>

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
                                            <IonCol className="ion-align-self-center" style={{ 'color': 'lightgrey', 'padding': '0px', 'fontFamily': 'arial', 'padding-left': '10px' }} size="4"> Delivery </IonCol>
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
            }
           
*/