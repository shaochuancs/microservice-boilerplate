/**
 * Created by cshao on 2021/12/12
 */

'use strict';

import ExampleModel from "../model/ExampleModel";

class ExampleService {
  private static example:ExampleModel = {
    y: 3000,
    x: 'default_secret'
  };

  static setExampleProperty(key:string, value:any) {
    if (value) {
      this.example[key] = value;
    }
  }

  static getExampleProperty(key:string) {
    return this.example[key];
  }
}

export default ExampleService;
