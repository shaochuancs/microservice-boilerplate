/**
 * Created by cshao on 2022/12/7.
 */

'use strict';

import Eureka from 'eureka-js-client';

const client = new Eureka({
  instance: {
    app: 'service-nodejs',
    hostName: 'localhost',
    ipAddr: '127.0.0.1',
    statusPageUrl: 'http://localhost:3000/actuator/info',
    port: {
      '$': 3000,
      '@enabled': true
    },
    vipAddress: 'localhost',
    dataCenterInfo: {
      '@class': 'com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo',
      name: 'MyOwn'
    }
  },
  eureka: {
    host: 'localhost',
    port: 8761,
    servicePath: '/eureka/apps/'
  }
});

export default client;