import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShowListComponent } from './show-list/show-list.component';
import { HighlightDirective } from './highlight.directive';
import { HighlightHoverDirective } from './directive/highlight-hover.directive';
import { MaskedCreditcardPipe } from './pipes/masked-creditcard.pipe';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
	declarations: [
		AppComponent,
		ShowListComponent,
		HighlightDirective,
		HighlightHoverDirective,
		MaskedCreditcardPipe
	],
	imports: [ BrowserModule, HttpClientModule ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
