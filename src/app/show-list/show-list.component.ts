import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from './../post.interface';
import { HttpClient } from '@angular/common/http';

interface Pokemon {
	sprites: {
		front_default: string;
	};
}
@Component({
	selector: 'app-show-list',
	templateUrl: './show-list.component.html',
	styleUrls: [ './show-list.component.scss' ]
})
export class ShowListComponent implements OnInit {
	@Input() dataToShow: Post[];
	@Output() deletePosts = new EventEmitter<string>();
	public url = 'https://pokeapi.co/api/v2/pokemon/';

	constructor(private _http: HttpClient) {}

	ngOnInit() {
		console.log(this.dataToShow);
		for (const post of this.dataToShow) {
			this.obtainImage(post);
		}
	}

	deletePost(id) {
		console.log(id);
		this.deletePosts.emit(id);
	}

	obtainImage(post: Post) {
		const url = this.url + post.id + '/';
		this._http.get(url).subscribe((respuesta: Pokemon) => {
			post.url = respuesta.sprites.front_default;
			console.log(respuesta.sprites.front_default);
		});
	}
}
