import { utilsBr } from '../index';
import { expect } from 'chai';

describe('Utils test', () => {

  it('Utils currencyToNumber Currency', () => {
    const number = 1234456.44;
    // Br format
    const currency = utilsBr.currencyToNumber(' R$ 1.234.456,44 ');
    expect(currency).to.be.equal(number);

    // USA format
    const currencyFormatEN = utilsBr.currencyToNumber(' R$ 1234456.44 ');
    expect(currencyFormatEN).to.be.equal(number);

    const currencyEN = utilsBr.currencyToNumber(' USD 1234456.44 ');
    expect(currencyEN).to.be.equal(number);
  });
  it('Utils currencyToNumber Porcentagem', () => {
    const percent = utilsBr.currencyToNumber(' 1.234.456,44%');
    expect(percent).to.be.equal(1234456.44);

    const percent2 = utilsBr.currencyToNumber(' 12 % ');
    expect(percent2).to.be.equal(12);
  });
  it('Utils numberToCurrency R$ 12,00', () => {
    const currencyNumber = utilsBr.numberToCurrency(12);
    expect(currencyNumber).to.be.equal(' R$ 12,00 ');
  });
  it('Utils numberToCurrency R$ 0.95 ', () => {
    const currencyNumber = utilsBr.numberToCurrency(0.95);
    expect(currencyNumber).to.be.equal(' R$ 0,95 ');
  });
  it('Utils numberToCurrency R$ 0,10 ', () => {
    const currencyNumber = utilsBr.numberToCurrency(0.1);
    expect(currencyNumber).to.be.equal(' R$ 0,10 ');
  })
});
