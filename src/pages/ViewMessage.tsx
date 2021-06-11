import { useState } from 'react';
import { Message,Message1, getMessage } from '../data/messages';
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonNote,
  IonPage,
  IonToolbar,
    useIonViewWillEnter,
    IonGrid, IonRow, IonCol,
} from '@ionic/react';
import { personCircle } from 'ionicons/icons';
import { useParams } from 'react-router';
import './ViewMessage.css';
const axios = require('axios');
const chunk = require('chunk');
const Row = (props: any) => {
    let message = props.data;
    return (
        <IonGrid>
            <IonRow>
                {message.map((image: any) => <IonCol><img src={image.thumbnailUrl} /></IonCol>)}
                
      
        </IonRow>
    </IonGrid>)

}
const Grid1 = (props: any) => {
    let message = props.data;
    let dataChunk = chunk(message, 3);
  
    return (
        <IonContent>

            {dataChunk.map((row: any) => <Row data={row} />) }
               
    
    </IonContent>)
}
function ViewMessage() {

    const [message, setMessage] = useState<Message1[]>();
    const params = useParams<{ id: string }>();

    useIonViewWillEnter(async () => {
        let images = await axios.get('https://jsonplaceholder.typicode.com/albums/1/photos');
        const msg = (images.data);  
        setMessage(msg);
      });

  return (
    <IonPage id="view-message-page">
      <IonHeader translucent>
        <IonToolbar>
          <IonButtons>
            <IonBackButton text="Inbox" defaultHref="/home"></IonBackButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        {message ?  (
                  <>
            <IonItem>
              <IonIcon icon={personCircle} color="primary"></IonIcon>
              <IonLabel className="ion-text-wrap">
                              <h2>
                                  <h3>Album2 .... content</h3>
                              
                              </h2>    
              </IonLabel>
            </IonItem>
            <Grid1 data={message} />
          
                        
          
                         
     
          </>
        ) : (
          <div>Message not found</div>
        )}
      </IonContent>
    </IonPage>
  );
}

export default ViewMessage;
