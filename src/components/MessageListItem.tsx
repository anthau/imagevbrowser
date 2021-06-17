import {
  IonItem,
  IonLabel,
  } from '@ionic/react';

import { Message } from '../data/messages';
import './MessageListItem.css';

interface MessageListItemProps {
  message: Message;
}

const MessageListItem: React.FC<MessageListItemProps> = ({ message }) => {
  return (
    <IonItem routerLink={`/message/${message.id}`} detail={false}>
      <div slot="start" className="dot dot-unread"></div>
      <IonLabel className="ion-text-wrap">
        <h2>
          {message.title}      
        </h2>
          </IonLabel>
    </IonItem>
  );
};

export default MessageListItem;
