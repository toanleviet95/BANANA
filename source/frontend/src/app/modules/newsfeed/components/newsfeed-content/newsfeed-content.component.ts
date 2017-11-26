import * as Cookies from 'js-cookie';
import { Component, OnInit } from '@angular/core';
declare var jquery;
declare var $;

@Component ({
    templateUrl: './newsfeed-content.component.html'
})

export class NewsfeedContentComponent implements OnInit {
  post = {
    content: null,
    comments: [],
    likes: 0,
    unlikes: 0,
    date: null,
  };

  comment = {
    content: '',
    date: null
  };

  posts = [];

  currentDate = null;

  user = {email: null, role: 1, name: null, avatar: null};

  ngOnInit() {
    this.user.email = Cookies.get('email');
    this.user.role =  Cookies.get('role');
    this.user.name =  Cookies.get('name');
    this.user.avatar =  Cookies.get('avatar') || 'http://placehold.it/300x300';
  }

  onPost() {
    this.post.date = new Date();
    this.posts.unshift(this.post);
    this.post = {
      content: null,
      comments: [],
      likes: 0,
      unlikes: 0,
      date: null
    };
  }

  onComment(index: number, keyCode) {
    if (keyCode === 13) {
      this.comment.date =  new Date();
      this.posts[index].comments.push(this.comment);
      this.comment = {
        content: '',
        date: null
      };
    }

  }
}
