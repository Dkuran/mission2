import { MaskedCreditcardPipe } from './masked-creditcard.pipe';

describe('MaskedCreditcardPipe', () => {
  it('create an instance', () => {
    const pipe = new MaskedCreditcardPipe();
    expect(pipe).toBeTruthy();
  });
});
