

import { IonButton, IonCol, IonRow } from "@ionic/react";

import styles from "./Keypad.module.css";
import KeypadButton from "./KeypadButton";
import { KeypadParams } from "../helper/interfaces";

const Keypad = (props: KeypadParams) => {
    const { activeIndex, handleClick, handleRemove, amount, correct, handleReset } = props;

    const keypadButtons = [

        { value: "1", handleClick: () => handleClick(activeIndex, 1), small: false, remove: false }, {
            value: "2", handleClick: () => handleClick(activeIndex, 2), small: false, remove: false
        }, { value: "3", handleClick: () => handleClick(activeIndex, 3), small: false, remove: false },

        { value: "4", handleClick: () => handleClick(activeIndex, 4), small: false, remove: false }, {
            value: "5", handleClick: () => handleClick(activeIndex, 5), small: false, remove: false
        }, { value: "6", handleClick: () => handleClick(activeIndex, 6), small: false, remove: false },

        { value: "7", handleClick: () => handleClick(activeIndex, 7), small: false, remove: false }, {
            value: "8", handleClick: () => handleClick(activeIndex, 8), small: false, remove: false
        }, { value: "9", handleClick: () => handleClick(activeIndex, 9), small: false, remove: false },

        { value: "", small: true, remove: false, alert: true }, {
            value: "0", handleClick: () => handleClick(activeIndex, 0), small: false, remove: false
        }, { value: "Limpar", handleClick: () => handleRemove(), small: true, remove: true },

    ];

    return <div className={`${styles.keypad}`}>

        <IonRow>
            {keypadButtons.map((button, index) => {
                return (<KeypadButton
                    correct={correct}
                    isDisabled={parseInt(activeIndex) === parseInt(amount)}
                    key={index}
                    value={button.value}
                    handleClick={button.handleClick}
                    small={button.small}
                    remove={button.remove}
                />);
            })}
        </IonRow>

        <IonRow>

            

            
                <IonButton className={styles.actionButton} onClick={() => handleReset()} color={"light-blue"} >Esqueci Pin</IonButton>
            

           

        </IonRow>

    </div>;
};

export default Keypad;


