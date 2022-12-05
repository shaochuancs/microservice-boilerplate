/**
 * Created by cshao on 2021/12/12
 */

'use strict';

import ExampleService from "../../src/service/ExampleService";

describe('Test ConfigService', ()=>{
  test('can set config and then read value', ()=>{
    ExampleService.setExampleProperty('SECRET', 'An unknown secret spread');
    expect(ExampleService.getExampleProperty('SECRET')).toBe('An unknown secret spread');
  });
});
