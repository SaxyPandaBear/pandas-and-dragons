import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ItemDetailsPage } from '../item-details/item-details';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  characters: Array<string>; // an array of character names

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
    // connect to storage and fetch all of the names of the items stored, 
    // putting them in the characters array
    // note: the way this is set up, this would not allow characters with the same name.
    this.storage.keys()
      .then((keys: string[]) => {
        this.characters = keys;
      })
      .catch((error) => {
        console.log(error);
      }
    );
  }

  itemTapped(event, item: string) {
    this.navCtrl.push(ItemDetailsPage, {
      character: item
    });
  }
}
