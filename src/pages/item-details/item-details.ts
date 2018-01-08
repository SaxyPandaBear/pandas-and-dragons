import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { CharacterStats } from '../../models/character-data';

@Component({
  selector: 'page-item-details',
  templateUrl: 'item-details.html'
})
export class ItemDetailsPage {
  characterData: CharacterStats;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
    // If we navigated to this page, we will have an item available as a nav param
    let charName = navParams.get('character'); // the character name is the key for our storage
    this.storage.get(charName)
      .then((result) => {
        // value stored is a JSON object. Deserialize it using the method in CharacterStats
        this.characterData = CharacterStats.deserialize(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
