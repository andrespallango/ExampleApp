import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet, IonRouterLink } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, heartOutline, heartSharp, archiveOutline, archiveSharp, trashOutline, trashSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp, cartOutline, cartSharp, closeOutline, closeSharp } from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  imports: [RouterLink, RouterLinkActive, IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterLink, IonRouterOutlet],
})
export class AppComponent {
  public appPages = [
    { title: 'Chat', url: '/chat', icon: 'mail' },
    { title: 'Shopping', url: '/shopping', icon: 'cart' },
    { title: 'Trash', url: '/folder/trash', icon: 'trash' }
  ];
  constructor() {
    addIcons({
      mailOutline, mailSharp,
      paperPlaneOutline, paperPlaneSharp,
      heartOutline, heartSharp,
      archiveOutline, archiveSharp,
      trashOutline, trashSharp,
      warningOutline, warningSharp,
      bookmarkOutline, bookmarkSharp,
      cartOutline, cartSharp,
      'cart-outline': cartOutline,
      'cart-sharp': cartSharp,
      'close-outline': closeOutline,
      'close-sharp': closeSharp
    });
  }
}
