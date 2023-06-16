import { IonRow } from "@ionic/react";
import { useEffect, useRef } from "react";
import KeypadInput from "./KeypadInput";

const KeypadInputs = (props: { values: any; activeIndex: any; incorrect: any; correct: any; }) => {

  const { values, activeIndex, incorrect, correct } = props;
  const keypadRef = useRef<any>();

  useEffect(() => {

    if (incorrect) {

      keypadRef.current.classList.add("incorrect");

      setTimeout(() => {
          
        keypadRef.current.classList.remove("incorrect");
      }, 1000);
    }
  }, [ incorrect ]);

  useEffect(() => {

    if (correct) {

      keypadRef.current.classList.add("correct");
    }
  }, [ correct ]);

  return (
      
    <IonRow ref={ keypadRef } className="ion-justify-content-center">
      { values.map((value: string, index: string) => {

        const isActive = parseInt(index) === parseInt(activeIndex);
        const isFilled = value !== "";

        return <KeypadInput key={index} correct={ correct } incorrect={ incorrect } isFilled={ isFilled } isActive={ isActive } value={ value } />;
      })}
    </IonRow>
  );
}

export default KeypadInputs;