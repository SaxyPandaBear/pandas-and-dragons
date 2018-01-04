import { Serializable } from "./serializable";

/**
 * Class that defines all of the data components to a 
 * character sheet
 */
export class CharacterData implements Serializable<CharacterData> {
    // TODO: map out information needed for a CharData object

    // TODO: finish serialize and deserialize after information figured out
    public serialize(input: CharacterData): Object {
        return null;
    }

    public deserialize(input: Object): CharacterData {
        return null;
    }
}
