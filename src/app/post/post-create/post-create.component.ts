import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent implements OnInit {
  enteredTitle = '';
  enteredContent = '';
  @Output() postCreated = new EventEmitter();
  constructor() {}

  ngOnInit() {}
  onSave() {
    const posts = {
      title: this.enteredTitle,
      content: this.enteredContent
    };
    this.postCreated.emit(posts);
  }
}
