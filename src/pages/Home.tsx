import MessageListItem from '../components/MessageListItem';
import { useState } from 'react';
import { Message, getMessages } from '../data/messages';
import Logout from '../components/Logout';
import {
  IonContent,
  IonHeader,
  IonList,
    IonPage,
  IonRefresher,
  IonRefresherContent,
    IonToolbar,
    IonBackButton, IonButtons,
  useIonViewWillEnter
} from '@ionic/react';
import './Home.css';

//https://jsonplaceholder.typicode.com/users/1/albums

const Home: React.FC = () => {
  
  const [messages, setMessages] = useState<Message[]>([]);
  useIonViewWillEnter(async () => {
      const msgs: any = await getMessages(("" + localStorage.getItem('userid')));   
        setMessages(msgs);
  });

  const refresh = (e: CustomEvent) => {
    setTimeout(() => {
      e.detail.complete();
    }, 3000);
  };

  return (
      <IonPage id="home-page">
          <IonHeader translucent>
              <IonToolbar>
          <IonButtons>
                      <IonBackButton text="Back to login" defaultHref="/login"></IonBackButton>
                      <Logout/>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
 
      <IonContent fullscreen>
        <IonRefresher slot="fixed" onIonRefresh={refresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>

        <IonHeader collapse="condense">
          <IonToolbar/>
        </IonHeader>

        <IonList>
          {messages.map(m => <MessageListItem key={m.id} message={m} />)}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
