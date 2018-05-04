import { Component, OnInit, Input } from '@angular/core';
import { Post } from './../post.interface';

@Component({
	selector: 'app-show-list',
	templateUrl: './show-list.component.html',
	styleUrls: [ './show-list.component.scss' ]
})
export class ShowListComponent implements OnInit {
	@Input() dataToShow: Post;
	constructor() {}

	ngOnInit() {}
}
