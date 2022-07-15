const app = require('../app');
const db = require('../db');

const PORT = process.env.PORT || 5000;

db.then(() => {
  console.log('Database connection successful');
  app.listen(PORT, () => {
    console.log(`Server running. Use our API on port: ${PORT}`);
  });
});
