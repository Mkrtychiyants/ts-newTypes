import Cart from '../service/Cart';
import MusicAlbum from '../domain/MusicAlbum';
import Movie from '../domain/Movie';

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});
test('card should not be empty', () => {
  const cart = new Cart();
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(111,'Avengers','Мстители',190,2012,'USA','Avengers Assemble','action, fantasy, adventures', 137));
  expect(cart.items.length).toBe(2);
});
