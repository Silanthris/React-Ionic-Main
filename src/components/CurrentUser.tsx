import { IonCardContent, IonCard, IonCardHeader, IonCardSubtitle, IonButton } from "@ionic/react";
import React from "react";

/**
 *
 * @param param0
 */
export const CurrentUser: React.FC<any> = ({ user, onDelete, onEdit }) => {
  return (
    <div>
      {user?.values[0] && (
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>
              <h3>Current User</h3>
            </IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            <div>{user?.values[0].name}</div>
            {user?.values[0].user_name} - {user?.values[0].id}
          </IonCardContent>
          {/* <IonButton size="small" style={{ margin: 8 }} onClick={() => onEdit(user?.values[0].id)}>
            EDIT
          </IonButton> */}
          <IonButton size="small" color="danger" style={{ margin: 8 }} onClick={() => onDelete(user?.values[0].id)}>
            DELETE
          </IonButton>
          <IonButton size="small" color="primary" style={{ margin: 8 }} routerLink={"/login"}>
            Login
          </IonButton>
        </IonCard>
      )}
    </div>
  );
};
