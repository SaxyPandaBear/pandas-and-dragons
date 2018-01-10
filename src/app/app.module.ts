// System imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';

// Pages imports
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { DiceRollerPage } from '../pages/dice-roller/dice-roller';
import { SettingsPage } from '../pages/settings/settings';
import { CharacterCreationPage } from '../pages/character-creation/character-creation';

// Components imports
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@NgModule({
  declarations: [
    MyApp,
    DiceRollerPage,
    ItemDetailsPage,
    ListPage,
    SettingsPage,
    CharacterCreationPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DiceRollerPage,
    ItemDetailsPage,
    ListPage,
    SettingsPage,
    CharacterCreationPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
