/**
 * Class that defines all of the data components to a 
 * character sheet
 */
export class CharacterData {

    /**
     * Returns a JSON blob of the data stored in this object
     * so that it can be written to the local database properly.
     */
    public convertCharDataToJSON() {
        
    }

    /**
     * Takes a json object (from the database), then constructs and returns a corresponding
     * CharacterData object from the parameter
     * @param jsonBlob JSON object read from database
     */
    public static convertJSONToCharData(jsonBlob: any): CharacterData {
        return null; // TODO: finish this
    }
}