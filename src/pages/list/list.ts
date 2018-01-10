import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { ItemDetailsPage } from '../item-details/item-details';
import { Storage } from '@ionic/storage';
import { CharacterCreationPage } from '../character-creation/character-creation';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  characters: Array<string>; // an array of character names

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private storage: Storage,
    public alertCtrl: AlertController
  ) {
    // connect to storage and fetch all of the names of the items stored, 
    // putting them in the characters array
    // note: the way this is set up, this would not allow characters with the same name.
    // this.storage.keys()
    //   .then((keys: string[]) => {
    //     this.characters = keys;
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   }
    // );
    this.characters = this.getDummyList();
  }

  private getDummyList(): Array<string> {
    return ['Foo Bar', 'Magnys Dawnfire', 'Lyanna Everiss'];
  }

  itemTapped(event, item: string) {
    this.navCtrl.push(ItemDetailsPage, {
      character: item
    });
  }

  // when the user clicks on the add button, it should navigate to a slides page to help
  // simplify character creation
  addCharacter(event) {
    this.navCtrl.push(CharacterCreationPage, {});
  }

  // when the button is pressed, should have an alert dialog to confirm whether or not
  // the user really wants to delete a character
  attemptDeleteCharacter(event, character: string) {
    let confirmDialog = this.alertCtrl.create({
      title: `Delete ${character}?`,
      message: `Are you sure you want to delete ${character} forever?`,
      buttons: [
        {
          text: 'Cancel',
          handler: () => {} // do nothing
        },
        {
          text: 'Delete',
          handler: () => {
            this.deleteCharacter(character);
          }
        }
      ]
    });
    confirmDialog.present();
  }

  // since the character's name is the key in our storage, 
  // we can use it to delete the data from storage
  deleteCharacter(character: string) {
    console.log('deleteCharacter method called')
  }

}
