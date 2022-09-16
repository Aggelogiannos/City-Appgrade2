export class User{
  //Attributes
  id
  email
  requests
  roles
  isBlocked

  constructor(id = "", email = "", requests = [], roles = [], isBlocked = false){
    this.id = id
    this.email = email
    this.requests = requests
    this.roles = roles
    this.isBlocked = isBlocked
  }
}
