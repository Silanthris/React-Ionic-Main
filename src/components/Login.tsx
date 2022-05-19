import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonImg,
  IonModal,
  IonPage,
  IonRow,
  IonTitle,
  IonToast,
  IonToolbar,
} from "@ionic/react";
import { arrowForwardOutline } from "ionicons/icons";
import styles from "../components/styles/Login.module.css";
import KeypadInputs from "./keypad/KeypadInputs";
import Keypad from "./keypad/Keypad";
import { useEffect, useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
// import { Plugins } from "@capacitor/core";
import { ConfType, EnumTask } from '../Enums/Enums'
import React from "react";
import { useTranslation } from "react-i18next";
import Register from "../pages/Register";
import ConfAcesso from "./ConfAcesso";
import { idText } from "typescript";

import { getUserById, updateTokenById } from "../dataservice";



import { useSelector, useDispatch } from 'react-redux'

import { changeId } from "./redux/slices/idSlice"

type Props = {
  pin: any,
  id: any,
  setLoginCheck: any,
  setConfCheck: any,
  deleteUser: any,
  enumTask: EnumTask
}

const Login: React.FC<Props> = ({ pin, id, setLoginCheck, setConfCheck, deleteUser, enumTask }) => {

  let history = useHistory();

  const correctCode = { ...pin };

  const dispatch = useDispatch()

  const [showToast, setShowToast] = useState(false);
  const [keypadValues, setKeypadValues] = useState<any>(["", "", "", ""]);
  const [activeIndex, setActiveIndex] = useState<any>(0);
  const [validado, setValidado] = useState(false);
  const successRef = useRef<any>();
  // const { BiometricAuth } = Plugins;

  const [showModal, setShowModal] = useState(false);
  const [incorrect, setIncorrect] = useState<any>(false);
  const [correct, setCorrect] = useState<any>(false);

  const { t } = useTranslation();

  const handleClick = (index: number, value: string) => {

    const tempValues = [...keypadValues];
    tempValues[index] = parseInt(value);

    setKeypadValues(tempValues);
    setActiveIndex((activeIndex: number) => activeIndex + 1);
  };

  const handleAlert = (index: number, value: string) => {

    setConfCheck(false)
    setShowModal(true)

  };

  const handleRemove = () => {
    const tempValues = [...keypadValues];
    tempValues[activeIndex - 1] = "";

    setKeypadValues(tempValues);
    activeIndex > 0 && setActiveIndex((activeIndex: number) => activeIndex - 1);
    setIncorrect(false);
    setCorrect(false);
  };

  useEffect(() => {
    if (parseInt(activeIndex) === parseInt(keypadValues.length)) {
      var error = false;

      keypadValues.forEach((value: string, index: string | number) => {
        if (parseInt(value) !== parseInt(correctCode[index])) {
          error = true;
          return false;
        }
      });

      if (error) {
        setIncorrect(true);
      } else {
        setCorrect(true);

        setTimeout(() => {
          successRef.current.classList.remove("hidden");
          successRef.current.classList.add("success");
        }, 900);

        setLoginCheck(false);


        if (enumTask === EnumTask.login) {

          dispatch(changeId(id))

          getUserById(id).then((c: any) => {
            const user = c.values[0];

            // setUserToken(user.token);

            console.log(user)
            console.log("yasoo")


            fetch('https://try.bizcargo.com/oauth/token', {
              headers: { 'Content-type': 'application/x-www-form-urlencoded' },
              method: 'POST',
              body: new URLSearchParams({
                'grant_type': 'refresh_token',
                'scope': 'read write',
                'client_secret': 'mySecretOAuthSecret',
                'client_id': 'lswapp',
                'refresh_token': user.refreshToken
              })
            })
              .then(r => r.json())
              .then((response) => {
                if (response.access_token) {
                  console.log(response)

                  updateTokenById(id,response.access_token,response.refresh_token)

                }
              }).catch((err) => {
                alert('Login Errado');
              });


          });

          history.push({ pathname: '/cmr/dashboard' })





          //   history.push("/placeholder")

        }

        if (enumTask === EnumTask.edit) {
          setConfCheck(true);
        }

        if (enumTask === EnumTask.delete) {
          deleteUser()
        }
      }
    }
  }, [activeIndex]);


  /*

  const loginWithFinger = async () => {
    const available = await BiometricAuth.isAvailable();
    const hasBiometricAuth = available.has;
    console.log("Tentou");

    if (hasBiometricAuth) {
      console.log("Tem Biometria");
      const authResult = await BiometricAuth.verify({
        reason: "Session expired",
        title: "Session timed out",
      });
      if (authResult.verified) {
        console.log("Logged In");
      }
    } else {
      console.log("Nao Tem Biometria");
    }
  };
  */

  return (
    <IonPage>
      <IonContent>
        {validado ? (
          <ConfAcesso confType={ConfType.updatePin} />
        ) : (
          <div>
            <IonGrid className="ion-text-center ">
              <IonRow style={{ paddingTop: "32%" }}>
                <IonCol size="12">
                  <div
                    onClick={() => {
                      //   loginWithFinger();
                    }}
                  >
                    <IonImg src="/assets/impDig.png" className={styles.logo} />
                  </div>
                  <h1>{t<string>('pinPage.verification')}</h1>
                  <p></p>
                </IonCol>
              </IonRow>
              <KeypadInputs incorrect={incorrect} correct={correct} values={keypadValues} activeIndex={activeIndex} />
              {incorrect && <p className={styles.incorrect}>{t<string>('pinPage.wrong')}</p>}
              <Keypad
                handleRemove={handleRemove}
                handleClick={handleClick}
                handleAlert={handleAlert}
                activeIndex={activeIndex}
                amount={keypadValues.length}
                correct={correct}
              />
            </IonGrid>
          </div>
        )}
        <IonToast
          isOpen={showToast}
          onDidDismiss={() => setShowToast(false)}
          message={t('toast.validEmail')}
          duration={2000}
          position="top"
          buttons={[
            {
              text: "Ok",
              role: "cancel",
              handler: () => {
                console.log("ok clicked");
              },
            },
          ]}
        />

        <IonModal isOpen={showModal}>

          <Register id={id} resetPin={true} />

        </IonModal>

      </IonContent>
    </IonPage>
  );
};

export default Login;
function useNavigate() {
  throw new Error("Function not implemented.");
}
