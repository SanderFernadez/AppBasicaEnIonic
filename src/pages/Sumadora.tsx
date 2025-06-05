import React, { useState } from 'react';
import { IonContent, IonInput, IonButton, IonItem, IonLabel, IonList } from '@ionic/react';

const Sumadora: React.FC = () => {
  const [num1, setNum1] = useState<number | undefined>();
  const [num2, setNum2] = useState<number | undefined>();
  const [resultado, setResultado] = useState<number | undefined>();

  const sumar = () => {
    if (num1 !== undefined && num2 !== undefined) {
      setResultado(num1 + num2);
    }
  };

  return (
    <IonContent>
      <IonList>
        <IonItem>
          <IonLabel position="stacked">Número 1</IonLabel>
          <IonInput type="number" value={num1} onIonChange={e => setNum1(Number(e.detail.value))} />
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">Número 2</IonLabel>
          <IonInput type="number" value={num2} onIonChange={e => setNum2(Number(e.detail.value))} />
        </IonItem>
        <IonButton expand="block" onClick={sumar}>Sumar</IonButton>
        {resultado !== undefined && (
          <IonItem>
            <IonLabel>Resultado: {resultado}</IonLabel>
          </IonItem>
        )}
      </IonList>
    </IonContent>
  );
};

export default Sumadora;
