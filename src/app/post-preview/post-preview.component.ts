import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-preview',
  templateUrl: './post-preview.component.html',
  styleUrls: ['./post-preview.component.scss']
})
export class PostPreviewComponent implements OnInit {
  @Input() data: any = {};

  constructor(

  ) {
  }

  ngOnInit() {
  }

}
