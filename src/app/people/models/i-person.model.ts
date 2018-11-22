import { IAssotiation } from "./i-association.model";

export interface IPerson{
    name: string; // met a person 'named'
    place: string; // at specific place (may be used for grouping)
    
    associations?: IAssotiation[]; // have following associations (may be used for grouping)
    date?: Date; // on specific date
    note?: string; // free form note, in addition to associations 
    image?: any; // TODO: define type representation
}