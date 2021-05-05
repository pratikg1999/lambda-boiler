const nconf = require('nconf');
require('./config').loadConfig();
const { handler } = require('./index');

console.log('configs', nconf.get());
const event = {}; // create a custom event
handler(event);
