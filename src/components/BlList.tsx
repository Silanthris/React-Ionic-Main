import { IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonItem, IonLabel, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';

import '../components/util/css/Page.css';
import { useEffect, useState } from 'react';
import { createBl, deleteBlnotFav, getBlbyId, getUserById, getUtility, updateBlbyCode, updateBlByCodeaddFav, updateBlByCodedelFav } from '../dataservice';

import "../components/util/css/List.css"
import StarIcon from '@mui/icons-material/Star';
import { useSelector, useDispatch } from 'react-redux'



type Props = {
    BlClick: any,
    SearchTerm: any
}


const BlList: React.FC<Props> = ({ BlClick, SearchTerm }) => {

    const [CheckFav, setCheckFav] = useState("");
    const [blData, setBlData] = useState<Array<any>>([]);

    const [blDatabd, setBlDatabd] = useState<Array<any>>([]);

    const [idUser, setIdUser] = useState<String>("");

    const [blDataFiltered, setBlDataFiltered] = useState<Array<any>>([]);

    const [filterCheck, setFilterCheck] = useState(false);

    const BlCodeRedux = useSelector((state: any) => state.code.value)

    const searchIt = (posts: Array<any>, str: string) => {

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

        deleteBlnotFav(0);

        getUtility().then((c: any) => {
            const utility = c;
            console.log("databse id uytility")
            console.log(utility.values[0].idUser)
            setIdUser(utility.values[0].idUser)

            getUserById(utility.values[0].idUser).then((c: any) => {

                const user = c.values[0];
                const idUser = user.id
                console.log("aqui bllist")
                console.log(user)
                // setUserToken(user.token);


                fetch('https://try.bizcargo.com/api/bl/bl-documents?active=true&completed=false&daysFilter=0&page=0&size=10&sort=created_date,DESC&template=false', {
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
                            setFilterCheck(false)
                            const temp = response.content
                            setBlData(temp)

                            console.log("first fetch bl")

                            console.log(response)

                            getBlbyId(idUser).then((d: any) => {

                                const bdBl = d.values


                                for (var i = 0; i < temp.length; i++) {

                                    var code = temp[i].code

                                    fetch(`https://try.bizcargo.com/api/bl/bl-documents/${code}/6?type=active`, {
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
                                                console.log("user")
                                                console.log(user)

                                                var file = JSON.stringify(response)
                                                var fav = 0
                                                const portOfLoading = response.portOfLoading
                                                const portOfDischarge = response.portOfDischarge
                                                const journey = response.journey
                                                const voyage = response.voyage
                                                

                                                var checkfor = 0

                                                
                                                for (var j = 0; j < bdBl.length; j++) {


                                                    var yasuo = JSON.stringify(bdBl.code)

                                                    console.log("yasuo232323232323")
                                                    console.log(bdBl)
                                                    console.log(code)


                                                    if (code == bdBl[j].code) {

                                                        // update bl aqui

                                                        updateBlbyCode(file, portOfLoading, portOfDischarge, journey, voyage, code)
                                                        setCheckFav("yes")

                                                        //  file, loading, origin, delivery, destination, carrierBookingReference, code
                                                        checkfor = checkfor + 1

                                                    }

                                                }

                                                if (checkfor == 0) {
                                                    createBl({ idUser, code, file, fav, portOfLoading, portOfDischarge, journey, voyage});
                                                    setCheckFav("yes")
                                                }
                                               
                                            }
                                        }).catch((err) => {
                                            alert('Problemas Ficheiro Bl bllist fileonly');
                                        });

                                }

                            })


                        }
                    }).catch((err) => {
                        console.log(err)
                        alert('Problemas a listar BL');
                    });



            });

        });



    }, []);

    useEffect(() => {

        setFilterCheck(true)

        setBlDataFiltered(searchIt(blData, SearchTerm))

    }, [SearchTerm])

    useEffect(() => {

        getUtility().then((c: any) => {

            const utility = c;

            setIdUser(utility.values[0].idUser)

            console.log(utility.values[0].idUser)

            getUserById(utility.values[0].idUser).then((c: any) => {
                const user = c.values[0];

                const idUser = user.id

                getBlbyId(idUser).then((c: any) => {

                    console.log(" fav fav fav get get get")

                    console.log(c)

                    setBlDatabd(c.values)

                })

            });

        });

    }, [CheckFav])

    const FavClickOff = (idBl: any) => {

        updateBlByCodeaddFav({ idBl });

        setCheckFav("welele")


    };

    const FavClickOn = (idBl: any) => {

        updateBlByCodedelFav({ idBl });
        setCheckFav("welelele")

    };


    return (


        <>

            {filterCheck === false &&
                <>
                    {blDatabd.map((json2) => (

                        <>


                            <IonCard className="card" style={{ '--background': 'white', 'height': '155px' }}>

                                <IonGrid style={{ 'padding': '0px' }} >

                                    <IonRow>

                                        <IonCol onClick={() => { BlClick(json2.code); }} size='4' style={{ 'background': 'rgb(14,14,156)', 'color': 'white', 'text-align': 'center', 'alignItems': 'center', 'display': 'flex', 'justifyContent': 'center' }}>
                                            Bl {json2.journey}
                                        </IonCol>

                                        <IonCol size='6'>

                                        </IonCol>

                                        {json2.fav == "0" &&
                                            <>
                                                <IonCol onClick={() => { FavClickOff(json2.idBl) }} size='2'>

                                                    <StarIcon style={{ color: 'grey' }} />

                                                </IonCol>
                                            </>
                                        }

                                        {json2.fav == "1" &&
                                            <>
                                                <IonCol onClick={() => { FavClickOn(json2.idBl) }} size='2'>

                                                    <StarIcon style={{ color: 'blue' }} />

                                                </IonCol>
                                            </>
                                        }

                                    </IonRow>


                                </IonGrid>

                                <IonCardContent onClick={() => { BlClick(json2.code); }} style={{ 'padding': '0px' }} >
                                    <IonCardTitle style={{ 'color': 'black', 'text-align': 'left', 'padding-left': '20px', 'font-family': 'arial', 'fontStyle': 'italic', 'fontSize': '15px', 'padding-top': '5px' }} >Empresa Imperativa LDA</IonCardTitle>
                                    <IonGrid>
                                        <IonRow>
                                            <IonCol className="ion-align-self-center" style={{ 'color': 'lightgrey', 'padding': '0px', 'fontFamily': 'arial', 'padding-left': '10px' }} size="4"> Loading </IonCol>
                                            <IonCol style={{ 'color': 'black', 'padding': '0px', 'fontSize': '10px', 'fontFamily': 'arial' }} className="ion-align-self-center" size="8"> {json2.portOfLoading} </IonCol>
                                        </IonRow>
                                        <IonRow>
                                            <IonCol className="ion-align-self-center" style={{ 'color': 'lightgrey', 'padding': '0px', 'fontFamily': 'arial', 'padding-left': '10px' }} size="4"> Discharge  </IonCol>
                                            <IonCol style={{ 'color': 'black', 'padding': '0px', 'fontSize': '10px', 'fontFamily': 'arial' }} className="ion-align-self-center" size="8"> {json2.portOfDischarge} </IonCol>
                                        </IonRow>
                                        <IonRow>
                                            <IonCol className="ion-align-self-center" style={{ 'color': 'lightgrey', 'padding': '0px', 'fontFamily': 'arial', 'padding-left': '10px' }} size="4"> Journey </IonCol>
                                            <IonCol style={{ 'color': 'black', 'padding': '0px', 'fontSize': '10px', 'fontFamily': 'arial' }} className="ion-align-self-center" size="8"> {json2.journey} </IonCol>
                                        </IonRow>
                                        <IonRow>
                                            <IonCol className="ion-align-self-center" style={{ 'color': 'lightgrey', 'padding': '0px', 'fontFamily': 'arial', 'padding-left': '10px' }} size="4"> Voyage </IonCol>
                                            <IonCol style={{ 'color': 'black', 'padding': '0px', 'fontSize': '10px', 'fontFamily': 'arial' }} className="ion-align-self-center" size="8"> {json2.voyage} </IonCol>
                                        </IonRow>
                                    </IonGrid>
                                </IonCardContent>
                            </IonCard>
                        </>
                    ))}
                </>
            }

            {filterCheck === true &&
                <>
                    {blDataFiltered.map((json2) => (

                        <>


                            <IonCard onClick={() => { BlClick(json2.code); }} className="card" style={{ '--background': 'white', 'height': '145px' }}>

                                <IonGrid style={{ 'padding': '0px' }} >

                                    <IonRow>

                                        <IonCol size='4' style={{ 'background': 'rgb(14,14,156)', 'color': 'white', 'text-align': 'center', 'vertical-align': 'middle', 'display': 'flex' }}>
                                            Bl {json2.journey}
                                        </IonCol>

                                        <IonCol size='6'>

                                        </IonCol>

                                        <IonCol size='2'>
                                            <StarIcon />
                                        </IonCol>

                                    </IonRow>



                                </IonGrid>

                                <IonCardContent style={{ 'padding': '0px' }} >
                                    <IonCardTitle style={{ 'color': 'black', 'text-align': 'left', 'padding-left': '20px', 'font-family': 'arial', 'fontStyle': 'italic', 'fontSize': '15px', 'padding-top': '5px' }} >Empresa Imperativa LDA</IonCardTitle>
                                    <IonGrid>
                                        <IonRow>
                                            <IonCol className="ion-align-self-center" style={{ 'color': 'lightgrey', 'padding': '0px', 'fontFamily': 'arial', 'padding-left': '10px' }} size="4"> Loading </IonCol>
                                            <IonCol style={{ 'color': 'black', 'padding': '0px', 'fontSize': '10px', 'fontFamily': 'arial' }} className="ion-align-self-center" size="8"> {json2.portOfLoading} </IonCol>
                                        </IonRow>
                                        <IonRow>
                                            <IonCol className="ion-align-self-center" style={{ 'color': 'lightgrey', 'padding': '0px', 'fontFamily': 'arial', 'padding-left': '10px' }} size="4"> Discharge  </IonCol>
                                            <IonCol style={{ 'color': 'black', 'padding': '0px', 'fontSize': '10px', 'fontFamily': 'arial' }} className="ion-align-self-center" size="8"> {json2.portOfDischarge} </IonCol>
                                        </IonRow>
                                        <IonRow>
                                            <IonCol className="ion-align-self-center" style={{ 'color': 'lightgrey', 'padding': '0px', 'fontFamily': 'arial', 'padding-left': '10px' }} size="4"> Journey </IonCol>
                                            <IonCol style={{ 'color': 'black', 'padding': '0px', 'fontSize': '10px', 'fontFamily': 'arial' }} className="ion-align-self-center" size="8"> {json2.journey} </IonCol>
                                        </IonRow>
                                        <IonRow>
                                            <IonCol className="ion-align-self-center" style={{ 'color': 'lightgrey', 'padding': '0px', 'fontFamily': 'arial', 'padding-left': '10px' }} size="4"> Voyage </IonCol>
                                            <IonCol style={{ 'color': 'black', 'padding': '0px', 'fontSize': '10px', 'fontFamily': 'arial' }} className="ion-align-self-center" size="8"> {json2.voyage} </IonCol>
                                        </IonRow>
                                    </IonGrid>
                                </IonCardContent>
                            </IonCard>
                        </>
                    ))}
                </>
            }




        </>
    );
};
export default BlList;


/*

*/