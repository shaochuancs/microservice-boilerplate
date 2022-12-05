/**
 * Created by cshao on 2021/12/12
 */

'use strict';

const path = require('path');
const log4js = require('log4js');

// Loading config from config server
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import config from "./config/ServiceConfig";

function init() {
  log4js.configure(path.resolve(__dirname, '../config/log4js.json'));

  // Init database connection etc. and wait for complete.
}

export default init;
