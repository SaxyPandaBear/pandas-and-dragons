/**
 * Class that houses static methods for doing different rolls
 */
export class Roll {

    /**
     * Rolls 1 die, that has [sides] numbers to choose from
     * @param sides 
     */
    public rollOne(sides: number) {
        return Math.floor(Math.random()*sides)+1;
    }

    /**
     * When a new character is created, they have to roll for their stat
     * values. This is actually quite particular.
     * 
     * For 6 stat values, you have to roll 4 dice each.
     * Roll 4 dice and sum up the highest 3 rolls. This is the score total for
     * 1 of the 6 stats. 
     * Roll 5 more times (5 sets of 4) to get the remaining ability scores.
     * 
     * The player gets to decide which score corresponds to which ability,
     * so just create the list of 6 ability scores and return it.
     */
    public initCharStats(): Array<number> {
        // we need 6 scores
        // method chain to get 6 numbers
        let scores: Array<number> = [];
        for (let i = 0; i < 6; i++) {
            scores.push(this.sumOfValues(this.rollXKeepY(4,3,6)));
        }
        return scores;
    }

    /**
     * roll X dice and keep the highest Y values, returning them.
     * the number of sides on the die are determined with the optional param,
     * default value is 6.
     * 
     * note: this assumes that x >= y
     * @param x 
     * @param y 
     * @param sides 
     * @returns a list of size y
     */
    private rollXKeepY(x: number, y: number, sides?: number): Array<number> {
        const dieSize: number = sides ? sides : 6; // default to 6 if no sides param given
        let values: Array<number> = [];
        for (let i = 0; i < x; i++) {
            let value = this.rollOne(dieSize);
            values.push(value);
        }
        // after the x values are generated, we want to keep the highest y values,
        // so to keep it simple, we just sort it and take the last y values
        values = values.sort((a,b) => a - b); // for some reason, sort requires a number to be returned
        return values.slice(x - y); 
    }

    /**
     * simple function that returns the sum of a list of numbers
     * @param arr 
     */
    private sumOfValues(arr: Array<number>): number {
        let sum = 0;
        arr.forEach((val) => {
            sum += val;
        });
        return sum;
    }
}