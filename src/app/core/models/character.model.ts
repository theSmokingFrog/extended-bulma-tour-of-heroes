export class Character {
  id: number;
  name: string;
  alterEgo: string;
  alignment: string;
  species: string;

  fromJson(json: Object): Character {
    return Object.assign(Object.create(Character.prototype), json);
  }

  fromJsonAr(jsonAr: Object[]): Character[] {
    if (jsonAr !== null && jsonAr !== undefined) {
      return jsonAr.map(entry => Character.prototype.fromJson(entry));
    }
  }

  toJSON() {
    return Object.assign({}, this);
  }

  public get displayname(): string {
    return this.name ? this.name : this.alterEgo;
  }

  public get twitterHandle(): string {
    const splittedName = this.name.split(' ');
    const splittedAlterEgo = this.alterEgo.split(' ');

    return `${splittedName.length > 0 ? splittedName[0] : ''}${splittedAlterEgo.length > 1 ? splittedAlterEgo[1] : '_'}`;
  }
}
