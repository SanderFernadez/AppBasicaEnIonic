import React from 'react';
import { IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/react';

const ExperienciaPersonal: React.FC = () => (
  <IonContent>
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>Mi Experiencia</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
          <iframe
            src="https://www.youtube.com/embed/CrEtGLhyDtc?si=CT2Xxu549VXC_khw"
            title="Mi experiencia"
            style={{ position: 'absolute', top:0, left:0, width:'100%', height:'100%' }}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <p>En este video explico mi experiencia al realizar la tarea.</p>
      </IonCardContent>
    </IonCard>
  </IonContent>
);

export default ExperienciaPersonal;
