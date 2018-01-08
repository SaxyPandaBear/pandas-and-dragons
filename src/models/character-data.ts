import { Serializable } from "./serializable";

/**
 * Class that defines all of the data components to a 
 * character sheet
 */
export class CharacterStats implements Serializable<CharacterStats> {
    playerName: string;
    charClass: string;
    level: number;
    background: string;
    charName: string;
    race: string;
    alignment: string;
    experiencePoints: number;
    
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;

    inspiration: boolean;
    profBonus: number;
    armorClass: number;
    initiative: number;
    speed: number; // assumed units is feet.

    // Ability proficiencies, separated by bonus type
    // strength
    profStrength: boolean;
    profAthletics: boolean;

    // dexterity
    profDexterity: boolean;
    profAcrobatics: boolean;
    profSleightOfHand: boolean;
    profStealth: boolean;

    // constitution
    profConstitution: boolean;
    
    // intelligence
    profIntelligence: boolean;
    profArcana: boolean;
    profHistory: boolean;
    profInvestigation: boolean;
    profNature: boolean;
    profReligion: boolean;

    // wisdom
    profWisdom: boolean;
    profAnimalHandling: boolean;
    profInsight: boolean;
    profMedicine: boolean;
    profPerception: boolean;
    profSurvival: boolean;

    // charisma
    profCharisma: boolean;
    profDeception: boolean;
    profIntimidation: boolean;
    profPerformance: boolean;

    hpMax: number;
    hpCurrent: number;
    hpTemp: number;

    numHitDice: number;
    passivePerception: number;

    /**
        * Currency is divided up between different units
        * copper, silver, gold, electrium (omitted), and platinum
        * 10 copper = 1 silver
        * 10 silver = 1 gold
        * 10 gold = 1 platinum
        * 5 gold = 1 electrium, hence why nobody uses electrium.
        * 
        * 
    */
    copper: number;
    silver: number;
    gold: number;
    platinum: number;
    // if true, spread out currency to use up the least amount of coins
    redistributeCurrency: boolean;

    // TODO: needs attacks, spells, equipment, character traits

    /**
     * takes a value and adds it to the character's total experience points
     * as opposed to having separate functions for adding and subtracting,
     * opt for a single function. the use caes of subtracting exp is almost non-existent.
     * @param delta a number (+/-) that is added to the exp total
     * @returns true if successful, else return false for invalid total (exp < 0)
     */
    public updateExpPoints(delta: number): boolean {
        // simply just add the two totals
        this.experiencePoints += delta;
        // if exp < 0, reset the value and return false
        if (this.experiencePoints < 0) {
            this.experiencePoints += (-1 * delta);
            return false;
        } else {
            return true;
        }
    }

    // TODO: finish serialize and deserialize after information figured out
    public serialize(): Object {
        return {
            
        };
    }

    public static deserialize(input: Object): CharacterStats {
        return null;
    }

    // TODO: need to dynamically calculate the bonus to ability checks

    // TOOD: may not need this due to toggle button in UI controlling it
    public toggleMoneyDistribution() {
        this.redistributeCurrency = !this.redistributeCurrency;
    }

    /**
     * Takes the character's currencies and spreads them out to be the
     * most reduced set of coins
     * 
     * Called when money distribution is toggled, and a currency value is modified
     */
    private distributeCurrency() {
    }

    /**
     * called on change for the strength stat
     */
    private updateStrBonus() {
        
    }

    /**
     * called on change for the dexterity stat
     */
    private updateDexBonus() {

    }

    /**
     * called on change for the constitution stat
     */
    private updateConBonus() {

    }

    /**
     * called on change for the intelligence stat
     */
    private updateIntBonus() {

    }

    /**
     * called on change for the wisdom stat
     */
    private updateWisBonus() {

    }

    /**
     * called on change for the charisma stat
     */
    private updateChaBonus() {

    }
}

export enum AbilityScore {
    STR, DEX, CON, INT, WIS, CHA
}
