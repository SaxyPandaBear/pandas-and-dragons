import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Roll } from '../../models/roll';

@Component({
  selector: 'page-dice-roller',
  templateUrl: 'dice-roller.html',
})
export class DiceRollerPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private dice: Roll) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DiceRollerPage');
  }

}
