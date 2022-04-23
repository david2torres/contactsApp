import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';
import 'contacts-plugin';

const { ContactsPlugin } = Plugins;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'contact';
  contacts: any = [];
  name: any;

  async loadContact() {
    this.contacts = (await ContactsPlugin['getContacts']('wherever')).results;
    console.log("contacts", this.contacts)
  }
}
