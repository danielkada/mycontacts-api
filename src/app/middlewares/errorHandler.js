module.exports = (error, request, response, _) => {
  console.log('error handler');
  console.log(error);
  response.sendStatus(500);
};
