const obj = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 3,
  attack: 40,
  defence: 10,
  special: [
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон',
    },
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...',
    },
  ],
};

function getSpecial({ special }) {
  special.forEach((elem) => {
    if (!elem.description) {
      elem.description = 'Описание недоступно';
    }
  });
  return special;
}

console.log(getSpecial(obj));

export { obj, getSpecial };
