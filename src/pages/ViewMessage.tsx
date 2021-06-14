import { useState } from 'react';
import { Message, Message1, getMessage } from '../data/messages';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.


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
    IonButton, IonModal
} from '@ionic/react';
import { personCircle } from 'ionicons/icons';
import { useParams } from 'react-router';
import './ViewMessage.css';
const axios = require('axios');
const chunk = require('chunk');

function counterReducer(state = { www : '' }, action: any) {
    switch (action.type) {
        case 'url':
            return { www: action.www }
        default:
    }
            return state
    
}

const store = createStore(counterReducer)

function setModal(state = { visible: false }, action: any) {

    switch (action.type) {
        case 'set':
   
            return { visible: action.visible }
        default:
    }
    return state

}
const window1 = createStore(setModal)
const Row = (props: any) => {
    let message = props.data;
    const [redraw, setRedraw] = useState(false);
    return (
        <IonGrid>
            <IonModal isOpen={redraw}  >
                <IonButton onClick={() => setRedraw(false)}>Close window</IonButton>
                <img src={store.getState().www} />
            </IonModal>
            <IonRow>
                {message.map((image: any) =>
                    <IonCol onClick={() => { store.dispatch({ type: 'url', www: image.url });  setRedraw(true) }} ><img src={image.thumbnailUrl} />
                    </IonCol>)}
                     
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
      <Provider store={store}>
      <IonHeader translucent>
              <IonToolbar>
                  <IonContent>
                               
                  </IonContent>
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
                                  <h3>Album2 </h3>

                              </h2>    
              </IonLabel>
            </IonItem>
            <Grid1 data={message} />
          
          </>
        ) : (
          <div>Message not found</div>
        )}
              </IonContent>
              </Provider>
    </IonPage>
  );
}

export default ViewMessage;
