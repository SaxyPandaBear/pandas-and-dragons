/**
 * An object that is serializable should be able to
 * serialize() and deserialize()
 */
export interface Serializable<T> {
    // should be able to produce a JSON blob associated with an object (this object)
    serialize(): Object;
    // should be able to take a JSON blob that is assumed to be of type T,
    // and reproduces the T object from the JSON data
    // deserialize(input: Object): T;
    // there's no good way to enforce this
}