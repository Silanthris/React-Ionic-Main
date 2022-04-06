import { IonButton, IonCol, IonIcon } from "@ionic/react";
import { backspaceOutline } from "ionicons/icons";
import styles from "./KeypadButton.module.css";

const KeypadButton = (props: { small: any; value: any; remove: any; handleClick: any; isDisabled?: boolean ; correct: any; }) => {

  const { small, value, remove, handleClick, isDisabled = false, correct } = props;

  return (
    <IonCol size="4" className={ styles.keypadButton }>
      <IonButton disabled={ (!small || correct) && isDisabled } className={ `${ styles.keypadButton } ${ small && styles.smallKeypadButton }` } onClick={ handleClick }>
        { !remove && value }
        { remove && <IonIcon icon={ backspaceOutline } /> }
      </IonButton>
    </IonCol>
  );
}

export default KeypadButton;