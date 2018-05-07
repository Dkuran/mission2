import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'maskedCreditcard'
})
export class MaskedCreditcardPipe implements PipeTransform {
	transform(creditCard: string, args?: any): any {
		// creditCard.replace();
		let text = '';
		let cont = 0;
		for (let i = 0; i <= creditCard.length; i++) {
			if (cont === 4) {
				text += ' ';
				cont = 0;
			}
			if (i < 12) {
				text += '*';
			} else {
				text += creditCard.charAt(i);
			}
			cont++;
		}
		return text;
	}
}
