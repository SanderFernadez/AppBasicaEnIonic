import React, { useState } from 'react';
import { IonContent, IonInput, IonButton, IonItem, IonLabel, IonList } from '@ionic/react';

function numeroALetras(num: number): string {
  const unidades = ['','uno','dos','tres','cuatro','cinco','seis','siete','ocho','nueve'];
  const especiales = ['diez','once','doce','trece','catorce','quince','dieciséis','diecisiete','dieciocho','diecinueve'];
  const decenas = ['','','veinte','treinta','cuarenta','cincuenta','sesenta','setenta','ochenta','noventa'];
  const centenas = ['','ciento','doscientos','trescientos','cuatrocientos','quinientos','seiscientos','setecientos','ochocientos','novecientos'];

  if (num === 0) return 'cero';
  if (num === 100) return 'cien';
  if (num === 1000) return 'mil';

  let letras = '';
  if (num > 99) {
    letras += centenas[Math.floor(num/100)] + ' ';
    num = num % 100;
  }
  if (num >= 10 && num < 20) {
    letras += especiales[num-10];
    return letras.trim();
  }
  if (num >= 20) {
    letras += decenas[Math.floor(num/10)];
    if (num % 10 !== 0) {
      if (Math.floor(num/10) === 2) {
        letras = letras.slice(0, -1) + 'i' + unidades[num%10];
      } else {
        letras += ' y ' + unidades[num%10];
      }
    }
    return letras.trim();
  }
  if (num > 0 && num < 10) {
    letras += unidades[num];
  }
  return letras.trim();
}

const Traductor: React.FC = () => {
  const [numero, setNumero] = useState<number | undefined>();
  const [letras, setLetras] = useState<string>('');

  const traducir = () => {
    if (numero && numero >= 1 && numero <= 1000) {
      setLetras(numeroALetras(numero));
    } else {
      setLetras('Ingrese un número entre 1 y 1000');
    }
  };

  return (
    <IonContent>
      <IonList>
        <IonItem>
          <IonLabel position="stacked">Número (1-1000)</IonLabel>
          <IonInput type="number" value={numero} onIonChange={e => setNumero(Number(e.detail.value))} />
        </IonItem>
        <IonButton expand="block" onClick={traducir}>Traducir</IonButton>
        {letras && (
          <IonItem>
            <IonLabel>En letras: {letras}</IonLabel>
          </IonItem>
        )}
      </IonList>
    </IonContent>
  );
};

export default Traductor;
