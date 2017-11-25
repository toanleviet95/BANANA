import {Model} from "@mean-expert/model";
/**
 * @module Comments
 * @description
 **/
@Model({
  hooks: {
    access: {name: 'access', type: 'operation'},
    persist: {name: 'persist', type: 'operation'},
    afterSave: {name: 'after save', type: 'operation'},
    beforeSave: {name: 'before save', type: 'operation'},
    beforeDelete: {name: 'before delete', type: 'operation'},
    afterDelete: {name: 'after delete', type: 'operation'},
    beforeMyRemote: {name: 'myRemote', type: 'beforeRemote'},
    afterMyRemote: {name: 'myRemote', type: 'afterRemote'},
  },
  remotes: {
    myRemote: {
      returns: {arg: 'result', type: 'array'},
      http: {path: '/my-remote', verb: 'get'}
    }
  }
})

class Comments {
  constructor(public model: any) {
  }

  access(ctx: any, next: Function): void {
    next();
  }

  persist(ctx: any, next: Function): void {
    next();
  }

  beforeSave(ctx: any, next: Function): void {
    next();
  }

  beforeMyRemote(ctx: any, next: Function) {
    next();
  }

  myRemote(next: Function): void {
    this.model.find(next);
  }

  afterMyRemote(ctx: any, next: Function) {
    next();
  }

  beforeDelete(ctx: any, next: Function): void {
    next();
  }

  afterDelete(ctx: any, next: Function): void {
    next();
  }

}

module.exports = Comments;
