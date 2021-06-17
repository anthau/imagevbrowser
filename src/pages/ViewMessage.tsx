import { useState } from 'react';
import { Message, Message1, getMessage, PropsType, ImageType} from '../data/messages';
import { createStore } from 'redux'
import Logout from '../components/Logout';

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.

import {
    IonBackButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonPage,
    IonToolbar,
    useIonViewWillEnter,
    IonGrid, IonRow, IonCol,
    IonButton, IonModal
} from '@ionic/react';

import { useParams } from 'react-router';
import './ViewMessage.css';
const axios = require('axios');
const chunk = require('chunk');

function counterReducer(state = { www: '' }, action: any) {
    switch (action.type) {
        case 'url':
            return { www: action.www }
        default:
    }
    return state
}

const store = createStore(counterReducer)
const Row = (props: PropsType) => {
    let message = props.data;
    const [redraw, setRedraw] = useState(false);
    return (
        <IonGrid>
            <IonModal isOpen={redraw}  >
                <IonButton
                    onClick={() => setRedraw(false)}
                >Close window</IonButton>
                <img
                    src={store.getState().www}
                />
            </IonModal>
            <IonRow>
                {message.map((image: ImageType) =>
                    <IonCol onClick={() => { store.dispatch({ type: 'url', www: image.url }); setRedraw(true) }} ><img src={image.thumbnailUrl} />
                    </IonCol>)}
            </IonRow>
        </IonGrid>)

}

const Grid1 = (props : any) => {
    let message = props.data;
    let dataChunk = chunk(message, 3);
    return (
        <IonContent>
            {dataChunk.map((row: []) => <Row data={row} />)}
        </IonContent>)
}

function ViewMessage() {

    const [message, setMessage] = useState<Message1[]>();
    const params = useParams<{ id: string }>();

    useIonViewWillEnter(async () => {
        let images = await axios.get('https://jsonplaceholder.typicode.com/albums/' + params.id + '/photos');
        const msg = (images.data);
        setMessage(msg);
    });

    return (
        <IonPage
            id="view-message-page"
        >
                <IonHeader translucent>
                    <IonToolbar>
                        <IonButtons>
                        <IonBackButton
                            text="Albums"
                            defaultHref="/home"
                        ></IonBackButton>
                            <Logout/>
                    </IonButtons>
                    </IonToolbar>
                </IonHeader>

                <IonContent fullscreen>
                    {message ? (
                        <>               
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