
import {
    IonButton,
} from '@ionic/react';

const Logout = () => {

    const _logout = () => {
        localStorage.setItem('userid', '');
        localStorage.setItem('user', '');
        window.location.reload();
        window.location.href = "/login";
    }

    return (<IonButton
        onClick={() => _logout()}       
        color="danger"
    >Logout</IonButton>)
}
export default Logout;