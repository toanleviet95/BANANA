/* tslint:disable */

declare var Object: any;
export interface CommentsRealtimeInterface {
  "id"?: number;
  "account_id": number;
  "post_id": number;
  "content": string;
  "created_at"?: string;
  "updated_at"?: string;
}

export class CommentsRealtime implements CommentsRealtimeInterface {
  "id": number;
  "account_id": number;
  "post_id": number;
  "content": string;
  "created_at": string;
  "updated_at": string;
  constructor(data?: CommentsRealtimeInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `CommentsRealtime`.
   */
  public static getModelName() {
    return "CommentsRealtime";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of CommentsRealtime for dynamic purposes.
  **/
  public static factory(data: CommentsRealtimeInterface): CommentsRealtime{
    return new CommentsRealtime(data);
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
      name: 'CommentsRealtime',
      plural: 'CommentsRealtimes',
      path: 'CommentsRealtimes',
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
