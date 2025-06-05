import React from 'react';
import { IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonImg } from '@ionic/react';

const PaginaInicial: React.FC = () => (
  <IonContent>
    <IonCard>
      <IonImg src="public/Proyecto nuevo.jpg" alt="Foto 2x2" style={{ width: 120, height: 120, margin: 'auto', borderRadius: '8px' }} />
      <IonCardHeader>
        <IonCardTitle>Sander Fernandez</IonCardTitle>
        <IonCardSubtitle>sanderfernandez0812@gmail.com</IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent>
        <p>Nombre: Sander</p>
        <p>Apellido: Fernandez</p>
        <p>Correo: sanderfernandez0812@gmail.com</p>
      </IonCardContent>
    </IonCard>
  </IonContent>
);

export default PaginaInicial;
