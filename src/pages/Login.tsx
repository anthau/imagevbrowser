import MessageListItem from '../components/MessageListItem';
import { useState } from 'react';
import { Message, getMessages } from '../data/messages';
import {
  IonContent,
  IonHeader,
  IonList,
    IonPage,
    IonCard,
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

//https://jsonplaceholder.typicode.com/guide/
//https://jsonplaceholder.typicode.com/users/1/albums
const Login: React.FC = () => {
    const [user, setUser] = useState('');
    const fetchUserData = async () => {
        const axios = require('axios');

        let userData = await axios.get('https://jsonplaceholder.typicode.com/users?username=' + user);

        localStorage.setItem('userid', userData.data[0].id);
        localStorage.setItem('user', user);
        setUser(user);
        alert('ok='  )


    }

    const logout = () => {
        localStorage.setItem('userid', '');
        localStorage.setItem('user', '');
        setUser('');
        alert("logout")
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
            <IonTitle size="small">
              Inbox
            </IonTitle>
          </IonToolbar>
              </IonHeader>

              <IonItem text-center>
                  <IonInput value={""} placeholder="Login" onIonInput={(e: any) => setUser(e.target.value)} ></IonInput>
              </IonItem>
              <IonItem>
                  <IonInput value={""}  placeholder="password" ></IonInput>
              </IonItem>
              <IonButton onClick={() => fetchUserData()} color="secondary">
                  Login
              </IonButton>
              <IonButton onClick={() => logout()} color="danger">
                  Logout
              </IonButton>
 

      </IonContent>
    </IonPage>
  );
};

export default Login;
