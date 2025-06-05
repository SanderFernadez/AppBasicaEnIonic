import React from 'react';
import { IonApp, IonRouterOutlet, IonSplitPane, IonPage, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route, Redirect } from 'react-router-dom';
import Menu from './components/Menu';
import PaginaInicial from './pages/PaginaInicial';
import Sumadora from './pages/Sumadora';
import Traductor from './pages/Traductor';
import TablaMultiplicar from './pages/TablaMultiplicar';
import ExperienciaPersonal from './pages/ExperienciaPersonal';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonSplitPane contentId="main">
        <Menu />
        <IonPage id="main">
          <IonRouterOutlet>
            <Route path="/inicio" component={PaginaInicial} exact />
            <Route path="/sumadora" component={Sumadora} exact />
            <Route path="/traductor" component={Traductor} exact />
            <Route path="/tabla" component={TablaMultiplicar} exact />
            <Route path="/experiencia" component={ExperienciaPersonal} exact />
            <Redirect exact from="/" to="/inicio" />
          </IonRouterOutlet>
        </IonPage>
      </IonSplitPane>
    </IonReactRouter>
  </IonApp>
);

export default App;
