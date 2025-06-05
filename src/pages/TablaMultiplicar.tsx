import React, { useState } from 'react';
import { IonContent, IonInput, IonButton, IonItem, IonLabel, IonList } from '@ionic/react';

const TablaMultiplicar: React.FC = () => {
  const [numero, setNumero] = useState<number | undefined>();
  const [tabla, setTabla] = useState<number[]>([]);

  const generarTabla = () => {
    if (numero !== undefined) {
      const t = [];
      for (let i = 1; i <= 13; i++) {
        t.push(i * numero);
      }
      setTabla(t);
    }
  };

  return (
    <IonContent>
      <IonList>
        <IonItem>
          <IonLabel position="stacked">Número</IonLabel>
          <IonInput type="number" value={numero} onIonChange={e => setNumero(Number(e.detail.value))} />
        </IonItem>
        <IonButton expand="block" onClick={generarTabla}>Generar Tabla</IonButton>
        {tabla.length > 0 && tabla.map((val, idx) => (
          <IonItem key={idx}>
            <IonLabel>{numero} x {idx+1} = {val}</IonLabel>
          </IonItem>
        ))}
      </IonList>
    </IonContent>
  );
};

export default TablaMultiplicar;
