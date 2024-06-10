import { Animal } from './animal.model';

export class SittingDto {
  constructor(
    public title: string,
    public description: string,
    public shiftBeggining: string,
    public shiftEnd: string,
    public userId: string,
    public animalId: string
  ) {

  }
}
