import { getState, character } from '../destructuring-hard';

test('character state check', () => {
  const resultFunk = getState(character);

  expect(resultFunk).toEqual('😠 Л(1) ⚔40 🛡10 ❤50');
});
