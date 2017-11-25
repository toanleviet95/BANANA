import { Component, OnInit } from '@angular/core';
import { Posts, PostsRealtime, Comments, CommentsRealtime, FireLoopRef } from '../../../../shared/sdk/models';
import { RealTime, PostsApi, CommentsApi } from '../../../../shared/sdk/services';
declare var jquery;
declare var $;

@Component ({
    templateUrl: './newsfeed-content.component.html'
})

export class NewsfeedContentComponent implements OnInit {
  private post: Posts  = new Posts();
  private posts = [];
  private postRealtime: PostsRealtime  = new PostsRealtime();
  private postRealtimes = [];
  private comment: Comments  = new Comments();
  private comments = [];
  private postRealtimeRef: FireLoopRef<PostsRealtime>;
  constructor(private rt: RealTime, private postsApi: PostsApi, private commentsApi: CommentsApi) {
    // Init demo
    this.postRealtime.content = '';
    this.rt.onReady().subscribe(() => {
      this.postRealtimeRef = this.rt.FireLoop.ref<PostsRealtime>(PostsRealtime);
      this.postRealtimeRef.on('change').subscribe((postsRealtimes: any) => {
        if (!postsRealtimes || postsRealtimes.length === 0) {
          this.postsApi.find().subscribe((objects: any) => {
            if (objects.length === 0) {
              this.postRealtimes = [];
              return;
            }
            for (let i = 0; i < objects.length; i++) {
              this.postRealtimes.push({
                id: objects[i].id,
                content: objects[i].content
              });
            }
          });
        } else {
          this.postRealtimes = postsRealtimes;
        }
      });
    });
  }

  ngOnInit() {
    $('#chat-block').stick_in_parent({
        parent: '#page-contents',
        offset_top: 70
    });

    $('#sticky-sidebar').stick_in_parent({
        parent: '#page-contents',
        offset_top: 70
    });
}

  onCreatePost(): void {
    if (!this.postRealtime.content.trim()) {
      return;
    }

    this.postRealtimeRef.create(this.postRealtime).subscribe((postRealtime: PostsRealtime) => {
      this.postRealtime = new PostsRealtime();
    });
    this.post.account_id = 1;
    this.post.content = this.postRealtime.content;
    this.postsApi.create(this.post).subscribe((post: Posts) => {
      console.log(post);
      this.post = new Posts();
    }, (err: Error) => {
      console.log(err);
    });
  }

  onUpdatePost(postRealtime: PostsRealtime): void {
    this.postRealtimeRef.upsert(postRealtime).subscribe();
    const obj = new Posts();
    obj.id = postRealtime.id;
    obj.content = postRealtime.content;
    obj.account_id = 1;
    this.postsApi.upsert(obj).subscribe();
  }

  onRemovePost(postRealtime: PostsRealtime): void {
    this.postRealtimeRef.remove(postRealtime).subscribe();
    this.postsApi.deleteById(postRealtime.id).subscribe();
  }


}
