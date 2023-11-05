import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})

export class DbzService {

  public character: Character[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 1000
  },{
    id: uuid(),
     name: 'Goku',
     power: 9500
  },{
    id: uuid(),
    name: 'Vegeta',
    power: 7500
  }];

  addCharacter( character: Character):void {

    const newCharacter: Character = {id: uuid(), ...character }

    this.character.push(newCharacter);
  }

  // onDeleteCharacter( index: number ):void {
  //   this.character.splice(index, 1);
  // }

  deleteCharacterById( id:string ) {
    this.character = this.character.filter( character => character.id !== id );
  }

}
