import { IonCol } from "@ionic/react";
import styles from "./KeypadInput.module.css";

const KeypadInput = (props: {
  handleChange?: any;
  value?: any;
  isActive?: any;
  isFilled?: any;
  incorrect?: any;
  correct?: any;
}) => {
  const { value, isActive = false, isFilled = false, incorrect, correct } = props;

  return (
    <IonCol size="2">
      <div
        className={`${styles.keypadInput} ${isActive && styles.active} ${isFilled && styles.filled} ${
          incorrect && styles.incorrect
        } ${correct && styles.correct}`}
        onClick={props.handleChange}
      >
        {value && <>*</>}
        {!isFilled && "0"}
      </div>
    </IonCol>
  );
};

export default KeypadInput;
