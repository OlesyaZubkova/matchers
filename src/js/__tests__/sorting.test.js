import sort from '../sorting';

describe('should sort state of health correctly', () => {
  test('should sort elements with toEquel', () => {
    const array = [
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
    ];
    const result = sort(array);

    const sortedCharacters = [
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
      { name: 'мечник', health: 10 },
    ];

    expect(result).toEqual(sortedCharacters);
  });

  test('should not sort elements with toBe', () => {
    const array = [
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
    ];
    const result = sort(array);

    const sortedCharacters = [
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
      { name: 'мечник', health: 10 },
    ];

    expect(result).not.toBe(sortedCharacters);
  });
});
