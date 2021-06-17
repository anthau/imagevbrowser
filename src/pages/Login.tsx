import { useState } from 'react';
import Logout from '../components/Logout';
import {
  IonContent,
  IonHeader,
    IonPage,
    IonItem,
    IonInput,
    IonToolbar,
    IonButton,
    IonButtons,
    IonText
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
    if (localStorage.getItem('user') == null
        || localStorage.getItem('user') == '') {
        return (
            <IonPage id="home-page">
                <IonToolbar>
                    <IonItem>{localStorage.getItem('user')}</IonItem>
                </IonToolbar>

                <IonContent fullscreen>
                    <IonItem text-center>
                        <IonInput
                            value={""}
                            placeholder="Login"
                            onIonInput={(e: any) => setUser(e.target.value)}
                        >
                        </IonInput>
                    </IonItem>
                    <IonItem>
                        <IonInput
                            value={""}
                            placeholder="password"
                        >
'                        </IonInput>
                    </IonItem>
                    <IonButton
                        onClick={() => fetchUserData()}
                        color="secondary"
                    >
                        Login
                    </IonButton>
              
                </IonContent>
            </IonPage>
      )} else {
        return (
            <IonPage id="home-page">
                <IonHeader translucent>
                    <IonToolbar>
                        <IonContent>
                        </IonContent>
                        <IonButtons>
                            <Logout/>
                            <IonItem>{localStorage.getItem('user')}</IonItem>
                        </IonButtons>
                    </IonToolbar>
                </IonHeader>
                <IonContent fullscreen>
                    <IonText>You are already logged in! Go to  <a href="http://localhost:3000/Home">albums:</a></IonText>
                    </IonContent>  
            </IonPage>
            )
    }
  
};

export default Login;
