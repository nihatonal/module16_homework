import { expect } from '@jest/globals';
import define from '../16.2';

describe('define object is rectangular or not', () => {
    const x = 3, y = 4, z = 5;
    it(`${x}*${x} + ${y}*${y} = ${z}*${z} equal to rectangular `, () => {
      const result = define(x, y, z);
      expect(result).toBe("Это прямоугольный треугольник!");
    });

    it('3*3 + 6*6 = 8*8 not equal to rectangular ', () => {
      const result = define(3, 6, 8);
      expect(result).toBe("Это не прямоугольный треугольник!");
    });

    it('Correctly works with numbers as strings input', () => {
      const result = define('3', '4', '5');
      expect(result).toBe("Это прямоугольный треугольник!");
    });

    it('String input returns error message', () => {
      const result = define('a', 'b', 'c');
      expect(result).toBe("Введены неверные данные");
    });
   
  });

// При объявлении констант им нужно сразу присвоить значение, иначе получается синтаксическая ошибка
// Если в модуле при экспорте функции или переменной используется export default, то при импорте этой функции или переменной не нужно использовать фигурные скобки.
// Кроме того, по заданию нужно было сделать 3 тестовых кейса и протестировать различные тестовые сценарии выполнения функции
// Всё вышеперечисленное исправила