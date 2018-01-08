import { Serializable } from "./serializable";

/**
 * Class that contains data on a piece of equipment
 */
export class Equipment implements Serializable<Equipment> {
    // fields go here
    weight: number;
    price: number;
    hasAttack: boolean;

    public serialize(): Object {
        return null; // TODO: finish this
    }

    public static deserialize(input: Object): Equipment {
        return null; // TODO: finish this
    }
}
