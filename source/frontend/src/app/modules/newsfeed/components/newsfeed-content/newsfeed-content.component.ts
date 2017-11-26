import { Cookies } from 'js-cookie';
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

  ngOnInit() {
    const email = Cookies.get('email');
    const role =  Cookies.get('role');
    if (typeof email === 'undefined' || typeof role === 'undefined') {
      window.location.href = './authenticate';
      return;
    }
    console.log(email + role);
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
