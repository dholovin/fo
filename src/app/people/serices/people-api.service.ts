import { Injectable } from '@angular/core';
import { IPerson } from '../models';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable()
export class PeopleApiService {

    // TODO: replace stub with real values
    public GetPeople(): Observable<IPerson[]> {

        const people = [
                {
                    name: 'John Doe',
                    place: 'soccer',
                    note: '2 daughters. younger is Zlata and elder is Sofa. wife - Erica. Plays good. Phone xxx-xxx-xx-xx',
                    associations: [
                        { name: 'soccer' },
                        { name: 'ukraine' },
                        { name: 'ukrainian' },
                        { name: 'khmelnitskiy' },
                        { name: 'dieppe' },
                    ],
                },
                {
                    name: 'Clarisse',
                    place: 'hospital',
                    date: new Date(),
                    note: 'first surved and helped a lot. very nice',
                    associations: [
                        { name: 'hospital' },
                        { name: 'nurse' },
                        { name: 'french' },
                        { name: 'victoria-daughter' },
                        { name: 'glasses' },
                    ],
                },
                {
                    name: 'Dave',
                    place: 'Isabella\'s birthday party',
                    date: new Date(),
                    note: 'Dave was born in Moncton, wife ??? from Columbia, Isabella turned 3 in 2018, dog Phoenix',
                    associations: [
                        { name: 'birthday party' },
                        { name: 'daycare' },
                        { name: 'roman-son' },
                        { name: 'big house' },
                        { name: 'dieppe' },
                        { name: 'great host' },
                    ],
                },
                {
                    name: 'Bob',
                    place: 'Isabella\'s birthday party',
                    date: new Date(),
                    note: 'wife Jane, 7 years daughter (2018), works at ymca, very funny',
                    associations: [
                        { name: 'birthday party' },
                        { name: 'daycare' },
                        { name: 'roman-son' },
                        { name: 'big house' },
                        { name: 'dieppe' },
                        { name: 'funny' },
                        { name: 'ymca' },
                    ],
                }
            ] as IPerson[];

        return of(people).pipe(delay(1000));
    }
}