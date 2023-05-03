import orderByProps from "../app";

test('array sorting', () => {
  const obj = {
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40,
  };
  const result = [
    { key: 'level', value: '2' },
    { key: 'health', value: '10' },
    { key: 'attack', value: '80' },
    { key: 'defence', value: '40' },
    { key: 'name', value: 'мечник' },
  ];

  const val = orderByProps(obj, ["level", "health"]);

  expect(val).toEqual(result);
});
