const script = require('./script');
require('./config').loadConfig();


exports.handler = async (event) => {
  try {
    console.log('Executing script.....');
    await script.main(event);
  } catch (err) {
    console.log(err);
  }
  const response = {
    statusCode: 200,
    body: JSON.stringify('Script execution successful!'),
  };
  return response;
};
