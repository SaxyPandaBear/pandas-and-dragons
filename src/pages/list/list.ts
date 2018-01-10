import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { ItemDetailsPage } from '../item-details/item-details';
import { Storage } from '@ionic/storage';
import { CharacterCreationPage } from '../character-creation/character-creation';
import { CharacterStats } from '../../models/character-data';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  characterNames: Array<string>; // an array of character names used in the UI
  characters: Array<CharacterStats>; // all of the characters read from storage

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private storage: Storage,
    public alertCtrl: AlertController
  ) {
    // this.characterNames = [];
    // this.characters = [];
    // this.storage.forEach((value: any, key: string) => {
    //   // for each item in storage, we need to get the name of the character, as well as
    //   // storing the characters themselves in a separate array

    //   // should be able to deserialize the JSON blobs into CharacterStats objects
    //   let char: CharacterStats = CharacterStats.deserialize(value); 
    //   this.characterNames.push(char.charName);
    //   this.characters.push(char);
    // }).catch((err: any) => {
    //   console.log(err); // for debugging
    // });
    
    // dummy data
    this.characterNames = this.initDummyCharacterNames();
    this.createDummyCharacters();
  }

  private initDummyCharacterNames(): Array<string> {
    return ['Foo Bar', 'Magnys Dawnfire', 'Lyanna Everiss'];
  }

  itemTapped(event, name: string) {
    // use the name of the character to get the whole fetched object. no need to 
    // fetch it again after it's already been done.
    let char: CharacterStats = this.getCharacterByName(name);
    this.navCtrl.push(ItemDetailsPage, {
      character: char
    });
  }

  // when the user clicks on the add button, it should navigate to a slides page to help
  // simplify character creation
  addCharacter(event) {
    // pass along the list of current character names so that the user can't reuse names
    this.navCtrl.push(CharacterCreationPage, {
      characterNames: this.characterNames 
    });
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

  // delete from fields as well as storage
  private deleteCharacter(name: string) {
    console.log('deleteCharacter method called');
    // to delete from storage, search for the uuid (which is stored in the object), 
    // retrieve it, and then use it to remove the object from storage
    let key: string; // key that will be used as a param for storage removal
    this.characters.forEach((character: CharacterStats) => {
      if (character.charName === name) {
        key = character.uuid;
      }
    });
    // if (key) { // if the key is present (aka non-empty) remove the object from storage
    //   this.storage.remove(key);
    // }
    // remove the character from UI elements
    this.characters = this.characters.filter(character => character.charName !== name);
    let index = this.characterNames.indexOf(name);
    if (index > -1) { // realistically, this should always be true but you never know.
      this.characterNames.splice(index, 1);
    }
  }

  // takes a name parameter and searches through 
  private getCharacterByName(name: string): CharacterStats {
    let character: CharacterStats = null;
    this.characters.forEach((char: CharacterStats) => {
      console.log(char.charName)
      if (char.charName === name) {
        character = char; // because we restrict character's to have unique names, this will work
      }
    });
    return character;
  }

  // uses dummy character names to initialize dummy data
  private createDummyCharacters() {
    this.characters = [];
    this.characterNames.forEach((name: string) => {
      this.characters.push(this.getDummyCharacter(name));
    });
    console.log(this.characters);
  }

  // copied from item-detail
  // TODO: add randomized values to test UI 
  private getDummyCharacter(name: string): CharacterStats {
    let stats = new CharacterStats();
    stats.charName = name;
    stats.charClass = 'Fighter';
    stats.level = 5;
    stats.background = 'Noble';
    stats.race = 'Elf';
    stats.alignment = 'Lawful Good';
    stats.experiencePoints = 10000;
    stats.strength = 10;
    stats.dexterity = 10;
    stats.constitution = 10;
    stats.intelligence = 10;
    stats.wisdom = 10;
    stats.charisma = 10;
    stats.inspiration = false;
    stats.profBonus = 3;
    stats.armorClass = 10;
    stats.initiative = 0;
    stats.speed = 30;
    stats.profStrength = false;
    stats.profAthletics = false;
    stats.profDexterity = false;
    stats.profAcrobatics = false;
    stats.profSleightOfHand = false;
    stats.profStealth = false;
    stats.profConstitution = false;
    stats.profIntelligence = false;
    stats.profArcana = false;
    stats.profHistory = false;
    stats.profInvestigation = false;
    stats.profNature = false;
    stats.profReligion = false;
    stats.profWisdom = false;
    stats.profAnimalHandling = false;
    stats.profInsight = false;
    stats.profMedicine = false;
    stats.profPerception = false;
    stats.profSurvival = false;
    stats.profCharisma = false;
    stats.profDeception = false;
    stats.profIntimidation = false;
    stats.profPerformance = false;
    stats.hpMax = 100;
    stats.hpCurrent = 100;
    stats.hpTemp = 0;
    stats.hitDiceCurrent = 5;
    stats.hitDiceMax = 5;
    stats.passivePerception = 10;
    stats.copper = 0;
    stats.silver = 0;
    stats.gold = 0;
    stats.platinum = 0;
    stats.redistributeCurrency = false
    return stats;
  }
}
