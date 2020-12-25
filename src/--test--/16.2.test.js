import { expect } from '@jest/globals';
import {define} from '../16.2';

describe('define object is rectangular or not', () => {
    const x,y,z;
    it(`${x}*${x} + ${y}*${y} = ${z}*${z} equal to rectangular `, () => {
      const result = define(a:3,b:4,c:5);
      expect(result).toBe("Это прямоугольный треугольник!");
    });
   
  });