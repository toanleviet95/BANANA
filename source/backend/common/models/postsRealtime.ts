import {Model} from "@mean-expert/model";
/**
 * @module PostsRealtime
 * @description
 **/
@Model({
  hooks: {
    beforeSave: {name: 'before save', type: 'operation'}
  },
  remotes: {
    myRemote: {
      returns: {arg: 'result', type: 'array'},
      http: {path: '/my-remote', verb: 'get'}
    }
  }
})

class PostsRealtime {
  constructor(public model: any) {}

  beforeSave(ctx: any, next: Function): void {
    next();
  }

  myRemote(next: Function): void {
    this.model.find(next);
  }
}

module.exports = PostsRealtime;
