/* tslint:disable */

declare var Object: any;
export interface CommentsInterface {
  "id"?: number;
  "account_id": number;
  "post_id": number;
  "content": string;
  "created_at"?: string;
  "updated_at"?: string;
}

export class Comments implements CommentsInterface {
  "id": number;
  "account_id": number;
  "post_id": number;
  "content": string;
  "created_at": string;
  "updated_at": string;
  constructor(data?: CommentsInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Comments`.
   */
  public static getModelName() {
    return "Comments";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Comments for dynamic purposes.
  **/
  public static factory(data: CommentsInterface): Comments{
    return new Comments(data);
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
      name: 'Comments',
      plural: 'Comments',
      path: 'Comments',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'number'
        },
        "account_id": {
          name: 'account_id',
          type: 'number'
        },
        "post_id": {
          name: 'post_id',
          type: 'number'
        },
        "content": {
          name: 'content',
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
