export default function sort(characters) {
  characters.sort((a, b) => (a.health < b.health ? 1 : -1));
  return characters;
}
