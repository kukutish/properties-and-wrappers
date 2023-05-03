function orderByProps(obj, arr) {
  const object = Object.assign(obj);
  const result = [];
  arr.forEach((elem) => {
    for (const key in object) {
      if (elem === key) {
        result.push({ key: `${key}`, value: `${object[key]}` });
        delete object[key];
      }
    }
  });
  const sortName = [];
  for (const key in object) {
    sortName.push({ key: `${key}`, value: `${object[key]}` });
  }
  sortName.sort((a, b) => a.key > b.key ? 1 : -1);
  return [...result, ...sortName];
}

const obj = {
  name: 'мечник',
  health: 10,
  level: 2,
  attack: 80,
  defence: 40,
};

export default orderByProps
