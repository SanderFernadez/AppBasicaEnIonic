import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import {
  homeOutline, homeSharp,
  calculatorOutline, calculatorSharp,
  languageOutline, languageSharp,
  gridOutline, gridSharp,
  personCircleOutline, personCircleSharp
} from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Página Inicial',
    url: '/inicio',
    iosIcon: homeOutline,
    mdIcon: homeSharp
  },
  {
    title: 'Sumadora',
    url: '/sumadora',
    iosIcon: calculatorOutline,
    mdIcon: calculatorSharp
  },
  {
    title: 'Traductor de Números',
    url: '/traductor',
    iosIcon: languageOutline,
    mdIcon: languageSharp
  },
  {
    title: 'Tabla de Multiplicar',
    url: '/tabla',
    iosIcon: gridOutline,
    mdIcon: gridSharp
  },
  {
    title: 'Experiencia Personal',
    url: '/experiencia',
    iosIcon: personCircleOutline,
    mdIcon: personCircleSharp
  }
];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Sander</IonListHeader>
          <IonNote>sanderfernandez0812@gmail.com</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon aria-hidden="true" slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>

        <IonList id="">
          <IonListHeader></IonListHeader>
          
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
