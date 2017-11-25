/* tslint:disable */

declare var Object: any;
export interface RolesInterface {
  "id"?: number;
  "role": string;
  "description"?: string;
  "created_at"?: string;
  "updated_at"?: string;
}

export class Roles implements RolesInterface {
  "id": number;
  "role": string;
  "description": string;
  "created_at": string;
  "updated_at": string;
  constructor(data?: RolesInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Roles`.
   */
  public static getModelName() {
    return "Roles";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Roles for dynamic purposes.
  **/
  public static factory(data: RolesInterface): Roles{
    return new Roles(data);
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
      name: 'Roles',
      plural: 'Roles',
      path: 'Roles',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'number'
        },
        "role": {
          name: 'role',
          type: 'string'
        },
        "description": {
          name: 'description',
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
