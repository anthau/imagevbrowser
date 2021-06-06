import MessageListItem from '../components/MessageListItem';
import { useState } from 'react';
import { Message, getMessages } from '../data/messages';
import {
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonRefresher,
  IonRefresherContent,
    IonTitle,
    IonItem,
    IonInput,
    IonToolbar,
    IonButton,
    IonIcon,
  useIonViewWillEnter
} from '@ionic/react';
import './Home.css';


const Login: React.FC = () => {
    const [user, setUser] = useState('');
    const fetchUserData = async () => {
        const axios = require('axios');

        let userData = await axios.get('https://jsonplaceholder.typicode.com/users?username=' + user);
        localStorage.setItem('userid', '42');
        localStorage.setItem('user', user);
        alert(localStorage.getItem('userid'))
    }

    let userid="localStorage.getItem()";
  return (
      <IonPage id="home-pag1e">


        <IonToolbar>
                  <IonItem>{localStorage.getItem('user')}</IonItem>
                  <IonItem>
     
                      </IonItem>

        </IonToolbar>

      <IonContent fullscreen>


        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">
              Inbox
            </IonTitle>
          </IonToolbar>
              </IonHeader>
              <IonItem>
                  <IonInput value={""} placeholder="Login" onIonInput={(e: any) => setUser(e.target.value)} ></IonInput>
              </IonItem>
              <IonItem>
                  <IonInput value={""}  placeholder="password" ></IonInput>
              </IonItem>
              <IonButton onClick={() => fetchUserData()} color="secondary">
                  Login
              </IonButton>
              <IonButton color="secondary">
                  Logout
              </IonButton>
          

      </IonContent>
    </IonPage>
  );
};

export default Login;
