import { IonCheckbox, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonList, IonPage, IonRadio, IonTitle, IonToggle, IonToolbar } from '@ionic/react';

import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

const Tab2: React.FC = () => {
 
  const Messages = [
    "Hey There",
    "This is Preetish Biswal",
    "I am studying in VIT Vellore",
    "This is to test",
    "Render of Messages through IonList"


];

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      {/* <BootstrapTable
        bootstrap4
        keyField="id"
        data={leadList}
        columns={columns}
        pagination={pagination}
     /> */}
     <IonList>
     {
       Messages.map(message => <IonItem key={message}>{message}</IonItem>)
     }

     </IonList>
     
      
      </IonContent>
     

    {/*-- List of Input Items --*/}
  
    </IonPage>
  );
};

export default Tab2;
