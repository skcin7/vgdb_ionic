import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { home, search, informationCircle } from 'ionicons/icons';
import FeedTab from './pages/FeedTab';
import SearchTab from './pages/SearchTab';
import AboutTab from './pages/AboutTab';

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

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/feed">
            <FeedTab />
          </Route>
          <Route exact path="/search">
            <SearchTab />
          </Route>
          <Route path="/about">
            <AboutTab />
          </Route>
          <Route exact path="/">
            <Redirect to="/search" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          {/*<IonTabButton tab="feed" href="/feed">*/}
          {/*  <IonIcon icon={home} />*/}
          {/*  <IonLabel>Feed</IonLabel>*/}
          {/*</IonTabButton>*/}
          <IonTabButton tab="search" href="/search">
            <IonIcon icon={search} />
            <IonLabel>Search</IonLabel>
          </IonTabButton>
          <IonTabButton tab="about" href="/about">
            <IonIcon icon={informationCircle} />
            <IonLabel>About</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
