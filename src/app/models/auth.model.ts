export class SignUpDto {
  constructor(
    public pseudo: string,
    public password: string,
    public email: string
  ) {

  }
}

export class LoginDto {
  constructor(
    public username: string,
    public password: string
  ) {

  }
}
