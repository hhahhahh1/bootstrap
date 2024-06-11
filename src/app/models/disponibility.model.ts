export class Disponibility {

  constructor(

    public id: string,
    public shiftBeggining: string,
    public shiftEnd: string,
    public indisponibility: Indisponibility[]


  ) {

  }

}


export class Indisponibility {

  constructor(

    public id: string,
    public shiftBeggining: string,
    public shiftEnd: string
  ) {

  }

}
