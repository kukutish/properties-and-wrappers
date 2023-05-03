const character = {
  name: 'Ручник',
  type: 'Swordsman',
  health: 50,
  level: 1,
  attack: 50,
  defence: 10,
};

function getState(obj) {
  const emoji = {
    Bowman: '😠',
    Swordsman: '😡',
    Magician: '🧐',
    Daemon: '👿',
    Undead: '💀',
    Zombie: '🧟',
  };
  const result = [];
  const {
    name,
    type,
    health,
    level,
    attack,
    defence,
  } = obj;
  result.push(`${emoji[type]}`);
  result.push(`${[...name].shift()}(${level})`);
  result.push(`⚔${attack}`);
  result.push(`🛡${defence}`);
  result.push(`❤${health}`);
  return result.join(' ');
}

console.log(getState(character));

export { getState, character };
