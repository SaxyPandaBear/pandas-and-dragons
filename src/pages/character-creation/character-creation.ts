import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-character-creation',
  templateUrl: 'character-creation.html',
})
export class CharacterCreationPage {
  private usedCharNames: Array<string>; // should not allow previously used character names;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.usedCharNames = this.navParams.get('characterNames'); // param passed by list page
  }

  private charNameAlreadyInUse(name: string): boolean {
    this.usedCharNames.forEach((character: string) => {
      if (character == name) {
        return true;
      }
    });
    return false;
  }
}
