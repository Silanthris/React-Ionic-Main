import { IonButton, IonCol, IonIcon } from "@ionic/react";
import { t } from "i18next";
import { backspaceOutline } from "ionicons/icons";
import styles from "./KeypadButton.module.css";

const KeypadButton = (props: {
  small: any;
  value: any;
  remove: any;
  handleClick: any;
  isDisabled?: boolean;
  correct: any;
}) => {
  const { small, value, remove, handleClick, isDisabled = false, correct } = props;
  const newPin = "Novo Pin".split(" ");
  return (
    <IonCol size="4" className={styles.keypadButton}>
      <IonButton
        disabled={(!small || correct) && isDisabled}
        className={`${styles.keypadButton} ${small && styles.smallKeypadButton}`}
        onClick={handleClick}
      >
        {remove ? (
          <IonIcon style={{ fontSize: "27px" }} icon={backspaceOutline} />
        ) : value === "Reset" ? (
          <>
            {newPin[0]}
            <br /> {newPin[1]}
          </>
        ) : (
          value
        )}
      </IonButton>
    </IonCol>
  );
};

export default KeypadButton;

