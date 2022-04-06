import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonViewWillEnter,
} from "@ionic/react";

import React, { useEffect, useState } from "react";
import { queryAllUsers, getUserById, deleteUserById } from "../dataservice";
import { CurrentUser } from "../components/CurrentUser";
import { UserList } from "../components/UserList";
import Login from "../components/Login";
import { useHistory } from "react-router";
import { ConfType, EnumTask } from '../Enums/Enums'
import { EnumType } from "typescript";
import ConfAcesso from "../components/ConfAcesso";

const Home: React.FC = () => {
  const [queryResults, setQueryResults] = useState<any>(null);
  const [currentUser, setCurrentUser] = useState<any>(null);

  const [confCheck, setConfCheck] = useState(false);
  const [loginCheck, setLoginCheck] = useState(false);
  const [loginTask, setloginTask] = useState<EnumTask>(EnumTask.login);

  const [pin, setPin] = useState<any>();
  const [id, setId] = useState<any>();

  const history = useHistory();

  useEffect(() => {
    queryAllUsers().then(setQueryResults);
    setCurrentUser(null);
  }, [confCheck]);
  /**
 *
 * @param userId
 */
  const getById = async (userId: any) => {
    setloginTask(EnumTask.login)

    getPin(userId)

    setLoginCheck(true);
  };

  const getPin = async (userId: any) => {

    getUserById(userId).then((c: any) => {
      const user = c.values[0];
      setPin(user.pin);
      setId(user.id);
    });


  };



  const deleteUser = async () => {

    await deleteUserById(id);
     const data = await queryAllUsers();
 
     setQueryResults(data);
     setCurrentUser(null);
     setLoginCheck(false);
   };

  return (
    <IonPage>
      <IonContent fullscreen className="ion-padding">
        {loginCheck ? (
          <Login pin={pin} id={id} setLoginCheck={setLoginCheck} deleteUser={deleteUser} setConfCheck={setConfCheck} enumTask={loginTask} />
        ) : (
          <div>
            <UserList
              users={queryResults}
              onDelete={(id: any) => {
                getPin(id)
                setloginTask(EnumTask.delete)
                setLoginCheck(true)
              }}
              onEdit={(id: any) => {
                getPin(id)
                setloginTask(EnumTask.edit)
                setLoginCheck(true)
              }}
              userClicked={getById}
            />
          </div>
        )}
        {confCheck &&
          <ConfAcesso id={id} setConfCheck={setConfCheck} confType={ConfType.update} />
        }
      </IonContent>
    </IonPage>
  );
};

export default Home;
