import Magician from '../Magician';
import Daemon from '../Daemon';

test('test stoned attack 100%', () => {
  const diablo = new Daemon('Diablo');
  diablo.attack = 100;
  diablo.distance = 3;
  expect(diablo.attack).toBe(80);
});

test('test stoned attack - true\false', () => {
  const gendalf = new Magician('Gendalf');
  gendalf.stoned = true;
  expect(gendalf.stoned).toBe(true);
});

test('test stoned attack < 0', () => {
  const diablo = new Daemon('Diablo');
  diablo.attack = 13;
  diablo.distance = 3;
  diablo.stoned = true;
  expect(diablo.attack).toBe(2);
});

test('test stoned attack < 0', () => {
  const gendalf = new Magician('Gendalf');
  gendalf.attack = 1;
  gendalf.distance = 4;
  gendalf.stoned = true;
  expect(gendalf.attack).toBe(0);
});

test('test stoned attack 200%', () => {
  const diablo = new Daemon('Diablo');
  diablo.attack = 200;
  diablo.distance = 2;
  diablo.stoned = true;
  expect(diablo.attack).toBe(175);
});
