const AWS = require('aws-sdk');

// Import all config variables required;
const {
  NODE_ENV,
} = require('nconf').get();

const someAWSService = async () => {
  if (NODE_ENV === 'lambda') {
    AWS.dosomething(); // on lambda do this
  } else {
    AWS.dosomethingelse(); // on every other machine do this
  }
};

module.exports = {
  someAWSService,
};
