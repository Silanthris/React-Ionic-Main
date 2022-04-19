import {
  IonGrid,
  IonInput,
  IonRow,
  IonCol,
  IonCheckbox,
  IonLabel,
  IonButton,
  IonItem,
  IonContent,
  IonPage,
  IonToast,
} from "@ionic/react";
import { Box, Button, Checkbox, Chip, FormControlLabel, TextField } from "@mui/material";
import { pin } from "ionicons/icons";
import { useState } from "react";
import { Redirect } from "react-router";
import { createUser, updatePinById } from "../dataservice";
import { ConfType } from "../Enums/Enums"
import { updateUserById } from "../dataservice";
import { useTranslation } from "react-i18next";
import { ListItemSecondaryActionClassKey } from "@material-ui/core";
import { useHistory } from 'react-router-dom';
import { Router } from "workbox-routing";

const inputStyle = {
  height: "28px",
  border: "4px solid lightblue ",
  borderWidth: "thin",
  borderRadius: "7px",
  textAlign: "center",
};


type Props = {
  email: any,
  password: any,
  setConfCheck: any,
  confType: ConfType,
  id: any,
  token: any
}


const ConfAcesso = ({ email = "", password = "", setConfCheck, confType, id, token }: any) => {


  let history = useHistory();

  const [name, setName] = useState<any>("");
  
  const [showToast, setShowToast] = useState(false);
  const [showToast2, setShowToast2] = useState(false);

  console.log("yasuo")
  console.log("yasuo")
  console.log(token)
  console.log("yasuo")
  console.log("yasuo")

  const [pin, setPin] = useState<string>("");
  const [repetirPin, setRepetirPin] = useState<string>("Repetir Pin");
  const [focusedPin, setFocus] = useState<string>("Pin");
  const { t } = useTranslation();

  const changePin = (number: string) => {
    if (focusedPin === "Pin") {
      setPin(getPin(number));
    } else if (focusedPin === "Repetir Pin") {
      setRepetirPin(getPin(number));
    }
  };

  const getPin = (number: string) => {
    let p;
    if (focusedPin === "Pin") {
      if (pin?.length < 4) {
        p = pin + number;
      } else p = pin;
      if (pin?.length == 3) {
        setFocus("Repetir Pin");
        setRepetirPin("");
      }
    } else {
      if (repetirPin?.length < 4) {
        console.log("number :" + number);
        p = repetirPin + number;
      } else p = repetirPin;
    }
    return p;
  };

  const validateName = (name: any) => {
    return String(name)
      .toLowerCase()
      .match(/^[a-zA-Z]{3,}(?: [a-zA-Z]+){0,2}$/);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    const name = data.get("name");



    if (pin === repetirPin) {

      if (confType === ConfType.updatePin) {
        await updatePinById(id, { pin });
        window.location.replace("/")
      }
      else {
        if (validateName(name)) {

          if (confType === ConfType.create) {

            await createUser({ name, password, email, pin, token });
          } else {
            setConfCheck(false)
            await updateUserById(id, { name, pin });

          }
          window.location.replace("/")

        } else {
          setShowToast(true);
        }
      }
    } else {
      setShowToast2(true);
    }
  };

  const resetPin = () => {
    setFocus("Pin");
    setPin("");
    setRepetirPin("Repetir Pin");
  };

  const hideStr = (str: string) => {
    let pn: string = "";
    for (let i = 0; i < str.length; i++) {
      pn += "*";
    }
    return pn;
  };

  return (
    <IonPage>
      <div style={{ paddingTop: "35%" }} />
      <IonContent className="ion-padding">
        <IonGrid className="ion-padding">



          {confType === ConfType.updatePin ? (

            <h5 className="ion-text-left">{t('confAccess.changePin')}</h5>

          ) : (

            <h5 className="ion-text-left">{t('confAccess.confAccess')}</h5>

          )}
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            {confType != ConfType.updatePin && (

              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label={t('confAccess.name')}
                name="name"
                autoComplete="name"
                autoFocus
              />

            )}
            <IonRow color="primary" justify-content-center>
              <IonCol size="6" className="ion-margin-top">
                <div className="ion-text-center ion-margin-top">
                  <div style={{ width: "100%" }}>
                    <Chip
                      label={hideStr(pin)}
                      style={{ borderRadius: "5px", height: "40px", width: "100%" }}
                      variant="outlined"
                    />
                  </div>
                  <div className="ion-margin-top" style={{ width: "100%" }}>
                    <Chip
                      label={focusedPin == "Repetir Pin" ? hideStr(repetirPin) : repetirPin}
                      style={{ borderRadius: "5px", height: "40px", width: "100%" }}
                      variant="outlined"
                    />
                  </div>
                  <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                    {t('confAccess.confirm')}
                  </Button>
                </div>
              </IonCol>
              <IonCol size="6">
                <IonRow>
                  <IonCol size="4">
                    <IonItem
                      onClick={() => {
                        changePin("1");
                      }}
                    >
                      1
                    </IonItem>
                  </IonCol>
                  <IonCol size="4">
                    <IonItem
                      onClick={() => {
                        changePin("2");
                      }}
                    >
                      2
                    </IonItem>
                  </IonCol>

                  <IonCol size="4">
                    <IonItem
                      onClick={() => {
                        changePin("3");
                      }}
                    >
                      3
                    </IonItem>
                  </IonCol>
                  <IonCol size="4">
                    <IonItem
                      onClick={() => {
                        changePin("4");
                      }}
                    >
                      4
                    </IonItem>
                  </IonCol>
                  <IonCol size="4">
                    <IonItem
                      onClick={() => {
                        changePin("5");
                      }}
                    >
                      5
                    </IonItem>
                  </IonCol>

                  <IonCol size="4">
                    <IonItem
                      onClick={() => {
                        changePin("6");
                      }}
                    >
                      6
                    </IonItem>
                  </IonCol>
                  <IonCol size="4">
                    <IonItem
                      onClick={() => {
                        changePin("7");
                      }}
                    >
                      7
                    </IonItem>
                  </IonCol>
                  <IonCol size="4">
                    <IonItem
                      onClick={() => {
                        changePin("8");
                      }}
                    >
                      8
                    </IonItem>
                  </IonCol>

                  <IonCol size="4">
                    <IonItem
                      onClick={() => {
                        changePin("9");
                      }}
                    >
                      9
                    </IonItem>
                  </IonCol>

                  <IonCol size="4">
                    <IonItem>R</IonItem>
                  </IonCol>
                  <IonCol size="4">
                    <IonItem
                      onClick={() => {
                        resetPin();
                      }}
                    >
                      C
                    </IonItem>
                  </IonCol>

                  <IonCol size="4">
                    <IonItem
                      onClick={() => {
                        changePin("0");
                      }}
                    >
                      0
                    </IonItem>
                  </IonCol>
                </IonRow>
              </IonCol>
            </IonRow>
          </Box>
        </IonGrid>
      </IonContent>
      <IonToast
        isOpen={showToast}
        onDidDismiss={() => setShowToast(false)}
        message={t('toast.validName')}
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
      <IonToast
        isOpen={showToast2}
        onDidDismiss={() => setShowToast2(false)}
        message={t('toast.validPin')}
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
    </IonPage>
  );
};

export default ConfAcesso;
