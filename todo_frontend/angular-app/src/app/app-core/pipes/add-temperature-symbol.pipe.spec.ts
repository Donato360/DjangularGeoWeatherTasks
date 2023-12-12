import { AddTemperatureSymbolPipe } from '@pipes/add-temperature-symbol.pipe';

describe('AddTemperatureSymbolPipe', () => {
  it('create an instance', () => {
    const pipe = new AddTemperatureSymbolPipe();
    expect(pipe).toBeTruthy();
  });
});
