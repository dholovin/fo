import { Injectable } from "@angular/core";

@Injectable()
export class Globals {
    // Use to deep copy objects with nested objects
    public deepCopy(obj: any): any {        
        // Beware using the JSON.parse(JSON.stringify(obj)) method on Date objects - JSON.stringify(new Date()) returns 
        // a string representation of the date in ISO format, which JSON.parse() doesn't convert back to a Date object.
        return JSON.parse(JSON.stringify(obj)); // Also, the slowest
        
        // return $.extend(true, {}, obj); // if JQuery is used        

        // npm i lodash.clonedeep
        // return _.clone(obj, true); // the fastest, requires lodash library
    }

    // Use to do bitwise object copy (nested objects aren't copied - references to that objects are copied instead)
    public shallowBitwiseCopy(obj: any): any {
        // Copies property values. If the source value is a reference to an object, it only copies that reference value.
        // return Object.assign({}, obj);
        
        return { ...obj }; // See 'Spread' operator
    }
}
