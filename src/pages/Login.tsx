import MessageListItem from '../components/MessageListItem';
import { useState } from 'react';
import { Message, getMessages } from '../data/messages';
import { useParams } from 'react-router';
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
    IonButtons,
    IonIcon,
  useIonViewWillEnter
} from '@ionic/react';
import './Home.css';

const Login: React.FC = () => {
  

    const [user, setUser] = useState('');
    const fetchUserData = async () => {

        const axios = require('axios');
        let userData = await axios.get('https://jsonplaceholder.typicode.com/users?username=' + user);
        localStorage.setItem('userid', userData.data[0].id);
        localStorage.setItem('user', user);
        setUser(user);
        window.location.reload(); 
    }

    const logout = () => {
        localStorage.setItem('userid', '');
        localStorage.setItem('user', '');
        setUser('');
        window.location.reload(); 
       
    }

    let userid = "localStorage.getItem()";
    if (localStorage.getItem('user') == null || localStorage.getItem('user') == '') {
        return (
            <IonPage id="home-page">
                <IonToolbar>
                    <IonItem>{localStorage.getItem('user')}</IonItem>
                    <IonItem>
                    </IonItem>
                </IonToolbar>

                <IonContent fullscreen>
                    <IonHeader translucent>
                        <IonToolbar>
                            <IonContent>

                            </IonContent>
                            <IonButtons>
             
                                <IonButton color="danger">
                                    Logout
              </IonButton>

                            </IonButtons>
                        </IonToolbar>
                    </IonHeader>

                    <IonItem text-center>
                        <IonInput value={""} placeholder="Login" onIonInput={(e: any) => setUser(e.target.value)} ></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonInput value={""} placeholder="password" ></IonInput>
                    </IonItem>
                    <IonButton onClick={() => fetchUserData()} color="secondary">
                        Login
              </IonButton>
                    <IonButton onClick={() => logout()} color="danger">
                        Logout
              </IonButton>


                </IonContent>
            </IonPage>
      )} else {
        return (
            <IonPage id="home-page">
                <IonTitle>You are already logged in! Go to  <a href="http://localhost:3000/Home">albums:</a></IonTitle>

                <IonButton onClick={() => logout()} color="danger">Logout</IonButton>
            </IonPage>
            )
    }
  
};

export default Login;
