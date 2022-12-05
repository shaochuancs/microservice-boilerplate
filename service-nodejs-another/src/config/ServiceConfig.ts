/**
 * Created by cshao on 2022/11/30.
 */

'use strict';

const client = require('cloud-config-client');
const path = require('path');
const propertiesReader = require('properties-reader');

const properties = propertiesReader(path.resolve(__dirname, '../config/application.properties'));

interface ConfigFromServer {
  properties: { [key: string]: any }
  raw: { [key: string]: any }
  get(keyParts: string): any
  forEach(callback: (property: string, value: string) => void, includeOverridden?: boolean): void
  toObject(): { [key: string]: any }
  toString(spaces: number): string
}
const configFromServer: ConfigFromServer = {
  properties: {},
  raw: {},
  get: null,
  forEach: null,
  toObject: null,
  toString: null
};
const functionsToAssign = ['get', 'forEach', 'toObject', 'toString'];
const ERROR_UNINITIALIZED = 'Config from server uninitialized';
functionsToAssign.forEach((funcName) => {
  configFromServer[funcName] = ()=>{
    throw new Error(ERROR_UNINITIALIZED);
  };
});

function loadConfigFromServer() {
  return client.load({
    endpoint: properties.get('config.server'),
    application: properties.get('application.name'),
    profiles: properties.get('application.profile')
  }).then((conf) => {
    Object.assign(configFromServer, conf);
    functionsToAssign.forEach((funcName) => {
      configFromServer[funcName] = conf[funcName];
    });
  });
}
loadConfigFromServer();

const config = {
  get: (keyParts: string) => {
    const value = properties.get(keyParts);
    if (value) {
      return value;
    }
    return configFromServer.get(keyParts);
  }
};

export default config;