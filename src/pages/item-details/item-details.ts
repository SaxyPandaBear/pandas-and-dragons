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
    // the character's data is all passed as a navParam 
    this.characterData = this.navParams.get('character');
  }

  // dummy data taken care of in list page
  // private getDummyData(): CharacterStats {
  //   let stats = new CharacterStats();
  //   stats.charName = 'Foo BarBaz';
  //   stats.charClass = 'Fighter';
  //   stats.level = 5;
  //   stats.background = 'Noble';
  //   stats.race = 'Elf';
  //   stats.alignment = 'Lawful Good';
  //   stats.experiencePoints = 10000;
  //   stats.strength = 10;
  //   stats.dexterity = 10;
  //   stats.constitution = 10;
  //   stats.intelligence = 10;
  //   stats.wisdom = 10;
  //   stats.charisma = 10;
  //   stats.inspiration = false;
  //   stats.profBonus = 3;
  //   stats.armorClass = 10;
  //   stats.initiative = 0;
  //   stats.speed = 30;
  //   stats.profStrength = false;
  //   stats.profAthletics = false;
  //   stats.profDexterity = false;
  //   stats.profAcrobatics = false;
  //   stats.profSleightOfHand = false;
  //   stats.profStealth = false;
  //   stats.profConstitution = false;
  //   stats.profIntelligence = false;
  //   stats.profArcana = false;
  //   stats.profHistory = false;
  //   stats.profInvestigation = false;
  //   stats.profNature = false;
  //   stats.profReligion = false;
  //   stats.profWisdom = false;
  //   stats.profAnimalHandling = false;
  //   stats.profInsight = false;
  //   stats.profMedicine = false;
  //   stats.profPerception = false;
  //   stats.profSurvival = false;
  //   stats.profCharisma = false;
  //   stats.profDeception = false;
  //   stats.profIntimidation = false;
  //   stats.profPerformance = false;
  //   stats.hpMax = 100;
  //   stats.hpCurrent = 100;
  //   stats.hpTemp = 0;
  //   stats.hitDiceCurrent = 5;
  //   stats.hitDiceMax = 5;
  //   stats.passivePerception = 10;
  //   stats.copper = 0;
  //   stats.silver = 0;
  //   stats.gold = 0;
  //   stats.platinum = 0;
  //   stats.redistributeCurrency = false
  //   return stats;
  // }
}
