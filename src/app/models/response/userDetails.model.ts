import { Animal } from '../animal.model';
import { Disponibility } from '../disponibility.model';
import { Address } from '../address.model';

export class UserDetails {

  constructor(

    public id: string,
    public pseudo: string,
    public firstName: string,
    public lastName: string,
    public email: string,
    public age: number,
    public phone: string,
    public adress: Address,
    public animals: Animal[],
  ) {

  }

}

