import { IonPage, IonContent, IonToast } from "@ionic/react";
import {
  CssBaseline,
  Box,
  Avatar,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Grid,
} from "@mui/material";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import ConfAcesso from "../components/ConfAcesso";
import { ConfType } from "../Enums/Enums";
import { useTranslation } from "react-i18next";
import { isTemplateLiteralToken } from "typescript";

const Register: React.FC<any> = ({ resetPin = false, id }) => {
  const [showToast, setShowToast] = useState(false);

  const [token, setToken] = useState<string>("");

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");


  const [emailData, setEmailData] = useState<string>("");
  const [passwordData, setPasswordData] = useState<string>("");

  const [validado, setValidado] = useState(false);
  const { t } = useTranslation();

  const validateEmail = (email: any) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };


  const loginApi = (email: any, password: any) => {


    fetch('https://try.bizcargo.com/oauth/token', {
      headers: { 'Content-type': 'application/x-www-form-urlencoded' },
      method: 'POST',
      body: new URLSearchParams({
        'username': email,
        'password': password,
        'grant_type': 'password',
        'scope': 'read write',
        'client_secret': 'mySecretOAuthSecret',
        'client_id': 'lswapp'
      })
    })
      .then(r => r.json())
      .then((response) => {
        if (response.access_token) {

          setToken(response.access_token)

        }
      }).catch((err) => {
        alert('Login Errado');
      });

  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const email = data.get("email");
    const password = data.get("password");


    if (validateEmail(email)) {

      setPasswordData(password!.toString())
      setEmailData(email!.toString())
      setShowToast(false);

      console.log(emailData)
      console.log(passwordData)

      await loginApi(emailData, passwordData)

      console.log("token")
      console.log(token)
      console.log("token")


    } else {

      setShowToast(true);

    }


    if (token) {
      setValidado(true)
    }


  };

  return (
    <IonPage>
      <IonContent>
        {validado ? (
          <ConfAcesso id={id} token={token} email={email} password={password} confType={resetPin ? ConfType.updatePin : ConfType.create} />
        ) : (
          <div style={{ paddingLeft: "40px", paddingRight: "40px" }}>
            <CssBaseline />
            <Box
              sx={{
                marginTop: "40%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}></Avatar>
              <Typography component="h1" variant="h5">
                {t('loginForm.login')}
              </Typography>
              <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label={t('loginForm.email')}
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label={t('loginForm.password')}
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                <FormControlLabel
                  control={<Checkbox value="fingerprint" color="primary" />}
                  label={t('loginForm.fingerPrint')}
                />
                <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                  {t('loginForm.login')}
                </Button>
              </Box>
            </Box>
          </div>
        )}
      </IonContent>
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
    </IonPage>
  );
};

export default Register;
