/**
 * An object that is serializable should be able to
 * serialize() and deserialize()
 */
export interface Serializable<T> {
    // should be able to produce a JSON blob associated to an object
    serialize(input: T): Object;
    // should be able to take a JSON blob that is assumed to be of type T,
    // and reproduces the T object from the JSON data
    deserialize(input: Object): T;
}