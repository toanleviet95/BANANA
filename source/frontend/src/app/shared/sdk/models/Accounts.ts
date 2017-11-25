/* tslint:disable */

declare var Object: any;
export interface AccountsInterface {
  "id"?: number;
  "email": string;
  "password": string;
  "role_id": number;
  "platform_id": number;
  "first_name"?: string;
  "last_name"?: string;
  "date_of_birth"?: string;
  "gender"?: number;
  "city"?: string;
  "country"?: string;
  "description"?: string;
  "schools"?: string;
  "interests"?: string;
  "avatar"?: string;
  "background_cover"?: string;
  "friends"?: number;
  "token"?: string;
  "created_at"?: string;
  "updated_at"?: string;
}

export class Accounts implements AccountsInterface {
  "id": number;
  "email": string;
  "password": string;
  "role_id": number;
  "platform_id": number;
  "first_name": string;
  "last_name": string;
  "date_of_birth": string;
  "gender": number;
  "city": string;
  "country": string;
  "description": string;
  "schools": string;
  "interests": string;
  "avatar": string;
  "background_cover": string;
  "friends": number;
  "token": string;
  "created_at": string;
  "updated_at": string;
  constructor(data?: AccountsInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Accounts`.
   */
  public static getModelName() {
    return "Accounts";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Accounts for dynamic purposes.
  **/
  public static factory(data: AccountsInterface): Accounts{
    return new Accounts(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'Accounts',
      plural: 'Accounts',
      path: 'Accounts',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'number'
        },
        "email": {
          name: 'email',
          type: 'string'
        },
        "password": {
          name: 'password',
          type: 'string'
        },
        "role_id": {
          name: 'role_id',
          type: 'number'
        },
        "platform_id": {
          name: 'platform_id',
          type: 'number'
        },
        "first_name": {
          name: 'first_name',
          type: 'string'
        },
        "last_name": {
          name: 'last_name',
          type: 'string'
        },
        "date_of_birth": {
          name: 'date_of_birth',
          type: 'string'
        },
        "gender": {
          name: 'gender',
          type: 'number'
        },
        "city": {
          name: 'city',
          type: 'string'
        },
        "country": {
          name: 'country',
          type: 'string'
        },
        "description": {
          name: 'description',
          type: 'string'
        },
        "schools": {
          name: 'schools',
          type: 'string'
        },
        "interests": {
          name: 'interests',
          type: 'string'
        },
        "avatar": {
          name: 'avatar',
          type: 'string'
        },
        "background_cover": {
          name: 'background_cover',
          type: 'string'
        },
        "friends": {
          name: 'friends',
          type: 'number'
        },
        "token": {
          name: 'token',
          type: 'string'
        },
        "created_at": {
          name: 'created_at',
          type: 'string'
        },
        "updated_at": {
          name: 'updated_at',
          type: 'string'
        },
      },
      relations: {
      }
    }
  }
}
