/* tslint:disable */

declare var Object: any;
export interface PlatformsInterface {
  "id"?: number;
  "platform": string;
  "created_at"?: string;
  "updated_at"?: string;
}

export class Platforms implements PlatformsInterface {
  "id": number;
  "platform": string;
  "created_at": string;
  "updated_at": string;
  constructor(data?: PlatformsInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Platforms`.
   */
  public static getModelName() {
    return "Platforms";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Platforms for dynamic purposes.
  **/
  public static factory(data: PlatformsInterface): Platforms{
    return new Platforms(data);
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
      name: 'Platforms',
      plural: 'Platforms',
      path: 'Platforms',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'number'
        },
        "platform": {
          name: 'platform',
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
