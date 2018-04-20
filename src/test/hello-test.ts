
import { expect } from 'chai';
import 'mocha';
import { Math2dUtil } from '../sk/runtime/math/Math2dUtil';

describe('isSamePoint function', () => {
   it('same point', () => {
      var a = { x: 1, y: 1 };
      var b = { x: 1, y: 1 };
      expect(true).to.equal(Math2dUtil.isSamePoint(a, b));
   });
});