import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCol,
  IonContent,
  IonFooter,
  IonGrid,
  IonIcon,
  IonItem,
  IonLabel,
  IonRow,
  IonText,
} from "@ionic/react";
import React, { useEffect, useState } from "react";
import { add, build, personAdd, trash, wifi } from "ionicons/icons";
import { personCircle, settingsOutline } from "ionicons/icons";
import { useTranslation } from "react-i18next";
/**
 *
 * @param param0
 */

export const UserList: React.FC<any> = ({ users, userClicked, onDelete, onEdit }) => {
  const [showOptions, setShowOptions] = useState(false);
  const editUser = (id: any, event: any) => {
    event.stopPropagation();
    onEdit(id);
  };



  const { t } = useTranslation();


  const deleteUser = (id: any, event: any) => {
    event.stopPropagation();
    onDelete(id);
  };

  return (
    <div>
      <div style={{ position: "relative", textAlign: "center", color: "white;", width: "100%" }}>
        <img style={{ width: "120%" }} src="https://vistapointe.net/images/people-wallpaper-7.jpg" alt="avatar" />
        <h1
          style={{
            background: "lightgray",
            borderRadius: "7px",
            opacity: "0.75",
            position: "absolute",
            left: "5px",
            bottom: "0px",
            paddingLeft: "5px",
            paddingRight: "5px",
          }}
        >
          {t('principal.ola')}
        </h1>
      </div>
      <IonGrid>
        <IonRow></IonRow>
        <IonRow>
          {users?.values?.map((user: any) => {
            return (
              <>
                <IonCol size="6">
                  <IonCard
                    style={{ background: "lightgray", position: "relative" }}
                    onClick={() => {
                      userClicked(user.id);
                    }}
                  >
                    <IonButtons style={{ position: "absolute", display: "flex", flexDirection: "column", right: 0 }}>
                      {showOptions ? (
                        <>
                          <IonButton
                            size="large"
                            color="secondary"
                            onClick={(e) => {
                              editUser(user.id, e);
                            }}
                          >
                            {" "}
                            <IonIcon color="primary" icon={build} />{" "}
                          </IonButton>

                          <IonButton
                            size="large"
                            color="secondary"
                            onClick={(e) => {
                              deleteUser(user.id, e);
                            }}
                          >
                            <IonIcon color="danger" icon={trash} />
                          </IonButton>
                        </>
                      ) : null}
                    </IonButtons>

                    <div className="ion-text-center ion-margin-top">
                      <IonRow>
                        <IonCol>
                          <img style={{ height: "40px", width: "40px" }} src="/assets/person-circle.svg"></img>
                        </IonCol>
                      </IonRow>
                    </div>

                    <IonCardContent className="ion-text-center">
                      <div style={{ color: "black" }}>
                        <b>{user.name}</b>
                      </div>
                    </IonCardContent>
                  </IonCard>
                </IonCol>
              </>
            );
          })}
          {showOptions ? (
            <IonCol size="6">
              <IonCard style={{ background: "lightgray" }} href="/register" slot="">
                <div className="ion-text-center ion-margin-top">
                  <IonRow>
                    <IonCol>
                      <img style={{ height: "40px", width: "40px" }} src="/assets/add.png"></img>
                    </IonCol>
                  </IonRow>
                </div>
                <IonCardContent className="ion-text-center">
                  <div style={{ color: "black" }}>
                    <b>{t('principal.add')}</b>
                  </div>
                </IonCardContent>
              </IonCard>
            </IonCol>
          ) : null}
        </IonRow>
        <IonRow>
          <IonCol>
            <IonButton
              onClick={() => {
                console.log(showOptions);
                setShowOptions(!showOptions);
              }}
              style={{ position: "fixed", width: "100%", bottom: "0", right: "0" }}
            >
              <IonIcon icon={settingsOutline}></IonIcon>
            </IonButton>
          </IonCol>
        </IonRow>
      </IonGrid>
    </div>
  );
};
