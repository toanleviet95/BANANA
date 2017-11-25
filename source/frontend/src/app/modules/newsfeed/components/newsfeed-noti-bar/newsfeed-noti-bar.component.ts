import { Component, OnInit } from '@angular/core';

@Component ({
    selector: 'app-newsfeed-noti-bar',
    templateUrl: './newsfeed-noti-bar.component.html'
})

export class NewsfeedNotiBarComponent implements OnInit {
    arrContent = [];
    content = { header: '', content: '' };
    idx = 0;

    ngOnInit() {
      this.arrContent = [
        {
          header: 'Thông báo (Lần 1) V/v: Thực hiện nội quy quản lý sử dụng Nhà Chung cư ...',
          content: 'Bản Nội quy này quy định các nội dung về quản lý sử dụng cụm nhà chung cư Him Lam Chợ Lớn ...'
        },
        {
          header: 'Thông báo (Lần 2) V/v: Thực hiện nội quy quản lý sử dụng Nhà Chung cư ...',
          content: 'Bản Nội quy này quy định các nội dung về quản lý sử dụng cụm nhà chung cư Him Lam Chợ Lớn ...'
        },
        {
          header: 'Thông báo (Lần 3) V/v: Thực hiện nội quy quản lý sử dụng Nhà Chung cư ...',
          content: 'Bản Nội quy này quy định các nội dung về quản lý sử dụng cụm nhà chung cư Him Lam Chợ Lớn ...'
        },
        {
          header: 'Thông báo (Lần 4) V/v: Thực hiện nội quy quản lý sử dụng Nhà Chung cư ...',
          content: 'Bản Nội quy này quy định các nội dung về quản lý sử dụng cụm nhà chung cư Him Lam Chợ Lớn ...'
        }
      ];
      this.content = this.arrContent[0];
    }

    onNext() {
      this.idx++;
      if (this.idx === this.arrContent.length) {
        this.idx = 0;
      }
      this.content = this.arrContent[this.idx];
    }

    onPrev() {
      this.idx--;
      if (this.idx === -1) {
        this.idx = this.arrContent.length;
      }
      this.content = this.arrContent[this.idx];
    }
}
