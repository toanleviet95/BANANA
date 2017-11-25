/* tslint:disable */
import { Injectable } from '@angular/core';
import { Accounts } from '../../models/Accounts';
import { Roles } from '../../models/Roles';
import { Platforms } from '../../models/Platforms';
import { Posts } from '../../models/Posts';
import { PostsRealtime } from '../../models/PostsRealtime';
import { Comments } from '../../models/Comments';
import { CommentsRealtime } from '../../models/CommentsRealtime';

export interface Models { [name: string]: any }

@Injectable()
export class SDKModels {

  private models: Models = {
    Accounts: Accounts,
    Roles: Roles,
    Platforms: Platforms,
    Posts: Posts,
    PostsRealtime: PostsRealtime,
    Comments: Comments,
    CommentsRealtime: CommentsRealtime,
    
  };

  public get(modelName: string): any {
    return this.models[modelName];
  }

  public getAll(): Models {
    return this.models;
  }

  public getModelNames(): string[] {
    return Object.keys(this.models);
  }
}
