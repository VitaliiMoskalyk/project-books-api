const app = require('./app');

const { PORT = 3001 } = process.env;

app.listen(PORT, () => {
  console.log(`Server running. Use our API on port: ${PORT}.`);
});
//   .catch(error => {
//     console.log(error.message);
//     process.exit(1);
//   });