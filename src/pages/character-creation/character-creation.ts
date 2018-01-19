import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Alignment } from '../../models/character-data';

@Component({
  selector: 'page-character-creation',
  templateUrl: 'character-creation.html',
})
export class CharacterCreationPage {
  private usedCharNames: Array<string>; // should not allow previously used character names

  // fields that are controlled by user inputs
  charName: string;
  charClass: string;
  race: string;
  height: number; // stored as inches, may convert 
  eyeColor: string;
  alignment: Alignment;

  // options
  raceOptions: Array<string> = [
    'Dwarf', 'Elf', 'Halfling', 'Human', 'Dragonborn', 'Gnome', 'Half-Elf', 'Half-Orc', 'Tiefling'
  ];
  alignmentOptions: Array<string>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.usedCharNames = this.navParams.get('characterNames'); // param passed by list page

    // instantiate alignment options
    this.alignmentOptions = [];
    // https://stackoverflow.com/questions/39372804/typescript-how-to-loop-through-enum-values-for-display-in-radio-buttons
    for (let option in Alignment) {
      if (isNaN(Number(option))) {
        this.alignmentOptions.push(option);
      }
    }
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
