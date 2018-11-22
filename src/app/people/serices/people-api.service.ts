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
                    date: new Date(),
                    associations: [
                        { name: 'soccer' },
                        { name: 'ukraine' },
                        { name: 'ukrainian' },
                        { name: 'khmelnitskiy' },
                        { name: 'dieppe' },
                    ],
                    note: '2 daughters. younger is Zlata and elder is Sofa. wife - Erica. Plays good. Phone xxx-xxx-xx-xx',
                },
                {
                    name: 'Clarisse',
                    place: 'hospital',
                    date: new Date(),
                    associations: [
                        { name: 'hospital' },
                        { name: 'nurse' },
                        { name: 'french' },
                        { name: 'victoria-daughter' },
                        { name: 'glasses' },
                    ],
                    note: 'first surved and helped a lot. very nice',
                },
                {
                    name: 'Dave',
                    place: 'Isabella\'s birthday party',
                    date: new Date(),
                    associations: [
                        { name: 'birthday party' },
                        { name: 'daycare' },
                        { name: 'roman-son' },
                        { name: 'big house' },
                        { name: 'dieppe' },
                        { name: 'great host' },
                    ],
                    note: 'Dave was born in Moncton, wife ??? from Columbia, Isabella turned 3 in 2018, dog Phoenix',
                },
                {
                    name: 'Bob',
                    place: 'Isabella\'s birthday party',
                    date: new Date(),
                    associations: [
                        { name: 'birthday party' },
                        { name: 'daycare' },
                        { name: 'roman-son' },
                        { name: 'big house' },
                        { name: 'dieppe' },
                        { name: 'funny' },
                        { name: 'ymca' },
                    ],
                    note: 'wife Jane, 7 years daughter (2018), works at ymca, very funny',
                }
            ] as IPerson[];

        return of(people).pipe(delay(1000));
    }
}