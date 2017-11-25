/* tslint:disable */

declare var Object: any;
export interface PostsRealtimeInterface {
  "content": string;
  "id"?: number;
}

export class PostsRealtime implements PostsRealtimeInterface {
  "content": string;
  "id": number;
  constructor(data?: PostsRealtimeInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `PostsRealtime`.
   */
  public static getModelName() {
    return "PostsRealtime";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of PostsRealtime for dynamic purposes.
  **/
  public static factory(data: PostsRealtimeInterface): PostsRealtime{
    return new PostsRealtime(data);
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
      name: 'PostsRealtime',
      plural: 'PostsRealtimes',
      path: 'PostsRealtimes',
      idName: 'id',
      properties: {
        "content": {
          name: 'content',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
      }
    }
  }
}
