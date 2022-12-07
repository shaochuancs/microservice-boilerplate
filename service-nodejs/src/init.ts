/**
 * Created by cshao on 2021/12/12
 */

'use strict';

const path = require('path');
const log4js = require('log4js');

import client from './eureka/EurekaClient';

function init() {
  log4js.configure(path.resolve(__dirname, '../config/log4js.json'));

  client.start();

  // Init database connection etc. and wait for complete.
}

export default init;
